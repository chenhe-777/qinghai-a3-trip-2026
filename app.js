(() => {
  "use strict";

  const data = window.TRIP_DATA;
  const setupError = document.querySelector("#setup-error");
  const workspace = document.querySelector("#workspace");
  const asArray = (value) => Array.isArray(value) ? value : [];
  const escapeHtml = (input) => String(input ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
  const showValue = (value, fallback = "未获取") => escapeHtml(value || fallback);
  const formatMoney = (value) => Number.isFinite(value)
    ? `¥${new Intl.NumberFormat("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value)}`
    : "未获取";

  if (!data || !data.trip || !Array.isArray(data.days) || !Array.isArray(data.places) || !Array.isArray(data.meals) || !Array.isArray(data.checks)) {
    workspace.hidden = true;
    setupError.hidden = false;
    return;
  }

  const storageKey = `travel-planner:${data.trip.id || "trip"}:chronological-v1`;
  const defaultMealSelections = Object.fromEntries(data.meals.map((meal) => [meal.id, {
    primary: meal.selected?.primary || "",
    backup2: meal.selected?.backup2 || "",
    backup3: meal.selected?.backup3 || ""
  }]));

  let stored = {};
  try {
    stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch (_error) {
    stored = {};
  }

  const state = {
    activeDayId: data.days.some((day) => day.id === stored.activeDayId) ? stored.activeDayId : (data.days[0]?.id || ""),
    mealSelections: {},
    checks: { ...(stored.checks || {}) },
    activeView: location.hash === "#responsibilities" ? "preparation" : location.hash === "#booking" ? "records" : "itinerary",
    preparationReview: { ...(stored.preparationReview || {}) },
    captionSelections: { ...(stored.captionSelections || {}) }
  };

  data.meals.forEach((meal) => {
    const validIds = new Set(asArray(meal.candidates).filter((candidate) => candidate.rankable !== false).map((candidate) => candidate.id));
    const selection = { ...defaultMealSelections[meal.id], ...(stored.mealSelections?.[meal.id] || {}) };
    Object.keys(selection).forEach((rank) => {
      if (!validIds.has(selection[rank])) selection[rank] = "";
    });
    state.mealSelections[meal.id] = selection;
  });

  const saveState = () => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  };

  const getDay = () => data.days.find((day) => day.id === state.activeDayId) || data.days[0];
  const getRoute = (day) => {
    const routes = asArray(day?.routes);
    return routes.find((route) => route.id === day?.selectedRouteId) || routes[0] || null;
  };
  const getMealCandidate = (meal, candidateId) => asArray(meal.candidates).find((candidate) => candidate.id === candidateId);

  const renderBindings = () => {
    document.querySelectorAll("[data-bind]").forEach((element) => {
      const key = element.dataset.bind;
      element.textContent = data.trip[key] || "待确认";
    });

    const fixedEvents = document.querySelector("#fixed-events");
    if (fixedEvents) fixedEvents.innerHTML = asArray(data.trip.fixedEvents).map((item) => `<span>${showValue(item)}</span>`).join("");
  };

  const renderMode = () => {
    document.querySelectorAll("[data-stage]").forEach((item) => {
      item.classList.toggle("is-active", item.dataset.stage === "choice");
    });
  };

  const renderDayTabs = () => {
    const tabs = document.querySelector("#day-tabs");
    tabs.innerHTML = data.days.map((day, index) => `
      <button type="button" role="tab" data-action="select-day" data-day-id="${escapeHtml(day.id)}" aria-selected="${day.id === state.activeDayId}">
        <small>DAY ${String(index + 1).padStart(2, "0")}</small>
        <b>${showValue(day.label, "未命名日期")}</b>
        <span>${showValue(day.date, "日期待确认")}</span>
      </button>
    `).join("");
  };

  const renderSources = (sources, title = "资料依据") => {
    const items = asArray(sources);
    if (!items.length) return "";
    return `
      <details class="source-drawer">
        <summary>${escapeHtml(title)} <span>${items.length} 条</span></summary>
        <div class="source-list">
          ${items.map((source) => `
            <div class="source-item">
              ${source.url
                ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${showValue(source.label, "来源")}</a>`
                : `<b>${showValue(source.label, "来源")}</b>`}
              <p>${showValue(source.role, "用途未注明")}</p>
            </div>
          `).join("")}
        </div>
      </details>
    `;
  };

  const renderBookingOption = (option) => `
    <article class="booking-option">
      <span class="booking-level">${showValue(option.level, "候选")}</span>
      <h4>${showValue(option.title)}</h4>
      <p class="booking-route">${showValue(option.route)}</p>
      <dl>
        <div><dt>为什么</dt><dd>${showValue(option.reason)}</dd></div>
        <div class="is-caution"><dt>注意</dt><dd>${showValue(option.caution)}</dd></div>
      </dl>
      ${renderSources(option.sources, "航班资料")}
    </article>
  `;

  const renderHotelNight = (hotel) => {
    const choices = [hotel.primary, hotel.backup].filter(Boolean);
    return `
      <article class="hotel-night">
        <header><span>${showValue(hotel.date)}</span><div><b>${showValue(hotel.city)}</b><p>${showValue(hotel.role)}</p></div></header>
        <div class="hotel-choices${choices.length === 1 ? " is-single" : ""}">
          ${choices.map((choice) => `<section><small>${showValue(choice.area, "住宿")}</small><h4>${showValue(choice.name)}</h4><p>${showValue(choice.facts)}</p><em>${showValue(choice.why)}</em></section>`).join("")}
        </div>
        ${renderSources(hotel.sources, "住宿资料")}
      </article>
    `;
  };

  const renderBudget = (budget) => {
    if (!budget) return "";
    const categories = asArray(budget.categories);
    const lodging = asArray(budget.lodging);
    return `
      <section class="budget-summary" aria-labelledby="budget-title">
        <div class="budget-heading">
          <div><p class="micro-label">${showValue(budget.label, "费用统计")}</p><h3 id="budget-title">${showValue(budget.basis, "人均口径")}</h3></div>
          <div class="budget-total"><small>当前人均</small><strong>${formatMoney(budget.perPersonTotal)}</strong></div>
        </div>
        <div class="budget-categories">
          ${categories.map((item) => `<div><span>${showValue(item.label)}</span><b>${formatMoney(item.amount)}</b></div>`).join("")}
        </div>
        ${lodging.length ? `<details class="budget-breakdown"><summary>查看五晚住宿人均明细 <span>${lodging.length} 晚</span></summary><div>${lodging.map((item) => `<p><span>${showValue(item.date)} · ${showValue(item.label)}</span><b>${formatMoney(item.amount)}</b></p>`).join("")}</div></details>` : ""}
        <p class="budget-note">${showValue(budget.note)}</p>
      </section>
    `;
  };

  const renderBookingPlan = () => {
    const container = document.querySelector("#booking-content");
    const plan = data.trip.bookingPlan;
    if (!container || !plan) return;
    const flights = plan.lockedFlights || { constraint: plan.flight?.constraint, outbound: plan.flight?.outboundOptions, return: plan.flight?.returnOptions };
    const hotels = asArray(plan.areaPlans).length ? plan.areaPlans : plan.hotels;
    container.innerHTML = `
      <div class="booking-status"><span>${showValue(plan.status)}</span><b>${showValue(plan.headline)}</b></div>
      ${renderBudget(plan.budget)}
      <section class="booking-block">
        <div class="booking-block-heading"><span>01</span><div><h3>航班边界</h3><p>${showValue(flights.constraint)}</p></div></div>
        <h4 class="booking-subtitle">去程</h4>
        <div class="booking-options is-locked">${asArray(flights.outbound).map(renderBookingOption).join("")}</div>
        <h4 class="booking-subtitle">返程</h4>
        <div class="booking-options is-locked">${asArray(flights.return).map(renderBookingOption).join("")}</div>
      </section>
      <section class="booking-block">
        <div class="booking-block-heading"><span>02</span><div><h3>已预订住宿</h3><p>五晚住宿已经锁定；这里只保留导航、房型设施和入住前仍需确认的事项。</p></div></div>
        <div class="hotel-list">${asArray(hotels).map(renderHotelNight).join("")}</div>
      </section>
      <section class="hotel-search-rules">
        <p class="micro-label">入住前复核</p>
        <h3>订单已完成，接下来只检查会影响执行的条件</h3>
        <ol>${asArray(plan.searchRules).map((rule) => `<li>${showValue(rule)}</li>`).join("")}</ol>
      </section>
    `;
  };

  const normalizeMapPoints = (points) => asArray(points).filter((point) => Number.isFinite(point?.x) && Number.isFinite(point?.y));

  const renderRouteMap = (route) => {
    const routeMap = route?.map || {};
    const points = normalizeMapPoints(routeMap.points);
    if (points.length < 2) return "";
    const line = points.map((point) => `${point.x},${point.y}`).join(" ");
    return `
      <figure class="route-map">
        <figcaption><b>${showValue(routeMap.title, "今日路线关系")}</b><span>${showValue(routeMap.note, "位置为简化示意，出发前仍需实时导航。")}</span></figcaption>
        <svg viewBox="0 0 100 68" role="img" aria-label="${showValue(routeMap.title, "路线关系示意")}">
          <defs>
            <marker id="route-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z"></path></marker>
          </defs>
          <path class="map-contour contour-a" d="M-4 15 C12 5, 25 28, 43 15 S72 3, 104 19"></path>
          <path class="map-contour contour-b" d="M-4 55 C18 39, 29 61, 48 46 S76 37, 104 52"></path>
          <polyline class="route-line" points="${line}" marker-end="url(#route-arrow)"></polyline>
          ${points.map((point, index) => `
            <g class="map-point${index === 0 || index === points.length - 1 ? " is-end" : ""}">
              <circle cx="${point.x}" cy="${point.y}" r="${index === 0 || index === points.length - 1 ? 3.2 : 2.5}"></circle>
              <text x="${point.x}" y="${point.y < 15 ? point.y + 9 : point.y - 6}" text-anchor="middle">${showValue(point.label, `节点 ${index + 1}`)}</text>
            </g>
          `).join("")}
        </svg>
        <p class="map-note">关系示意 · 非实时导航</p>
      </figure>
    `;
  };

  const renderRouteOverview = (day, route) => {
    if (!route) return "";
    const hotel = asArray(data.trip.bookingPlan?.areaPlans)[data.days.indexOf(day)];
    const stops = asArray(route.placeIds).map(id => data.places.find(p=>p.id===id)?.name).filter(Boolean);
    return `<section class="compact-overview"><p class="today-route">${stops.map(showValue).join(' <span aria-hidden="true">→</span> ')}</p>
      ${hotel ? `<p class="provenance">今晚住：${showValue(hotel.primary?.name)}</p>` : ''}
      ${day.id === 'day-6' ? '<p class="fixed-note">14:00 曹家堡机场T3还车 · 20:00 GJ8166返杭</p>' : ''}
      <details class="route-reference"><summary>查看路线关系图</summary>${renderRouteMap(route)}</details></section>`;
  };

  const renderPlacePhoto = (place) => {
    const image = place.image || {};
    if (!image.src) return '<div class="place-photo-frame is-broken"><span>实景参考待补</span></div>';
    return `
      <figure class="place-photo">
        <div class="place-photo-frame">
          <img src="${escapeHtml(image.src)}" alt="${showValue(image.alt, `${place.name}实景参考`)}" loading="lazy" decoding="async" referrerpolicy="no-referrer">
        </div>
        ${image.caption ? `<figcaption>${showValue(image.caption)}</figcaption>` : ""}
      </figure>
    `;
  };

  const renderExperience = (place) => {
    const e=place.experience;if(!e)return '';
    return `<section class="experience-guide">
      <details class="poem-drawer" data-place-id="${escapeHtml(place.id)}"><summary>古诗文配文 · 选一句，查看出处与典故</summary><p class="provenance">候选句保留原始出处与语境；不把异地诗句写成本地典故。</p><div class="caption-options">${asArray(e.captions).map(c=>`<blockquote><p class="poem-text">${showValue(c.text)}</p><small>${showValue(c.author)} ·《${showValue(c.work)}》</small><p><b>适合：</b>${showValue(c.fit)}</p><p class="provenance">${showValue(c.context)}</p><div class="poem-actions"><a href="${escapeHtml(c.url)}" target="_blank" rel="noreferrer">核对原文</a><button type="button" data-action="select-caption" data-place-id="${escapeHtml(place.id)}" data-caption-id="${escapeHtml(c.id)}" aria-pressed="${state.captionSelections[place.id]===c.id}">${state.captionSelections[place.id]===c.id?'已选 · 再点取消':'选这句'}</button></div></blockquote>`).join('')}</div></details>
    </section>`;
  };

  const renderPlaceModule = (place) => `<section id="place-${escapeHtml(place.id)}" class="decision-module scenic-module${place.image?.src?'':' without-photo'}"><div class="module-copy">
    <p class="module-label">本段怎么玩</p><h4>${showValue(place.name)}</h4><p class="module-intro">${showValue(place.why)}</p>
    <div class="choice-stack">${asArray(place.highlights).map((item,index)=>`<div><span>${String(index+1).padStart(2,'0')}</span><p>${showValue(item)}</p></div>`).join('')}</div>
    <dl class="module-facts"><div><dt>建议停留</dt><dd>${showValue(place.duration)}</dd></div><div><dt>在路线中的作用</dt><dd>${showValue(place.role)}</dd></div></dl>
    <div class="caution-line"><b>景点注意</b><p>${showValue(place.limits)}</p></div>
    ${place.experience?renderExperience(place):''}
    ${place.booking?`<details class="booking-guidance"><summary>门票与预约 · 入口、票种与办理时间</summary><dl class="module-facts"><div><dt>何时办理</dt><dd>${showValue(place.booking.when)}</dd></div><div><dt>入口</dt><dd>${showValue(place.booking.entry)}</dd></div><div><dt>票种</dt><dd>${showValue(place.booking.price)}</dd></div></dl><a href="#responsibilities">到行前准备办理</a></details>`:''}
    ${renderSources(place.sources,'景点资料与来源')}</div>${place.image?.src?renderPlacePhoto(place):''}</section>`;


  const rankLabels = { primary: "首选", backup2: "备选 2", backup3: "备选 3" };
  const candidateRank = (meal, candidateId) => Object.keys(rankLabels).find((rank) => state.mealSelections[meal.id]?.[rank] === candidateId) || "";

  const renderPlatform = (name, platform = {}) => {
    const values = [platform.score, platform.reviews, platform.list, platform.rank, platform.years, platform.price, platform.hours];
    if (!values.some(Boolean)) return "";
    return `
      <div class="platform-card">
        <b>${escapeHtml(name)}</b>
        <dl>
          <div><dt>评分</dt><dd>${showValue(platform.score, "未显示")}</dd></div>
          <div><dt>评价</dt><dd>${showValue(platform.reviews, "未显示")}</dd></div>
          <div><dt>榜单</dt><dd>${showValue(platform.list, "未显示")}</dd></div>
          <div><dt>排名</dt><dd>${showValue(platform.rank, "未显示")}</dd></div>
          <div><dt>收录</dt><dd>${showValue(platform.years, "未显示")}</dd></div>
          <div><dt>平台人均</dt><dd>${showValue(platform.price, "未显示")}</dd></div>
          <div><dt>平台营业</dt><dd>${showValue(platform.hours, "未显示")}</dd></div>
        </dl>
      </div>
    `;
  };

  const renderRestaurant = (meal, candidate, index) => {
    const rank = candidateRank(meal, candidate.id);
    const base = candidate.base || {};
    const platforms = candidate.platforms || {};
    const classicDishes = asArray(candidate.classicDishes);
    return `
      <article class="restaurant-option${rank ? " is-ranked" : ""}">
        <div class="restaurant-number">${rank ? escapeHtml(rankLabels[rank]) : `选项 ${index + 1}`}</div>
        <h5>${showValue(candidate.name)}</h5>
        <p class="restaurant-feature">${showValue(candidate.category, "餐饮类别待核")} · ${showValue(candidate.feature, "特色待核")}</p>
        ${classicDishes.length ? `<p class="dish-line"><b>建议菜：</b>${classicDishes.map(showValue).join("、")}</p>` : ""}
        <dl class="restaurant-basics">
          <div><dt>位置</dt><dd>${showValue(base.location)}</dd></div>
          <div><dt>用时</dt><dd>${showValue(base.duration)}</dd></div>
          <div><dt>人均</dt><dd>${showValue(base.price)}</dd></div>
          <div><dt>营业</dt><dd>${showValue(base.hours)}</dd></div>
        </dl>
        <details class="restaurant-details">
          <summary>展开路线关系、风险与平台数据</summary>
          <div class="restaurant-logic">
            <p><b>为什么顺路：</b>${showValue(candidate.routeRelation)}</p>
            <p><b>风险：</b>${showValue(candidate.risk)}</p>
            <p><b>何时启用：</b>${showValue(candidate.condition)}</p>
            <p><b>餐次去重：</b>${showValue(candidate.repetition)}</p>
          </div>
          ${renderPlatform("高德", platforms.amap)}
          ${renderPlatform("大众点评", platforms.dianping)}
          ${renderSources(candidate.sources, "门店与推荐来源")}
        </details>
        ${candidate.rankable === false ? '<p class="ranking-empty">资料不足，先保留研究候选；补齐门店或营业信息后再排序。</p>' : ""}
        <div class="rank-actions" aria-label="餐厅排序">
          ${Object.entries(rankLabels).map(([rankKey, rankLabel]) => `<button type="button" data-action="rank-meal" data-meal-id="${escapeHtml(meal.id)}" data-candidate-id="${escapeHtml(candidate.id)}" data-rank="${rankKey}" aria-pressed="${rank === rankKey}" ${candidate.rankable === false ? "disabled" : ""}>${escapeHtml(rankLabel)}</button>`).join("")}
        </div>
      </article>
    `;
  };

  const renderMealRanking = (meal) => {
    const selection = state.mealSelections[meal.id] || {};
    const ranked = Object.entries(rankLabels).map(([rank, label]) => {
      const candidate = getMealCandidate(meal, selection[rank]);
      return candidate ? `<span><b>${label}</b>${showValue(candidate.name)}</span>` : "";
    }).filter(Boolean);
    return ranked.length
      ? `<div class="ranking-summary">${ranked.join("")}</div>`
      : '<p class="ranking-empty">暂未排序。比较完后可把任意餐厅标成首选、备选 2 或备选 3。</p>';
  };

  const renderDiningPlan = (plan) => plan ? `<details class="dining-plan"><summary>餐食组合与点单建议</summary><div>${asArray(plan.options).map(option=>`<p><b>${showValue(option.title)}：</b>${showValue(option.detail)}</p>`).join("")}<p class="order-advice">${showValue(plan.order)}</p></div></details>` : "";

  const renderMealModule = (meal) => {
    const candidates=meal.safetyLocked?[]:asArray(meal.candidates);
    return `<section class="decision-module meal-module"><div class="meal-heading"><h4>${showValue(meal.label)}</h4><span>${candidates.length?candidates.length+' 个选项':''}</span></div><p class="module-intro">${showValue(meal.readerNote || meal.note)}</p>
      ${meal.strategy?`<details class="dining-plan"><summary>携带与购买建议</summary><p>${showValue(meal.strategy.detail)}</p></details>`:''}${renderDiningPlan(meal.diningPlan)}
      ${candidates.length?`${renderMealRanking(meal)}<details class="meal-options" data-meal-id="${escapeHtml(meal.id)}"><summary>展开比较餐厅 · 选择首选与备选</summary><div class="restaurant-grid">${candidates.map((c,i)=>renderRestaurant(meal,c,i)).join('')}</div></details>`:''}
      ${renderSources(meal.sources,'本餐推荐来源')}</section>`;
  };

  const parseStartTime = (time) => {
    const match = String(time || "").match(/(\d{1,2}):(\d{2})/);
    return match ? Number(match[1]) * 60 + Number(match[2]) : 9999;
  };

  const mealSlot = (meal) => {
    if (meal.label.includes("早餐")) return "breakfast";
    if (meal.label.includes("午餐")) return "lunch";
    return "dinner";
  };

  const mealStepScore = (meal, item) => {
    const text = `${item.action || ""} ${item.from || ""} ${item.to || ""}`;
    const slot = mealSlot(meal);
    if (slot === "breakfast") return (text.includes("早餐") ? 20 : 0) + (text.includes("早间加餐") ? 12 : 0);
    if (slot === "lunch") {
      if (text.includes("次日路餐")) return 0;
      if (text.includes("打包午餐")) return 3;
      return (text.includes("午餐") ? 20 : 0) + (text.includes("路餐") ? 18 : 0) + (text.includes("简餐") ? 16 : 0);
    }
    return (text.includes("晚餐") ? 20 : 0) + (text.includes("晚饭") ? 18 : 0);
  };

  const syntheticMealTiming = (day, meal) => {
    const slot = mealSlot(meal);
    const special = {
      "day-1:breakfast": { sort: 480, time: "随去程航班", action: "取车前早餐" },
      "day-1:lunch": { sort: 810, time: "最晚 13:30", action: "取车前午餐" },
      "day-6:lunch": { sort: 620, time: "10:15 左右", action: "安检后早午餐" },
      "day-6:dinner": { sort: 1140, time: "随返程航班", action: "返程晚餐" }
    };
    return special[`${day.id}:${slot}`] || {
      sort: slot === "breakfast" ? 450 : slot === "lunch" ? 750 : 1140,
      time: slot === "breakfast" ? "07:30 左右" : slot === "lunch" ? "12:30 左右" : "19:00 左右",
      action: slot === "breakfast" ? "早餐" : slot === "lunch" ? "午餐" : "晚餐"
    };
  };

  const meaningfulTokens = (name) => {
    const normalized = String(name || "").replace(/[\s·｜—()（）/]/g, "").replace(/景区|观景区|合规|正式|短线|天空之镜/g, "");
    const ignored = new Set(["青海", "西宁", "德令", "令哈", "茫崖", "观景", "路线", "当天"]);
    const tokens = new Set();
    for (let size = 4; size >= 2; size -= 1) {
      for (let index = 0; index <= normalized.length - size; index += 1) {
        const token = normalized.slice(index, index + size);
        if (!ignored.has(token)) tokens.add(token);
      }
    }
    return [...tokens];
  };

  const activityText = (item) => `${item.action || ""} ${item.from || ""} ${item.to || ""} ${item.navigation || ""}`;

  const assignPlaces = (day, route) => {
    const timeline = asArray(day.timeline);
    const assignments = new Map();
    asArray(route?.placeIds).map((id) => data.places.find((place) => place.id === id)).filter(Boolean).forEach((place) => {
      const tokens = meaningfulTokens(place.name);
      let bestIndex = -1;
      let bestScore = 0;
      timeline.forEach((item, index) => {
        const text = activityText(item);
        let score = asArray(item.placeIds).includes(place.id) ? 10000 : tokens.reduce((total, token) => total + (text.includes(token) ? token.length : 0), 0);
        if (/游览|观景|日落|湖岸|外观|短停/.test(item.action || "")) score += 3;
        if (score > bestScore) {
          bestIndex = index;
          bestScore = score;
        }
      });
      if (bestIndex >= 0 && bestScore > 0) {
        const current = assignments.get(bestIndex) || [];
        current.push(place);
        assignments.set(bestIndex, current);
      }
    });
    return assignments;
  };

  const assignFallbacks = (day, placeAssignments) => {
    const assignments = new Map();
    asArray(day.fallbacks).forEach((fallback) => {
      const fallbackText = `${fallback.trigger || ""} ${fallback.drop || ""} ${fallback.switchTo || ""}`;
      let targetIndex = -1;
      let score = 0;
      placeAssignments.forEach((places, index) => {
        const localScore = places.flatMap((place) => meaningfulTokens(place.name)).reduce((total, token) => total + (fallbackText.includes(token) ? token.length : 0), 0);
        if (localScore > score) {
          score = localScore;
          targetIndex = index;
        }
      });
      if (targetIndex < 0) targetIndex = Math.max(0, asArray(day.timeline).findIndex((item) => /游览|观景|日落|湖岸/.test(item.action || "")));
      const current = assignments.get(targetIndex) || [];
      current.push(fallback);
      assignments.set(targetIndex, current);
    });
    return assignments;
  };

  const buildEvents = (day, route) => {
    const timeline = asArray(day.timeline);
    const events = timeline.map((item, index) => ({
      kind: "activity",
      item,
      sourceIndex: index,
      sort: Number.isFinite(item.sortHint) ? item.sortHint : parseStartTime(item.time),
      meals: []
    }));

    data.meals.filter((meal) => meal.dayId === day.id).forEach((meal) => {
      const scored = timeline.map((item, index) => ({ index, score: mealStepScore(meal, item) })).sort((a, b) => b.score - a.score);
      if (scored[0]?.score > 0) {
        events[scored[0].index].meals.push(meal);
      } else {
        const timing = syntheticMealTiming(day, meal);
        events.push({ kind: "meal", meal, sort: timing.sort, time: timing.time, action: timing.action });
      }
    });

    const placeAssignments = assignPlaces(day, route);
    const fallbackAssignments = assignFallbacks(day, placeAssignments);
    events.forEach((event) => {
      if (event.kind !== "activity") return;
      event.places = placeAssignments.get(event.sourceIndex) || [];
      event.optionalPlaces = asArray(event.item.optionPlaceIds).map((id) => data.places.find((place) => place.id === id)).filter(Boolean);
      event.fallbacks = fallbackAssignments.get(event.sourceIndex) || [];
    });
    return events.sort((a, b) => a.sort - b.sort);
  };

  const renderUserCheck = (check) => `
    <label class="check-item${state.checks[check.id] || check.done ? " is-done" : ""}">
      <input type="checkbox" data-action="toggle-check" data-check-id="${escapeHtml(check.id)}" ${state.checks[check.id] || check.done ? "checked" : ""}>
      <span><b>${showValue(check.title)}</b><small>${showValue(check.when)}</small><p>${showValue(check.verify)}</p></span>
    </label>
  `;

  const renderReviewItem = (check) => `<article class="prep-review-item">${renderUserCheck(check)}<label class="review-control">审查需求 <select data-action="review-preparation" data-check-id="${escapeHtml(check.id)}" aria-label="审查：${escapeHtml(check.title)}">${[['','未审查'],['owned','已有够用'],['buy','需要采购'],['skip','本次不带']].map(([value,label])=>`<option value="${value}" ${(state.preparationReview[check.id]||'')===value?'selected':''}>${label}</option>`).join('')}</select></label><small>勾选表示已落实；需求选择不会自动勾选。</small></article>`;

  const renderFoodPlan = (plan) => {
    if (!plan) return "";
    return `<section class="prep-section food-plan" aria-labelledby="food-plan-title">
      <div class="food-plan-heading"><div><p class="micro-label">ROAD FOOD</p><h3 id="food-plan-title">${showValue(plan.title)}</h3></div><p>${showValue(plan.summary)}</p></div>
      <div class="food-day-grid">${asArray(plan.days).map(day=>`<article><h4>${showValue(day.label)}</h4><p><b>默认：</b>${showValue(day.default)}</p><p><b>有热食时：</b>${showValue(day.replace)}</p></article>`).join('')}</div>
      <div class="food-table-wrap"><table class="food-table"><thead><tr><th>准备项</th><th>本方两人</th><th>全车四人</th><th>怎么装</th></tr></thead><tbody>${asArray(plan.shopping).map(item=>`<tr><th>${showValue(item.label)}</th><td>${showValue(item.twoPeople)}</td><td>${showValue(item.fourPeople)}</td><td>${showValue(item.note)}</td></tr>`).join('')}</tbody></table></div>
      <p class="food-avoid"><b>不要这样带：</b>${showValue(plan.avoid)}</p>
    </section>`;
  };

  const renderResponsibilities = () => {
    const container=document.querySelector('#responsibilities');
    const packed=new Set(asArray(data.trip.packingGroups).flatMap(g=>asArray(g.items).map(i=>i.id)));
    const actions=data.checks.filter(c=>c.owner==='user'&&!c.done&&!packed.has(c.id));
    const tickets=actions.filter(c=>['check-erlangjian','check-museum-ticket'].includes(c.id));
    const purchases=actions.filter(c=>!tickets.includes(c));
    container.innerHTML=`<header class="prep-heading"><p class="micro-label">BEFORE DEPARTURE</p><h2 id="responsibility-title">行前准备 · 在这里审查</h2><p>按本方两人准备。物品先选“已有／需购／不带”，备齐后再勾选；门票购妥后再勾。</p></header>
      <section class="prep-section"><h3>需要你落实</h3><div class="check-list">${purchases.map(renderUserCheck).join('')}</div></section>
      ${renderFoodPlan(data.trip.foodPlan)}
      ${asArray(data.trip.packingGroups).map(g=>`<section class="prep-section"><h3>${showValue(g.title)}</h3><div class="prep-grid">${asArray(g.items).map(i=>renderReviewItem(data.checks.find(c=>c.id===i.id)||{id:i.id,title:i.title,when:g.title,verify:i.detail})).join('')}</div></section>`).join('')}
      <section class="prep-section"><h3>门票与预约 · 实际办理</h3><div class="check-list">${tickets.map(renderUserCheck).join('')}</div>${data.places.filter(p=>['qinghai-erlangjian','tibetan-culture'].includes(p.id)).map(p=>`<details class="booking-guidance"><summary>${showValue(p.name)} · 查看购票依据</summary><p>${showValue(p.booking?.when)}</p><p>${showValue(p.booking?.entry)}</p><p>${showValue(p.booking?.price)}</p>${renderSources(p.sources,'购票资料')}</details>`).join('')}</section>
      <details class="responsibility-group"><summary><b>资料补充 · 你方便时统一补</b></summary><div class="responsibility-body">${asArray(data.trip.materialGaps).map(i=>`<article class="manual-confirmation"><h3>${showValue(i.title)}</h3><p>${showValue(i.detail)}</p></article>`).join('')}</div></details>`;
  };

  const renderChecks = (day) => {
    const checks=data.checks.filter(c=>c.owner==='user'&&c.dayId===day.id&&!c.done&&!state.checks[c.id]);
    return checks.length?`<p class="day-action-link">本日办理：${checks.map(c=>showValue(c.title)).join('；')}。<a href="#responsibilities">去行前准备</a></p>`:'';
  };

  const activityType = (event) => {
    const text = `${event.item?.action || ""} ${event.action || ""}`;
    if (event.kind === "meal" || event.meals?.length) return "meal";
    if (event.places?.length) return "scenic";
    if (/取车|还车|验车/.test(text)) return "key";
    if (/前往|驶向|直奔|补满油/.test(text)) return "drive";
    return "activity";
  };

  const typeLabels = { meal: "用餐", scenic: "游玩", key: "关键节点", drive: "行车", activity: "安排" };

  const renderFallback = (fallback) => `
    <div class="fallback-box">
      <div><b>当日总 Plan B</b><span>触发：${showValue(fallback.trigger)}</span></div>
      <dl>
        <div><dt>放弃</dt><dd>${showValue(fallback.drop)}</dd></div>
        <div><dt>立即改成</dt><dd>${showValue(fallback.switchTo)}</dd></div>
        <div><dt>后续影响</dt><dd>${showValue(fallback.nextNode)}</dd></div>
      </dl>
    </div>
  `;

  const renderPlainChoices = (item) => `
    <section class="plain-choice-panel">
      <p class="module-label">本段有哪些选择</p>
      <div class="plain-choice-grid">
        <div><b>按计划</b><p>${showValue(item.navigation, item.action)}</p></div>
        <div><b>触发时切换</b><p>${showValue(item.switchCondition, "暂无额外切换条件")}</p></div>
      </div>
    </section>
  `;

  const renderActivityContent = (event, index) => {
    const item=event.item, type=activityType(event), hasModules=event.places.length||event.meals.length;
    return `<article class="timeline-event type-${type}"><div class="timeline-time"><span>${showValue(item.time)}</span></div><div class="activity-card">
      ${hasModules?'':`<header class="activity-heading"><h3>${showValue(item.action)}</h3></header>`}
      ${event.places.map(renderPlaceModule).join('')}
      ${event.optionalPlaces.length?`<details class="museum-alternatives"><summary>其他博物馆 · 替换选择</summary><p>上午选一馆即可；以下不是额外叠加。</p>${event.optionalPlaces.map(renderPlaceModule).join('')}</details>`:''}
      ${event.meals.map(renderMealModule).join('')}
      ${hasModules?'':`<details class="dining-plan"><summary>安排详情</summary><p>${showValue(item.navigation,item.action)}</p><p>${showValue(item.deadline)}</p></details>`}
    </div></article>`;
  };

  const renderActivityEvent = (event,index) => {
    const type=activityType(event);
    if (!event.places.length&&!event.meals.length&&['drive','key'].includes(type)) return '';
    if (!event.places.length&&!event.meals.length&&/加满油|补满油|检查车辆|寄存|采购次日/.test(event.item.action)) return '';
    return renderActivityContent(event,index);
  };

  const renderSyntheticMealEvent = (event, index) => `
    <article class="timeline-event type-meal is-synthetic">
      <div class="timeline-time"><span>${showValue(event.time)}</span><small>${String(index + 1).padStart(2, "0")}</small></div>
      <div class="activity-card">
        <header class="activity-heading">
          <div><span class="type-badge">用餐</span><h3>${showValue(event.action)}</h3></div>
          <p>时间随航班或前后节点调整</p>
        </header>
        ${renderMealModule(event.meal)}
      </div>
    </article>
  `;

  const bindImageFallbacks = () => {
    document.querySelectorAll(".place-photo img").forEach((image) => {
      image.addEventListener("error", () => {
        const frame = image.closest(".place-photo-frame");
        if (frame) {
          frame.classList.add("is-broken");
          frame.innerHTML = "<span>图片暂时无法加载</span>";
        }
      }, { once: true });
    });
  };

  const renderItinerary = () => {
    const container = document.querySelector("#itinerary-content");
    const day = getDay();
    if (!day) {
      container.innerHTML = '<div class="empty-state">尚未添加日期。</div>';
      return;
    }
    const route = getRoute(day);
    const events = buildEvents(day, route);
    container.innerHTML = `
      <article class="day-plan">
        <header class="day-plan-header">
          <div><p class="micro-label">${showValue(day.date)}</p><h2>${showValue(day.label)}</h2></div>

        </header>
        ${renderRouteOverview(day, route)}
        <div class="timeline" aria-label="${showValue(day.label)}完整时间线">
          ${renderChecks(day)}
          ${events.map((event, index) => event.kind === "meal" ? renderSyntheticMealEvent(event, index) : renderActivityEvent(event, index)).join("")}
        </div>
      </article>
    `;
    bindImageFallbacks();
  };

  const renderView = () => {
    const view=state.activeView;
    document.querySelector('#workspace').hidden=view!=='itinerary';
    document.querySelector('.navigation-rail').hidden=view!=='itinerary';
    document.querySelector('#responsibilities').hidden=view!=='preparation';
    const booking=document.querySelector('#booking');booking.hidden=view!=='records';booking.open=view==='records';
    document.querySelector('.compact-hero').hidden=view!=='itinerary';
    document.querySelectorAll('[data-action="show-view"]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===view)));
  };
  const switchView = (view) => {
    if (!['itinerary','preparation','records'].includes(view))return;
    state.activeView=view;saveState();renderView();
    history.replaceState(null,'',view==='preparation'?'#responsibilities':view==='records'?'#booking':'#itinerary');
    document.querySelector(view==='preparation'?'#responsibilities':view==='records'?'#booking':'#main-content')?.scrollIntoView({block:'start'});
  };

  const renderAll = () => {
    renderBindings();
    renderMode();
    renderBookingPlan();
    renderResponsibilities();
    renderDayTabs();
    renderItinerary();
    renderView();
  };

  const toast = document.querySelector("#toast");
  let toastTimer;
  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
  };

  document.addEventListener("click", (event) => {
    const link=event.target.closest('a[href="#responsibilities"],a[href="#booking"]');
    if(link){event.preventDefault();switchView(link.getAttribute('href')==='#booking'?'records':'preparation');return;}
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    if(button.dataset.action==='show-view'){switchView(button.dataset.view);return;}
    if(button.dataset.action==='select-caption'){
      const {placeId,captionId}=button.dataset;
      state.captionSelections[placeId]=state.captionSelections[placeId]===captionId?'':captionId;saveState();renderItinerary();
      const drawer=[...document.querySelectorAll('.poem-drawer')].find(x=>x.dataset.placeId===placeId);if(drawer)drawer.open=true;
      showToast('配文选择已保存在本机');return;
    }
    if (button.dataset.action === "select-day") {
      state.activeView='itinerary';history.replaceState(null,'','#itinerary');
      state.activeDayId = button.dataset.dayId;
      saveState();
      renderAll();
      document.querySelector("#itinerary")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (button.dataset.action === "rank-meal") {
      const { mealId, candidateId, rank } = button.dataset;
      const targetMeal = data.meals.find((item) => item.id === mealId);
      if (getMealCandidate(targetMeal, candidateId)?.rankable === false) return;
      const selection = { ...(state.mealSelections[mealId] || {}) };
      const wasSelected = selection[rank] === candidateId;
      Object.keys(rankLabels).forEach((key) => {
        if (selection[key] === candidateId) selection[key] = "";
      });
      if (!wasSelected) selection[rank] = candidateId;
      state.mealSelections[mealId] = selection;
      saveState();
      const meal = data.meals.find((item) => item.id === mealId);
      const candidate = getMealCandidate(meal, candidateId);
      renderAll();
      const drawer=[...document.querySelectorAll('.meal-options')].find(x=>x.dataset.mealId===mealId);if(drawer)drawer.open=true;
      showToast(wasSelected ? `已取消“${candidate?.name || "该餐厅"}”的${rankLabels[rank]}` : `已设为${rankLabels[rank]}：${candidate?.name || "该餐厅"}`);
    }
  });

  document.addEventListener("change", (event) => {
    const review=event.target.closest('select[data-action="review-preparation"]');
    if(review){state.preparationReview[review.dataset.checkId]=review.value;saveState();return;}
    const input = event.target.closest('input[data-action="toggle-check"]');
    if (!input) return;
    state.checks[input.dataset.checkId] = input.checked;
    saveState();
    input.closest(".check-item")?.classList.toggle("is-done", input.checked);
  });

  window.addEventListener('hashchange',()=>{state.activeView=location.hash==='#responsibilities'?'preparation':location.hash==='#booking'?'records':'itinerary';renderView();});
  window.addEventListener("storage", (event) => {
    if (event.key === storageKey) window.location.reload();
  });

  window.TRIP_WORKSPACE = { data, state, render: renderAll };
  renderAll();
})();
