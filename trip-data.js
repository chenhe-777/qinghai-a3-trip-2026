window.TRIP_DATA = {
  trip: {
    id: "qinghai-a3-planning-2026-v4",
    title: "9·27 青海 A3 六日自驾｜逐日攻略研究",
    city: "青海 · 茫崖 / 冷湖 / 大柴旦 / 德令哈 / 茶卡 / 西宁",
    dates: "2026-09-27—2026-10-02（6 天 5 晚）",
    base: "花土沟→大柴旦→德令哈→茶卡→西宁，每日换宿",
    arrival: "9/27 GJ8165 杭州萧山 T3 06:20 → 西宁曹家堡 T3 09:40；MU6517 12:20 → 茫崖 14:20",
    departure: "10/2 GJ8166 西宁曹家堡 T3 20:00 → 杭州萧山 T3 23:10；14:00 完成还车",
    confirmedRouteId: "",
    defaultMode: "planning",
    fixedEvents: [
      "当前研究主线：茫崖进、西宁出，全程一车",
      "9/27 两段航班均已出票；14:20 抵达茫崖，落地后取车",
      "9/28 是最高强度长驾日；9/29 必须在日落前完成托素湖",
      "10/2 14:00 曹家堡机场 T3 服务点还车；20:00 搭乘 GJ8166 返回杭州"
    ],
    updatedAt: "2026-09-11",
    bookingPlan: {
      status: "航班与五晚住宿均已预订｜公开信息已做隐私化处理",
      headline: "以下只保留执行所需信息，不展示姓名、订单号、价格或房间数量",
      lockedFlights: {
        constraint: "去返程均已出票。去程在西宁中转 2 小时 40 分；14:20 抵达茫崖晚于租车订单 14:00 取车时间，需提前让门店按航班留车。",
        outbound: [{
          level: "已出票",
          title: "9/27 杭州 → 西宁 → 茫崖",
          route: "GJ8165｜杭州萧山 T3 06:20 → 西宁曹家堡 T3 09:40；MU6517｜西宁曹家堡 T3 12:20 → 茫崖 14:20",
          reason: "这是已经锁定的实际去程；首日时间线从 14:20 落地重新倒推。",
          caution: "确认行李是否直挂；并让茫崖租车门店书面确认约 15:00—15:30 仍可取车。",
          sources: [{ label: "已出票行程（隐私化摘录）", url: "", role: "航班号、航站楼与计划时刻" }]
        }],
        return: [{
          level: "已出票",
          title: "10/2 西宁 → 杭州",
          route: "14:00 曹家堡机场 T3 服务点还车 → 托运、安检与机场晚餐 → GJ8166 20:00 起飞 → 杭州萧山 T3 23:10 抵达",
          reason: "晚班直飞已经锁定，原订单 14:00 还车无需提前。",
          caution: "国庆出行仍按票面值机截止时间执行；航变后重新倒推市区离开时间。",
          sources: [{ label: "已出票行程（隐私化摘录）", url: "", role: "航班号、航站楼与计划时刻" }]
        }]
      },
      areaPlans: [
        {
          date: "9/27", city: "花土沟",
          role: "已预订｜9/27 入住，9/28 离店",
          primary: { area: "已确认住宿", name: "美豪酒店（茫崖店）", facts: "花土沟镇昆仑路 84 号；精致大床房；弥漫式供氧、全屋智能、中央空调", why: "订单已确认；公开页未展示住客姓名、订单号、价格和房间数量。" },
          backup: null,
          sources: []
        },
        {
          date: "9/28", city: "大柴旦",
          role: "已预订｜9/28 入住，9/29 离店",
          primary: { area: "已确认住宿", name: "大柴旦丽呈翠星酒店", facts: "臻品双床房；中央空调、零压枕、加湿器、智能客控", why: "以最新订单截图中的酒店名称为准，已覆盖网页原先的“丽呈华廷”候选。" },
          backup: null,
          sources: []
        },
        {
          date: "9/29", city: "德令哈",
          role: "已预订｜9/29 入住，9/30 离店",
          primary: { area: "已确认住宿", name: "美豪 R 酒店（德令哈海子诗歌陈列馆店）", facts: "连湖路与新源路交汇处；雅致大床房；智能客控、空调、加湿器、电视投屏、小冰箱；不含早餐", why: "订单已确认；次日早餐需要单独解决。" },
          backup: null,
          sources: []
        },
        {
          date: "9/30", city: "茶卡镇",
          role: "已预订｜9/30 入住，10/1 离店",
          primary: { area: "已确认住宿", name: "茶卡白兰道酒店", facts: "雅致双床房；空调、移动制氧机、加湿器", why: "订单已确认；继续保留次日早餐时间与停车条件的行前复核。" },
          backup: null,
          sources: []
        },
        {
          date: "10/1", city: "西宁",
          role: "已预订｜10/1 入住，10/2 离店",
          primary: { area: "已确认住宿", name: "西宁富力万达文华酒店", facts: "位于海湖新区；房型、早餐和取消条件未在本次资料中提供", why: "20:00 晚班航班让最后一晚可以优先住宿体验；10/2 中午退房后再前往机场还车。" },
          backup: null,
          sources: []
        }
      ],
      flight: {
        constraint: "9/27 西宁→茫崖目前只有东航直飞，MU6517 计划 12:20 起飞、14:20 抵达。租车订单的 14:00 应理解为计费 / 预留起始时间，必须先向门店确认航班落地后约 14:40—15:10 仍可取车。",
        outboundOptions: [
          {
            level: "推荐",
            title: "稳妥版｜9/26 先到西宁，9/27 再飞茫崖",
            route: "杭州 HGH 或宁波 NGB → 西宁 XNN（9/26 任一合适直飞）｜9/27 MU6517 西宁 12:20 → 茫崖 14:20",
            reason: "把跨航司、可能要重新托运行李的风险留在前一天；即使第一段延误，也不会直接毁掉翡翠湖和后续自驾。",
            caution: "会增加 9/26 一晚住宿，但这是整条 A3 最值得购买的确定性。",
            sources: [
              { label: "FlightConnections｜西宁—茫崖", url: "https://www.flightconnections.com/tw/%E5%BE%9E-xnn-%E5%88%B0-htt-%E7%9A%84%E8%88%AA%E7%8F%AD", role: "9 月班期、唯一承运航司、12:20 起飞与约 2 小时飞行" }
            ]
          },
          {
            level: "有条件可做",
            title: "杭州当天版｜只适合愿意承担误接风险",
            route: "GJ8165 杭州 06:20 → 西宁 09:40｜再接 MU6517 西宁 12:20 → 茫崖 14:20",
            reason: "表面有 2 小时 40 分衔接，正常运行时可以完成。",
            caution: "两段不是可靠联程保障；一旦早班延误、远机位或行李重托运，就可能错过当天唯一的茫崖航班。4 人出行不建议把整条路线押在这里。",
            sources: [
              { label: "Flight.info｜GJ8165", url: "https://www.flight.info/GJ8165", role: "9/27 计划 06:20—09:40" },
              { label: "FlightConnections｜杭州—西宁", url: "https://www.flightconnections.com/cn/%E4%BB%8E-hgh-%E9%A3%9E%E5%BE%80-xnn-%E7%9A%84%E8%88%AA%E7%8F%AD", role: "当前直飞航班与时刻交叉核对" }
            ]
          },
          {
            level: "排除",
            title: "宁波当天转机｜不作为可执行方案",
            route: "GJ8843 宁波约 07:50 → 西宁 11:15｜再接 12:20 去茫崖",
            reason: "名义衔接仅约 65 分钟。",
            caution: "对非联程、可能重新托运行李的 4 人团队不够；应改成 9/26 到西宁。",
            sources: [
              { label: "携程｜宁波—西宁时刻", url: "https://flights.ctrip.com/international/Schedule/ngb-xnn.html", role: "宁波直飞西宁的当前参考时刻" }
            ]
          }
        ],
        returnOptions: [
          {
            level: "杭州主选",
            title: "10/2 GJ8166｜西宁 20:00 → 杭州 23:10",
            route: "14:00 完成还车后，约有 6 小时办理托运、安检和晚餐",
            reason: "周五当前计划有晚班直飞，和 14:00 还车边界最匹配。",
            caution: "最终以 10/2 售票页、航司通知和票面航站楼为准。",
            sources: [{ label: "Flight.info｜GJ8166", url: "https://www.flight.info/GJ8166", role: "10/2 当前计划 20:00—23:10" }]
          },
          {
            level: "宁波主选",
            title: "宁波晚班候选｜MU6324 当前约 21:00 → 23:50",
            route: "若 10/2 仍按当前周五班期销售，14:00 完成还车后约有 7 小时缓冲",
            reason: "当前周五班期有晚班直飞，时间比下午航班更从容。",
            caution: "聚合时刻可能调整；下单时必须确认 10/2 仍有可售直飞，而不是经停或中转。",
            sources: [
              { label: "FlightConnections｜西宁—宁波", url: "https://www.flightconnections.com/cn/%E4%BB%8E-xnn-%E9%A3%9E%E5%BE%80-ngb-%E7%9A%84%E8%88%AA%E7%8F%AD", role: "直飞航班号和晚班参考" },
              { label: "携程｜西宁—宁波", url: "https://m.ctrip.com/html5/flight/xnn-ngb-day-1.html", role: "当前可售页的时刻参考；需切到 10/2 复核" }
            ]
          }
        ]
      },
      hotels: [
        {
          date: "9/26（推荐新增）",
          city: "西宁曹家堡机场",
          role: "只为保护次日去茫崖的支线航班；晚到也不再进市区",
          primary: { name: "星程西宁曹家堡机场酒店", facts: "4.7 分 / 428 条；距机场约 180 米；免费接送机、早餐", why: "转机效率最高，适合把 9/26 当纯交通日。" },
          backup: { name: "西宁香格里拉希尔顿欢朋酒店", facts: "嬉游点名；城中区；免费早餐与停车", why: "仅在 9/26 较早到达、想吃一顿西宁市区晚餐时选。" },
          sources: [
            { label: "携程｜星程曹家堡机场", url: "https://hotels.ctrip.com/hotels/131780998.html", role: "位置、接送机、早餐与当前点评" },
            { label: "嬉游｜西宁城市攻略", url: "https://mp.weixin.qq.com/s/fYcbCQTQLxs-qgvqi4ovpg", role: "香格里拉路欢朋的直接推荐" },
            { label: "希尔顿官网｜香格里拉路欢朋", url: "https://www.hilton.com/zh-hans/hotels/xnnbhhx-hampton-xining-shangri-la-road/", role: "地址、早餐与停车" }
          ]
        },
        {
          date: "9/27",
          city: "花土沟",
          role: "翡翠湖日落后回镇；必须接受晚到，并能停车",
          primary: { name: "美豪丽致酒店（茫崖市花土沟店）", facts: "2025 年开业；4.6 分 / 679 条；免费停车、早餐、智能客控", why: "硬件最接近亚朵级，位于镇内，适合日落后入住。" },
          backup: { name: "茫崖温馨酒店", facts: "4.5 分 / 308 条；大停车场；周边吃饭采购方便", why: "自驾适配更明确，作为价格或满房备选。" },
          sources: [
            { label: "携程｜花土沟美豪丽致", url: "https://m.ctrip.com/html5/hotel/hoteldetail/130242346.html", role: "开业、设施、评分与位置" },
            { label: "携程｜茫崖温馨酒店", url: "https://hotels.ctrip.com/hotels/76180970.html", role: "停车、周边餐饮与当前点评" }
          ]
        },
        {
          date: "9/28",
          city: "大柴旦",
          role: "全程最长驾驶日后的恢复性住宿；供氧、新风和安静比景观重要",
          primary: { name: "大柴旦丽呈华廷酒店（翡翠步行街店）", facts: "2025 年开业；4.8 分 / 684 条；供氧、新风、中央空调、免费停车", why: "硬件明显高于亚朵级，是本线路最值得升级的一晚。" },
          backup: { name: "西鹿臻选酒店（海西州大柴旦店）", facts: "早餐、洗衣、停车、吸氧机与加湿器", why: "主选涨价或满房时，仍保留自驾和高原恢复所需设施。" },
          sources: [
            { label: "携程｜大柴旦丽呈华廷", url: "https://hotels.ctrip.com/hotels/130033526.html", role: "设施、评分、点评与地址" },
            { label: "携程｜西鹿臻选", url: "https://hotels.ctrip.com/hotels/128476449.html", role: "早餐、停车、供氧与洗衣设施" }
          ]
        },
        {
          date: "9/29",
          city: "德令哈",
          role: "托素湖日落后进城；优先市中心、供氧、洗衣和停车",
          primary: { name: "全季富氧酒店（德令哈巴音河畔店）", facts: "4.8 分 / 1222 条；供氧、免费洗衣、早餐；近市中心广场", why: "连锁稳定度、恢复设施和次日出城动线最均衡。" },
          backup: { name: "美豪 R 酒店（德令哈海子诗歌陈列馆店）", facts: "4.7 分 / 706 条；免费停车、洗衣、自助早餐", why: "主选满房时仍接近亚朵档，晚到入住条件完整。" },
          sources: [{ label: "携程｜德令哈酒店列表", url: "https://m.ctrip.com/webapp/hotel/delingha2542/sl1129356", role: "两家酒店的当前设施、位置、评分与点评量" }]
        },
        {
          date: "9/30",
          city: "茶卡镇",
          role: "不住景区帐篷或乌兰县城；住镇内便于晚餐和次日上 G109",
          primary: { name: "茶卡白兰道酒店", facts: "供氧、自助早餐、免费停车、免费洗衣；近期点评量充足", why: "最贴合普通舒适型 / 亚朵级诉求，且自驾设施完整。" },
          backup: { name: "星程酒店（茶卡镇店）", facts: "连锁舒适型；供氧、早餐、洗衣", why: "更看重连锁标准时作为备选。" },
          sources: [
            { label: "携程｜茶卡白兰道", url: "https://hotels.ctrip.com/hotels/121998764.html", role: "供氧、早餐、停车、洗衣与近期点评" },
            { label: "星程茶卡镇店资料", url: "https://hotel.eztravel.com.tw/detail-wulan-2541-109716089/starway-hotel-chaka-town/", role: "设施与住客反馈交叉参考" }
          ]
        },
        {
          date: "10/1",
          city: "西宁",
          role: "次日上午还要去东关大寺并向东还车；不要住海湖新区最西侧",
          primary: { name: "西宁昆仑希尔顿欢朋酒店", facts: "城东区；距机场约 20 公里；免费早餐、停车", why: "比住城西更符合第二天东向机场动线，是执行优先的主选。" },
          backup: { name: "西宁香格里拉希尔顿欢朋酒店", facts: "嬉游点名；城中核心商业区；免费早餐、停车", why: "更想吃市区晚餐、逛老城时选，但次日去机场路更长。" },
          sources: [
            { label: "希尔顿官网｜西宁昆仑欢朋", url: "https://www.hilton.com.cn/zh-cn/hotels/xnnxihx-hampton-by-hilton-xining-kunlun-road", role: "城东地址、机场距离与设施" },
            { label: "嬉游｜西宁城市攻略", url: "https://mp.weixin.qq.com/s/fYcbCQTQLxs-qgvqi4ovpg", role: "香格里拉路欢朋的直接推荐" },
            { label: "希尔顿官网｜香格里拉路欢朋", url: "https://www.hilton.com/zh-hans/hotels/xnnbhhx-hampton-xining-shangri-la-road/", role: "地址、早餐、停车与政策" }
          ]
        }
      ],
      searchRules: [
        "把五晚订单确认页离线保存，但公开页不上传姓名、订单号、支付金额和房间数量。",
        "9/27 联系茫崖酒店确认日落后晚到仍保留房间，并确认 9/28 清晨能否打包早餐。",
        "9/28 长驾日提前告知大柴旦酒店预计到店时间，同时确认停车位置和供氧使用方式。",
        "9/29 德令哈住宿不含早餐，前一晚必须单独确定次日早餐或打包方案。",
        "T-3 逐店复核停车、早餐时段、供氧是否收费、最晚到店和取消边界。"
      ]
    }
  },

  days: [
    {
      id: "day-1",
      date: "2026-09-27",
      label: "D1 · 茫崖",
      note: "MU6517 计划 14:20 抵达茫崖机场。落地、取行李和验车后，预计 15:10—15:30 才能真正出发。",
      selectedRouteId: "route-d1",
      routes: [{
        id: "route-d1",
        name: "D1｜茫崖机场取车 → 花土沟 → 茫崖翡翠湖日落",
        order: ["14:20 抵达茫崖机场", "落地后取车验车", "花土沟寄存、加油与采购", "茫崖翡翠湖", "美豪酒店（茫崖店）"],
        reason: "用距离花土沟较近、辨识度最高的盐湖完成开场，不再为两个景点牺牲取车验车与日落窗口。",
        experience: "先沿盐池步道看蓝绿、乳白等不同色块，再把主拍摄时段留给日落前 60—90 分钟。",
        totalTime: "落地后约 6 小时；当天驾车约 55—70 公里、1—1.5 小时。",
        tradeoff: "14:20 才落地，艾肯泉继续不放回首日；若取车延误，就进一步压缩翡翠湖远端机位。",
        sources: [
          { label: "携程｜茫崖翡翠湖", url: "https://you.ctrip.com/sight/mangya2026914/5580343.html", role: "位置、当前开放参考与景点信息" },
          { label: "嬉游｜这个美到封神的省份，现在去还有免票！", url: "https://mp.weixin.qq.com/s/_NfhtsEZYs6hFZGj61J4eQ", role: "茫崖与海西景观价值判断" }
        ],
        placeIds: ["mangya-emerald"],
        map: {
          title: "D1 机场—花土沟—翡翠湖往返",
          note: "机场与花土沟相近；翡翠湖距花土沟约 23 公里。示意非实时导航。",
          points: [{ x: 12, y: 18, label: "茫崖机场" }, { x: 32, y: 35, label: "花土沟" }, { x: 76, y: 51, label: "翡翠湖" }, { x: 32, y: 35, label: "花土沟" }]
        }
      }],
      timeline: [
        { time: "14:20—15:30", action: "落地、取行李、取车验车与装载", from: "海西茫崖机场", to: "茫崖机场服务点", transport: "步行 / 租车接驳", doorToDoor: "预留 50—70 分钟", navigation: "海西茫崖机场服务点", deadline: "目标 15:30 前完成；逐项拍车身、轮胎、玻璃和油量", switchCondition: "若 15:40 仍未完成，取消酒店办理入住，只补油和采购后去翡翠湖" },
        { time: "15:30—16:20", action: "前往美豪酒店寄存行李、加满油、买水和次日路餐", from: "茫崖机场", to: "美豪酒店（茫崖店）", transport: "自驾", doorToDoor: "机场至花土沟约 7—9 公里；含采购共 40—50 分钟", navigation: "美豪酒店（茫崖店） → 正规加油站 → 超市", deadline: "16:20 离开花土沟", switchCondition: "房间未整理好只寄存行李；不在前台等待入住" },
        { time: "16:20—20:05", action: "前往茫崖翡翠湖，步行观景并等日落", from: "花土沟镇", to: "茫崖翡翠湖景区", transport: "自驾 + 步行 / 景交以现场为准", doorToDoor: "单程约 23 公里、30—40 分钟；游玩约 2.5—3 小时", navigation: "茫崖翡翠湖景区游客中心", deadline: "目标 17:00 前入园；当前平台显示 20:00 闭园，日落后立即撤离", switchCondition: "若大风、闭园提前或 17:30 后才到，只走最近的核心盐池，不追远端机位" },
        { time: "20:05—21:30", action: "返回花土沟并吃晚饭", from: "茫崖翡翠湖", to: "花土沟镇", transport: "自驾", doorToDoor: "返程约 30—40 分钟；晚餐 45—60 分钟", navigation: "当天餐饮首选分店", deadline: "驾驶员不饮酒；饭后尽快休息", switchCondition: "首选停止接单就按页面备选顺序切换" }
      ],
      fallbacks: [{ trigger: "16:20 后仍未离开花土沟，或景区通知提前停止入园", drop: "取消远端盐池与长距离步行", switchTo: "只看入口附近核心盐池和日落光线", nextNode: "20:30 左右回到美豪酒店，保证次日 06:30 出发" }]
    },

    {
      id: "day-2",
      date: "2026-09-28",
      label: "D2 · 黑独山",
      note: "全程最长驾驶日。黑独山只走正式开放入口；午餐用随车路餐，不能靠临时找店。",
      selectedRouteId: "route-d2",
      routes: [{
        id: "route-d2",
        name: "D2｜花土沟 → 黑独山合规观景区 → 大柴旦",
        order: ["06:30 花土沟出发", "冷湖方向补油 / 休息", "黑独山正式开放区", "大柴旦晚餐与住宿"],
        reason: "黑灰山体像水墨与月面，是全程最不可替代的地貌；它与前一天盐湖形成最大反差。",
        experience: "在正式步道和观景区看山体褶皱、黑砂与戈壁尺度，主拍中长焦层次，不把越野驶入当玩法。",
        totalTime: "约 12—13 小时；总里程约 630—650 公里，纯驾驶约 9—10 小时。",
        tradeoff: "今天只保留一个核心景点；不加冷湖遗址、俄博梁或大柴旦翡翠湖。",
        sources: [
          { label: "新京报·中国自驾地理｜全景海西路书", url: "https://m.bjnews.com.cn/detail/172243642219028.html", role: "花土沟—冷湖、冷湖—黑独山—大柴旦的分段里程与驾驶时间" },
          { label: "中国旅游集团｜中旅黑独山旅游风景区", url: "https://www.ctg.cn/article/19696", role: "正式景区位置与规范运营信息" },
          { label: "嬉游｜说走就走！去这个好看到没有天花板的地方当快乐小狗", url: "https://mp.weixin.qq.com/s/PVcZlVfZSC5lOrfnGPbB2Q", role: "黑独山景观体验判断" }
        ],
        placeIds: ["heidushan"],
        map: {
          title: "D2 花土沟—黑独山—大柴旦",
          note: "超长公路日；必须以前一晚加满油、白天行车和正式入口为边界。",
          points: [{ x: 10, y: 51, label: "花土沟" }, { x: 48, y: 24, label: "黑独山" }, { x: 86, y: 48, label: "大柴旦" }]
        }
      }],
      timeline: [
        { time: "06:00—06:30", action: "退房、热食早餐并复核油量", from: "美豪酒店（茫崖店）", to: "花土沟出城口", transport: "自驾", doorToDoor: "30 分钟", navigation: "昨晚已选定的加油站 / G315 冷湖方向", deadline: "06:30 必须驶出花土沟", switchCondition: "酒店早餐未开就使用前晚购买的面包、牛奶和保温热水" },
        { time: "06:30—11:30", action: "长距离前往黑独山，途中轮换休息但不加景点", from: "花土沟", to: "黑独山正式开放区", transport: "自驾", doorToDoor: "约 300 公里；按 4.5—5 小时管理", navigation: "黑独山景区正式游客入口（当天再以官方公告 / 导航确认）", deadline: "每 1.5—2 小时停车 10—15 分钟；11:30 左右抵达", switchCondition: "若导航延误超过 60 分钟，黑独山停留压缩为 60—75 分钟" },
        { time: "11:30—13:00", action: "黑独山核心观景；车上解决路餐", from: "黑独山入口", to: "正式观景区", transport: "景区规定交通 + 步行", doorToDoor: "游玩约 1.5 小时", navigation: "黑独山正式开放区", deadline: "13:00 离开，最晚不拖过 13:30", switchCondition: "大风、沙尘或景区管制时只在开放观景台停留，不进入任何未授权便道" },
        { time: "13:00—19:00", action: "驶向大柴旦，中途补油、如厕和短休息", from: "黑独山", to: "大柴旦丽呈翠星酒店", transport: "自驾", doorToDoor: "约 330—350 公里；按 5.5—6 小时管理", navigation: "大柴旦丽呈翠星酒店", deadline: "尽量在天黑前进入大柴旦镇区", switchCondition: "17:30 仍距大柴旦超过 150 公里时，立即取消所有拍照停车并联系酒店保留房间" },
        { time: "19:00—21:00", action: "入住、热食晚餐并检查车辆", from: "大柴旦镇", to: "酒店与餐厅", transport: "自驾 / 步行", doorToDoor: "约 2 小时", navigation: "当天餐饮首选分店", deadline: "检查胎压、胎面与底盘可见处；驾驶员优先睡眠", switchCondition: "到店过晚就选营业更晚的雅古拜，不再排网红店" }
      ],
      fallbacks: [{ trigger: "上午路况使黑独山预计到达时间晚于 13:00", drop: "压缩黑独山至 45—60 分钟，不再等待理想光线", switchTo: "完成合规观景后立刻去大柴旦", nextNode: "当晚必须住大柴旦，不能把疲劳驾驶转嫁给次日" }]
    },

    {
      id: "day-3",
      date: "2026-09-29",
      label: "D3 · 丹霞与托素湖",
      note: "目标不是赶到湖边，而是日落前留出完整湖岸时间。14:30 离开星之谷、17:00 前到托素湖是两条硬线。",
      selectedRouteId: "route-d3",
      routes: [{
        id: "route-d3",
        name: "D3｜大柴旦 → 彩虹丹霞·星之谷 → 托素湖 → 德令哈",
        order: ["07:30 大柴旦出发", "彩虹丹霞·星之谷", "托素湖日落前", "德令哈晚餐与住宿"],
        reason: "先用红黄灰丹霞换色，再以深蓝湖面收束；同一天的冷暖反差是这条安排的核心。",
        experience: "星之谷只走核心彩色岩层，托素湖把时间留给湖岸、远山与低角度光线；可鲁克湖不设为固定打卡。",
        totalTime: "地图基线约 369 公里 / 6 小时 28 分纯驾驶；按砂石路和停靠以 11.5—12 小时管理。",
        tradeoff: "可鲁克湖只在明显早到时临场加，不得反向挤压托素湖。",
        sources: [
          { label: "用户提供｜高德分段导航截图", url: "", role: "369.4 公里 / 6 小时 28 分的路线基线" },
          { label: "聚游福利｜彩虹丹霞·星之谷", url: "https://jingdian.juyoufuli.com/app/scenics/77910", role: "当前季节开放与停止入园参考" },
          { label: "携程｜托素湖", url: "https://you.ctrip.com/sight/delingha891/49848.html", role: "景点位置、开放与咨询信息" },
          { label: "马蜂窝｜德令哈目的地攻略", url: "https://m.mafengwo.cn/baike/12444/", role: "双湖与德令哈目的地背景" }
        ],
        placeIds: ["delingha-star-valley", "tuosu-lake"],
        map: {
          title: "D3 大柴旦—星之谷—托素湖—德令哈",
          note: "按用户地图约 369.4 公里 / 6 小时 28 分；星之谷 14:30 是离场硬线。",
          points: [{ x: 9, y: 14, label: "大柴旦" }, { x: 35, y: 48, label: "星之谷" }, { x: 70, y: 48, label: "托素湖" }, { x: 89, y: 23, label: "德令哈" }]
        }
      }],
      timeline: [
        { time: "07:00—07:30", action: "早餐、退房并打包午餐", from: "大柴旦丽呈翠星酒店", to: "大柴旦出城口", transport: "自驾", doorToDoor: "30 分钟", navigation: "星之谷景区当天确认入口", deadline: "07:30 出发", switchCondition: "餐厅未开就用酒店早餐或前晚打包，不在镇上等位" },
        { time: "07:30—11:30", action: "前往星之谷，中途短休一次", from: "大柴旦", to: "彩虹丹霞·星之谷", transport: "自驾", doorToDoor: "约 4 小时；以当天导航为准", navigation: "彩虹丹霞·星之谷景区", deadline: "11:30 左右抵达", switchCondition: "路况使预计到达晚于 12:30 时，星之谷压缩为 60 分钟" },
        { time: "11:30—14:30", action: "星之谷游览并在车上吃路餐", from: "星之谷入口", to: "核心丹霞区", transport: "景区交通 / 步行以现场为准", doorToDoor: "含午餐最多 3 小时", navigation: "彩虹丹霞·星之谷正式入口", deadline: "14:30 必须离开；当前季节资料显示 18:00 停止入园，但本线路不等到闭园", switchCondition: "任何排队都不能突破 14:30，超过即跳过次要观景台" },
        { time: "14:30—17:00", action: "直奔托素湖，不再插入可鲁克湖", from: "星之谷", to: "托素湖正常开放入口", transport: "自驾", doorToDoor: "约 2—2.5 小时，砂石 / 支线路况另留余量", navigation: "托素湖景区当日开放入口", deadline: "目标 16:30、最晚 17:00 抵达", switchCondition: "17:00 前无法到达时，不走陌生湖岸便道，只在合规开放点短停后去德令哈" },
        { time: "17:00—19:10", action: "托素湖湖岸观景，随后进德令哈", from: "托素湖", to: "美豪 R 酒店（德令哈海子诗歌陈列馆店）", transport: "步行 + 自驾", doorToDoor: "湖边 60—75 分钟；进城约 40—60 分钟", navigation: "托素湖正式观景区 → 美豪 R 酒店（德令哈海子诗歌陈列馆店）", deadline: "天黑前结束湖岸活动；不在无人区摸黑找机位", switchCondition: "大风或入口临时关闭，就把时间转给德令哈早到与车辆检查" },
        { time: "19:10—21:00", action: "入住与晚餐", from: "美豪 R 酒店（德令哈海子诗歌陈列馆店）", to: "市区餐厅", transport: "自驾 / 步行", doorToDoor: "约 1.5 小时", navigation: "当天餐饮首选分店", deadline: "晚餐后补足次日饮水", switchCondition: "首选等位超过 20 分钟即换备选" }
      ],
      fallbacks: [{ trigger: "14:30 仍未离开星之谷", drop: "立即结束星之谷，不加可鲁克湖", switchTo: "直接导航托素湖正式入口", nextNode: "17:00 前抵达托素湖；这是当日取舍基准" }]
    },

    {
      id: "day-4",
      date: "2026-09-30",
      label: "D4 · 柏树山与茶卡",
      note: "上午只走柏树山短线，下午给茶卡一个完整光线窗口；不把高海拔徒步做成长线。",
      selectedRouteId: "route-d4",
      routes: [{
        id: "route-d4",
        name: "D4｜德令哈 → 柏树山短线 → 茶卡盐湖 → 茶卡镇",
        order: ["08:00 德令哈出发", "柏树山近端观景", "茶卡镇午餐 / 寄存", "茶卡盐湖", "茶卡镇住宿"],
        reason: "柏树山补上林木与山脊，茶卡补上经典镜面盐湖；景观节奏比连续看荒漠更完整。",
        experience: "柏树山只到近端观景位；茶卡根据风力选择步行、小火车和下水拍倒影，不追求把全部站点走完。",
        totalTime: "约 10—11 小时；驾车约 230—260 公里、3.5—4.5 小时。",
        tradeoff: "柏树山深处观景位需要更多徒步，今天主动放弃，保证 13:30 左右进入茶卡。",
        sources: [
          { label: "茶卡盐湖官网｜开放与游览导览", url: "https://www.chakasl.com/wap/index", role: "9 月开放、咨询和救援信息" },
          { label: "马蜂窝｜茶卡盐湖游玩经验", url: "https://itf.mafengwo.cn/client/note.php/info/?id=24332469", role: "倒影、风力、鞋套、防晒与保暖经验" },
          { label: "嬉游｜一趟青甘大环线，满足了我对旅行的所有向往", url: "https://mp.weixin.qq.com/s/ldTT_NmWefB7j6h3HfkRcg", role: "茶卡价值与错峰判断" }
        ],
        placeIds: ["baishu-mountain", "chaka"],
        map: {
          title: "D4 德令哈—柏树山—茶卡",
          note: "柏树山是德令哈北侧短支线；下午进入茶卡天空之镜正式景区。",
          points: [{ x: 16, y: 45, label: "德令哈" }, { x: 30, y: 18, label: "柏树山" }, { x: 80, y: 45, label: "茶卡" }]
        }
      }],
      timeline: [
        { time: "07:15—08:00", action: "早餐、退房与补油", from: "美豪 R 酒店（德令哈海子诗歌陈列馆店）", to: "德令哈北侧", transport: "自驾", doorToDoor: "45 分钟", navigation: "柏树山景区 / 当日开放入口", deadline: "08:00 出发", switchCondition: "天气低云、降雪或身体不适时直接去茶卡" },
        { time: "08:20—10:00", action: "柏树山近端观景短线", from: "柏树山入口", to: "第一处主要观景位", transport: "自驾至允许区域 + 步行", doorToDoor: "约 1.5 小时", navigation: "柏树山景区正式入口", deadline: "10:00 下山", switchCondition: "不追第二处远端观景位；任何高反、结冰或道路管制都立即折返" },
        { time: "10:00—13:30", action: "前往茶卡镇，午餐、寄存或先办入住", from: "柏树山", to: "茶卡白兰道酒店", transport: "自驾", doorToDoor: "含支线约 200 公里；按 3—3.5 小时管理", navigation: "茶卡白兰道酒店 / 当天午餐分店", deadline: "13:30 左右到茶卡", switchCondition: "若 13:30 后才到，先吃快餐或打包，不把黄金光线耗在等位" },
        { time: "13:30—18:40", action: "茶卡盐湖完整游览", from: "茶卡镇", to: "茶卡盐湖天空之镜景区", transport: "自驾 + 景区步行 / 小火车", doorToDoor: "游玩约 4—5 小时", navigation: "茶卡盐湖天空之镜景区游客中心", deadline: "官网当前 9 月 19:20 停止售票；本日 18:40 开始出园", switchCondition: "风大无倒影时，改看盐雕、铁轨、采盐景观，不为镜面死等" },
        { time: "18:40—20:30", action: "返回茶卡镇吃晚饭并休息", from: "茶卡盐湖", to: "茶卡镇", transport: "自驾", doorToDoor: "约 15—25 分钟 + 晚餐", navigation: "当天餐饮首选分店", deadline: "饭后为次日国庆首日备水和早餐", switchCondition: "游客集中时直接用备选店，避免排队超过 25 分钟" }
      ],
      fallbacks: [{ trigger: "柏树山天气差、道路结冰或 09:00 仍未进入", drop: "取消柏树山", switchTo: "直接前往茶卡，争取更早入园和更宽松的午餐", nextNode: "茶卡盐湖是本日主景，不用柏树山冒险换时间" }]
    },

    {
      id: "day-5",
      date: "2026-10-01",
      label: "D5 · 青海湖",
      note: "国庆首日只走二郎剑正式景区，不绕私人湖边岔路；午后尽早离开，给进西宁的拥堵留余量。",
      selectedRouteId: "route-d5",
      routes: [{
        id: "route-d5",
        name: "D5｜茶卡 → 青海湖二郎剑 → 西宁",
        order: ["08:00 茶卡出发", "青海湖二郎剑景区", "14:00 前后驶向西宁", "西宁晚餐与住宿"],
        reason: "二郎剑是青海湖南岸最成熟的正式入口，停车、步道与景交更确定，适合国庆首日压低找路风险。",
        experience: "短线可步行 / 骑行至湖边与码头；想省体力可用小火车到半岛，游船是否开放看当天风浪。",
        totalTime: "约 10—11 小时；正常驾车约 300 公里、4.5—5 小时，国庆按 6—7 小时留量。",
        tradeoff: "不做环湖、不临时追黑马河日落；把缓冲留给景区排队和进西宁车流。",
        sources: [
          { label: "共和县政府｜青海湖二郎剑游览线路", url: "https://www.gonghe.gov.cn/lnb/zjgh1/stgh1__zjgh/stgh/content_1013640474", role: "正式景区内部玩法" },
          { label: "共和县政府｜青海湖运营提示", url: "https://www.gonghe.gov.cn/lnb/xwdt1/tzgg1__xwdt/tzgg/content_1013653405", role: "天气、游船和预约提示" },
          { label: "嬉游｜每年都很美、今年也很火的大西北，到底怎么玩？", url: "https://mp.weixin.qq.com/s/88bf_HQZ0rVzTJft_v4PLA", role: "青海湖在环线中的价值判断" }
        ],
        placeIds: ["qinghai-erlangjian"],
        map: {
          title: "D5 茶卡—二郎剑—西宁",
          note: "二郎剑是唯一湖岸入口；节假日实时路况优先于计划时长。",
          points: [{ x: 10, y: 48, label: "茶卡" }, { x: 48, y: 25, label: "二郎剑" }, { x: 88, y: 47, label: "西宁" }]
        }
      }],
      timeline: [
        { time: "07:15—08:00", action: "早餐、退房与加满油", from: "茶卡白兰道酒店", to: "G109 青海湖方向", transport: "自驾", doorToDoor: "45 分钟", navigation: "青海湖二郎剑景区游客中心", deadline: "08:00 出发", switchCondition: "酒店早餐排队就打包，不把国庆首日第一段路拖晚" },
        { time: "08:00—10:30", action: "驶向二郎剑，按实时拥堵调整", from: "茶卡镇", to: "青海湖二郎剑景区", transport: "自驾", doorToDoor: "约 150 公里；平日约 2 小时，节日按 2.5—3 小时", navigation: "青海湖二郎剑景区停车场", deadline: "目标 10:30 前停车", switchCondition: "若景区发布限流或停车饱和，按官方疏导进入，不改走私人湖边入口" },
        { time: "10:30—13:40", action: "二郎剑湖岸游览与简餐", from: "游客中心", to: "半岛 / 湖岸步道", transport: "步行、骑行、小火车或游船以当日运营为准", doorToDoor: "约 3 小时", navigation: "青海湖二郎剑景区", deadline: "13:40 开始回停车场，14:00 左右发车", switchCondition: "大风停航就改走湖岸步道；午餐只用景区简餐 / 自带路餐，不排长队" },
        { time: "14:00—18:30", action: "前往西宁并办理入住", from: "二郎剑", to: "西宁富力万达文华酒店", transport: "自驾", doorToDoor: "约 150 公里；节日按 3.5—4.5 小时", navigation: "西宁富力万达文华酒店停车场", deadline: "天黑前后进入市区即可，不再增加远郊点", switchCondition: "拥堵超过预期时直接去酒店，不绕日月山等额外景点" },
        { time: "18:30—20:30", action: "西宁正式晚餐", from: "酒店", to: "市区餐厅", transport: "步行 / 网约车优先", doorToDoor: "约 1.5—2 小时", navigation: "当天餐饮首选分店", deadline: "车辆停妥后不再疲劳开车找吃的", switchCondition: "首选排队超过 30 分钟即按备选切换" }
      ],
      fallbacks: [{ trigger: "二郎剑停车或入园排队已使 12:00 仍未开始游览", drop: "取消小火车 / 游船等耗时项目", switchTo: "只走湖岸短线，14:30 前离开", nextNode: "西宁富力万达文华酒店是当晚固定节点；不能用夜间赶路补白天排队" }]
    },

    {
      id: "day-6",
      date: "2026-10-02",
      label: "D6 · 返程",
      note: "GJ8166 计划 20:00 从曹家堡机场 T3 起飞；租车仍按 14:00 在机场服务点归还，上午保留西宁半日窗口。",
      selectedRouteId: "route-d6",
      routes: [{
        id: "route-d6",
        name: "D6｜西宁半日 → 14:00 机场还车 → GJ8166 20:00 返回杭州",
        order: ["08:00 早餐", "09:00—11:00 西宁半日内容待确认", "11:00—12:00 早午餐与退房", "补油后 14:00 还车", "托运、安检与机场晚餐", "20:00 起飞"],
        reason: "晚班航班把上午还给西宁，同时保留原租车订单 14:00 还车和充足的机场缓冲。",
        experience: "上午只安排市区内、随时可撤的内容；中午从海湖新区向东移动，完成还车后再进入机场。",
        totalTime: "西宁富力万达文华酒店至机场按国庆路况预留 75—90 分钟，另留补油和还车时间。",
        tradeoff: "上午具体活动尚未锁定；不安排塔尔寺等远郊项目，避免影响 14:00 还车。",
        sources: [{ label: "已出票行程（隐私化摘录）", url: "", role: "GJ8166 20:00—23:10；租车订单 14:00 还车" }],
        placeIds: [],
        map: {
          title: "D6 万达文华—补油—曹家堡机场",
          note: "从海湖新区向东前往机场；上午活动必须留在西宁市区并可随时结束。",
          points: [{ x: 12, y: 45, label: "万达文华" }, { x: 43, y: 28, label: "补油" }, { x: 88, y: 24, label: "曹家堡机场" }]
        }
      }],
      timeline: [
        { time: "08:00—09:00", action: "早餐、整理行李并核对还车材料", from: "西宁富力万达文华酒店", to: "酒店停车场", transport: "步行", doorToDoor: "约 1 小时", navigation: "西宁富力万达文华酒店", deadline: "出门前完成装车", switchCondition: "若前一日进城过晚，就取消上午活动并延长休息" },
        { time: "09:00—11:00", action: "西宁市区半日活动，具体内容待下一步确认", from: "酒店", to: "市区内可快速撤离的地点", transport: "自驾 / 网约车", doorToDoor: "控制在 2 小时内", navigation: "待确认", deadline: "11:00 开始返回酒店", switchCondition: "实时路况或身体状态不佳时直接取消" },
        { time: "11:00—12:00", action: "早午餐、退房并正式装车", from: "酒店周边", to: "西宁富力万达文华酒店停车场", transport: "步行 / 网约车", doorToDoor: "约 1 小时", navigation: "西宁富力万达文华酒店", deadline: "12:00 前完成退房", switchCondition: "餐厅排队超过 20 分钟就改为打包" },
        { time: "12:00—14:00", action: "补满油并前往曹家堡机场还车", from: "西宁富力万达文华酒店", to: "曹家堡机场 T3 服务点", transport: "自驾", doorToDoor: "含补油按 1.5—2 小时管理", navigation: "顺路正规加油站 → 订单内曹家堡机场 T3 服务点", deadline: "14:00 完成交车", switchCondition: "实时导航延误时只加油，不洗车；保留加油小票" },
        { time: "14:00—15:00", action: "验车、结算并进入 T3", from: "机场服务点", to: "曹家堡机场 T3", transport: "租车服务", doorToDoor: "预留 60 分钟", navigation: "订单内曹家堡机场 T3 服务点", deadline: "15:00 前结束还车流程", switchCondition: "出现车损争议时立即调取 D1 取车视频、照片和客服记录，并同步联系平台客服" },
        { time: "15:00—19:20", action: "值机托运、安检、机场晚餐与候机", from: "曹家堡机场 T3", to: "登机口", transport: "步行", doorToDoor: "约 4 小时 20 分", navigation: "GJ8166 值机柜台与票面登机口", deadline: "按票面登机截止时间提前到登机口", switchCondition: "航班提前或值机排队超预期时，先完成安检再用餐" },
        { time: "20:00—23:10", action: "乘坐 GJ8166 返回杭州", from: "西宁曹家堡机场 T3", to: "杭州萧山机场 T3", transport: "航班", doorToDoor: "计划飞行 3 小时 10 分", navigation: "GJ8166", deadline: "以当天航司通知为准", switchCondition: "航变后重新倒推市区离开时间" }
      ],
      fallbacks: [{ trigger: "上午路况异常，或 11:00 仍无法返回酒店", drop: "立即取消剩余市区活动和坐店午餐", switchTo: "回酒店退房、打包后补油直达机场", nextNode: "14:00 还车仍是固定节点；20:00 航班缓冲不用于增加远郊景点" }]
    }
  ],

  places: [
    {
      id: "mangya-emerald",
      name: "茫崖翡翠湖",
      highlights: ["蓝绿、乳白等多色盐池", "戈壁与远山背景", "日落前低角度光线"],
      why: "由采盐形成的盐池群，不同矿物浓度让湖面呈现多层蓝绿。它离花土沟近，是 14:20 落地、完成取车后仍有机会赶上日落的第一主景。",
      duration: "2.5—3 小时；其中日落前 60—90 分钟最重要",
      role: "导航游客中心，先走近端核心盐池，再根据风力和体力向外延伸；大场景适合广角 / 高机位，人物靠盐池边缘取倒影。",
      limits: "当前平台显示 08:00—20:00，仅作行前参考；盐壳薄处不要踩，禁止驶入盐池便道。无人机须看当天禁飞、风力和景区规定。",
      sources: [
        { label: "携程｜茫崖翡翠湖", url: "https://you.ctrip.com/sight/mangya2026914/5580343.html", role: "位置、开放参考与景点介绍" },
        { label: "嬉游｜海西线路攻略", url: "https://mp.weixin.qq.com/s/_NfhtsEZYs6hFZGj61J4eQ", role: "盐湖景观体验与路线价值" }
      ],
      image: { src: "images/xiyou-mangya.png", alt: "航拍视角下呈蓝绿与白色盐池纹理的茫崖翡翠湖", caption: "嬉游原图：多色盐池与戈壁尺度是核心看点。" }
    },
    {
      id: "heidushan",
      name: "黑独山合规观景区",
      highlights: ["黑灰山体与沙砾", "水墨般褶皱", "月面式荒漠尺度"],
      why: "黑色荒漠漆覆盖在古老岩层上，形成少见的黑灰色山体；它与盐湖、丹霞都不同，是 A3 最不可替代的一站。",
      duration: "1.5 小时核心游览；路况顺畅可放宽至 2 小时",
      role: "只导航正式开放入口，沿景区规定线路抵达观景区；用中长焦压缩山体层次，步行只做开放短线。",
      limits: "黑独山已规范运营，不再把越野车开进未授权区域。风沙、暴晒和无补给是主要风险；13:00 必须离开。",
      sources: [
        { label: "中国旅游集团｜中旅黑独山旅游风景区", url: "https://www.ctg.cn/article/19696", role: "正式位置、地貌与规范运营" },
        { label: "嬉游｜柴达木深度线路", url: "https://mp.weixin.qq.com/s/PVcZlVfZSC5lOrfnGPbB2Q", role: "景观体验判断与图片" }
      ],
      image: { src: "images/xiyou-heidushan.jpg", alt: "黑独山黑灰色荒漠山体与褶皱地貌", caption: "嬉游原图：像铺开的黑白水墨长卷。" }
    },
    {
      id: "delingha-star-valley",
      name: "彩虹丹霞·星之谷",
      highlights: ["红黄灰相间岩层", "荒漠丹霞", "暖色地貌换景"],
      why: "它把行程从黑灰戈壁切换成红黄丹霞，让 D3 不只是赶往湖边。",
      duration: "1.5—2.5 小时；本线路 14:30 必须离开",
      role: "进入正式景区后优先核心彩色岩层与近端观景台；不要把时间耗在所有支线和重复机位。",
      limits: "现行季节资料显示 9/30 前 09:30—19:30、18:00 停止入园，但需 T-3 复核；部分连接路可能为砂石路，普通公路胎谨慎慢行。",
      sources: [
        { label: "聚游福利｜彩虹丹霞·星之谷", url: "https://jingdian.juyoufuli.com/app/scenics/77910", role: "季节开放和停止入园参考" },
        { label: "用户提供｜高德导航截图", url: "", role: "当天路线与驾驶基线" }
      ],
      image: { src: "https://dimg04.c-ctrip.com/images/1lo5d12000jgxhr155B6D_C_900_504.jpg", alt: "星之谷红黄灰相间的荒漠丹霞", caption: "暖色丹霞负责与下午的深蓝湖面形成反差。" }
    },
    {
      id: "tuosu-lake",
      name: "托素湖",
      highlights: ["深蓝咸水湖", "荒漠湖岸", "低角度光线与远山"],
      why: "大面积深蓝水面紧贴荒漠，是 D3 的冷色收束；相比打卡可鲁克湖，本次更需要在日落前把托素湖完整完成。",
      duration: "60—75 分钟；16:30 到达最理想",
      role: "从星之谷直接导航当天开放的正常入口，先确定回程方向再沿合规湖岸短线活动。",
      limits: "自然保护区边界、湖岸开放和路况会变化；不走陌生便道、不摸黑找机位、不追逐或惊扰鸟类。17:00 前未到即压缩。",
      sources: [
        { label: "携程｜托素湖", url: "https://you.ctrip.com/sight/delingha891/49848.html", role: "位置、开放参考和咨询信息" },
        { label: "马蜂窝｜德令哈攻略", url: "https://m.mafengwo.cn/baike/12444/", role: "双湖自然背景与目的地信息" }
      ],
      image: { src: "https://jp.news.cn/20241118/2df83eecb3c74aa78eccaa59690b4fa1/202411182df83eecb3c74aa78eccaa59690b4fa1_20241118a29d06d0ed2f4a03956bbaf0d9c35430.jpg", alt: "托素湖深蓝湖面与荒漠湖岸", caption: "深蓝水面、荒漠岸线与远山是主要画面。" }
    },
    {
      id: "baishu-mountain",
      name: "德令哈柏树山短线",
      highlights: ["高原圆柏与云杉", "花岗岩山脊", "近端俯瞰"],
      why: "连续两天荒漠之后，柏树山提供难得的林木与山脊层次，让行程色彩和空间发生转换。",
      duration: "1—1.5 小时，只做近端观景位",
      role: "从德令哈北侧进入，抵达第一处主要观景位后折返；不把深处第二观景位设为目标。",
      limits: "海拔高、早晨可能结冰或低云；出现头痛、气短、路面湿滑就取消。9 月底是否有金黄秋色取决于当年气温。",
      sources: [
        { label: "Trip.com｜柏树山", url: "https://www.trip.com/travel-guide/attraction/delingha/baishu-mountain-82909/", role: "位置与建议游览时间" },
        { label: "实地路线资料｜柏树山观景位", url: "https://k.sina.com.cn/article_6303322687_177b5123f00100nvs7.html", role: "近端和远端观景位差异" }
      ],
      image: { src: "https://imgpolitics.gmw.cn/attachement/jpg/site2/20221004/f44d305ea07324a5c9881c.jpg", alt: "云雾环绕的德令哈柏树山山脊与林木", caption: "柏树山的价值是林木、岩峰和云雾，不是普通城市公园。" }
    },
    {
      id: "chaka",
      name: "茶卡盐湖·天空之镜",
      highlights: ["浅水倒影", "盐雕与铁轨", "小火车 / 步行组合"],
      why: "它是成熟的经典盐湖体验：交通和游览体系完整，也能用近距离步行补足茫崖翡翠湖偏大景观的体验。",
      duration: "3.5—4.5 小时",
      role: "风小则优先倒影区，风大则改看盐雕、铁轨和采盐景观；体力有限可坐小火车进、步行出。",
      limits: "镜面依赖无风、晴天和水位，不是到场必有。备鞋套 / 可洗拖鞋、墨镜、防晒和保暖层；盐水接触后及时冲洗。",
      sources: [
        { label: "茶卡盐湖官网｜开放与导览", url: "https://www.chakasl.com/wap/index", role: "官方开放、咨询与救援信息" },
        { label: "马蜂窝｜茶卡盐湖游玩经验", url: "https://itf.mafengwo.cn/client/note.php/info/?id=24332469", role: "倒影、风力、鞋套和穿着建议" },
        { label: "嬉游｜青甘环线攻略", url: "https://mp.weixin.qq.com/s/ldTT_NmWefB7j6h3HfkRcg", role: "景点价值与错峰判断" }
      ],
      image: { src: "images/xiyou-chaka.jpg", alt: "茶卡盐湖浅水盐面倒映天空与游客", caption: "嬉游原图：镜面效果最吃风力、光线与水位。" }
    },
    {
      id: "qinghai-erlangjian",
      name: "青海湖二郎剑景区",
      highlights: ["青海湖南岸大湖面", "半岛与湖岸步道", "成熟景交与码头"],
      why: "二郎剑是南岸成熟的正式入口，国庆期间比临时寻找私人湖边入口更稳，也更适合把游览控制在半天。",
      duration: "2.5—3 小时",
      role: "短线走湖岸步道 / 骑行至码头；省体力可坐小火车到半岛。游船只在当天风浪与运营允许时选择。",
      limits: "海拔约 3200 米，慢走、防风、防晒；国庆预留停车与入园排队。天气会导致游船停航，禁止越过生态围栏或进入私人收费岔路。",
      sources: [
        { label: "共和县政府｜二郎剑游览线路", url: "https://www.gonghe.gov.cn/lnb/zjgh1/stgh1__zjgh/stgh/content_1013640474", role: "正式景区内部玩法" },
        { label: "共和县政府｜青海湖运营提示", url: "https://www.gonghe.gov.cn/lnb/xwdt1/tzgg1__xwdt/tzgg/content_1013653405", role: "天气和游船停运边界" },
        { label: "嬉游｜大西北路线攻略", url: "https://mp.weixin.qq.com/s/88bf_HQZ0rVzTJft_v4PLA", role: "青海湖体验判断" }
      ],
      image: { src: "images/qinghai-autumn.jpg", alt: "青海湖深蓝湖面、岸线与远山", caption: "青海湖以大尺度深蓝水面完成 A3 的自然景观收尾。" }
    }
  ],

  meals: [
    {
      id: "meal-d1-breakfast", dayId: "day-1", label: "D1｜早餐 · 杭州萧山 T3", note: "GJ8165 06:20 起飞，早餐应在安检后或登机前用便携食物解决。",
      strategy: { title: "不占用西宁中转窗口", detail: "到达杭州机场后优先完成值机与安检，再在登机口附近购买早餐；具体门店 T-1 查看 T3 当日营业。" },
      manualNeed: "T-1 核对值机截止时间、登机口和 T3 清晨营业餐饮；不在公开页记录乘机人信息。",
      selected: { primary: "", backup2: "", backup3: "" }, candidates: [],
      sources: [{ label: "已出票行程（隐私化摘录）", url: "", role: "GJ8165 杭州萧山 T3 06:20 起飞" }]
    },
    {
      id: "meal-d1-lunch", dayId: "day-1", label: "D1｜午餐 · 西宁中转", note: "09:40 抵达西宁、12:20 继续飞茫崖；午餐只能在完成中转手续后快速解决。",
      strategy: { title: "先完成中转，再吃便携午餐", detail: "确认后续登机口后，在同一航站楼购买可带走餐食；14:20 落地茫崖后不安排坐店午餐。" },
      manualNeed: "提前确认行李是否直挂及中转动线；T-1 再看曹家堡 T3 安检后餐饮。",
      selected: { primary: "", backup2: "", backup3: "" }, candidates: [],
      sources: [{ label: "已出票行程（隐私化摘录）", url: "", role: "GJ8165 09:40 抵达；MU6517 12:20 起飞" }]
    },
    {
      id: "meal-d1-dinner", dayId: "day-1", label: "D1｜晚餐 · 花土沟", note: "翡翠湖日落后约 20:40 回镇。按指定来源顺序，没有找到足以核实到 2026 营业、具体分店和晚间接单的餐厅。",
      strategy: { title: "当晚必须在花土沟镇内吃，不跨城", detail: "先入住处附近搜索仍营业的热食；21:00 前不能落座就启用前往景区前已买好的便携晚餐。" },
      manualNeed: "请在大众点评或高德打开“花土沟镇美食”，把你看中的 3—5 家店详情页和最新评论截图给我；优先需要电话、地址、营业时间。嬉游评论区若提到花土沟餐馆也请一并截取。",
      selected: { primary: "", backup2: "", backup3: "" }, candidates: [],
      sources: [{ label: "大众点评｜茫崖市美食入口", url: "https://www.dianping.com/mangyashi", role: "只能确认当地有商户目录，公开页未返回可核门店" }]
    },
    {
      id: "meal-d2-breakfast", dayId: "day-2", label: "D2｜早餐 · 花土沟", note: "06:30 必须出城。此前候选的地址在公开页面出现 26、28、36 号冲突，且旧点评认为早晨未必合适，因此已经撤下。",
      strategy: { title: "早餐是住宿筛选条件", detail: "订花土沟酒店时确认 05:50—06:15 可取早餐；否则 9/27 晚上买鸡蛋、面包、牛奶和热水。" },
      manualNeed: "请从高德或大众点评补 2—3 家 06:00 已营业的花土沟早餐店截图；未核到之前不设首选。",
      selected: { primary: "", backup2: "", backup3: "" }, candidates: [],
      sources: [{ label: "路线硬线", url: "", role: "06:30 驶出花土沟，不能为找早餐等待" }]
    },
    {
      id: "meal-d2-lunch", dayId: "day-2", label: "D2｜午餐 · 黑独山", note: "11:30—13:00 是黑独山游览窗口，沿线没有经指定来源核实、又不造成绕行的堂食餐厅。",
      strategy: { title: "本餐明确采用随车路餐", detail: "9/27 在花土沟采购两套主食、熟食或自热餐、水果和热水；11:30 前后在合规停车区进食，垃圾全部带走。" },
      selected: { primary: "", backup2: "", backup3: "" }, candidates: [],
      sources: [{ label: "用户确认路线与高德导航", url: "", role: "黑独山长驾日与 13:00 离场边界" }]
    },
    {
      id: "meal-d2-dinner", dayId: "day-2", label: "D2｜晚餐 · 大柴旦", note: "马蜂窝可以提供餐厅名单，但公开页没有完整门牌、电话和 2026 营业时段；因此只列研究候选，不提前排序。",
      manualNeed: "请在高德或大众点评补这 3 家的门店详情与近 3 个月评论；若其中已歇业，就换你现场看到的高分店。",
      selected: { primary: "", backup2: "", backup3: "" },
      candidates: [
        { id: "d2d-aiyoubu", rankable: false, sourceTier: "马蜂窝", evidenceStatus: "有推荐评价；缺具体门牌、电话和营业时段", name: "艾有布特色炕锅", category: "炕锅羊排", feature: "马蜂窝大柴旦美食页列 No.1，唯一公开点评强烈推荐炕锅羊排", classicDishes: ["炕锅羊排"], base: { location: "大柴旦镇；具体门牌待补", duration: "50—70 分钟", price: "未获取", hours: "未获取" }, platforms: { amap: {}, dianping: {} }, routeRelation: "仅在确认位于镇内、入住后不绕路时使用", risk: "只有 1 条公开点评，样本很弱", condition: "高德 / 点评证实仍营业且 20:00 后接单", repetition: "D4 晚餐避免再点炕锅", sources: [{ label: "马蜂窝｜大柴旦美食", url: "https://www.mafengwo.cn/cy/17985/", role: "榜单与用户推荐" }] },
        { id: "d2d-loulan", rankable: false, sourceTier: "马蜂窝", evidenceStatus: "有菜品评价；具体分店与营业仍待核", name: "大柴旦清真楼兰餐厅", category: "清真西北菜", feature: "马蜂窝评价点名大盘鸡与葱爆羊肉", classicDishes: ["大盘鸡", "葱爆羊肉"], base: { location: "大柴旦镇；具体门牌待补", duration: "50—70 分钟", price: "未获取", hours: "未获取" }, platforms: { amap: {}, dianping: {} }, routeRelation: "适合 4 人分食，但必须先确认具体分店", risk: "马蜂窝仅 1 条公开点评", condition: "地图核到同名店且无需跨镇绕行", repetition: "和 D3 烧烤做品类去重", sources: [{ label: "马蜂窝｜大柴旦美食", url: "https://www.mafengwo.cn/cy/17985/", role: "菜品与口碑线索" }] },
        { id: "d2d-salarenjia", rankable: false, sourceTier: "马蜂窝", evidenceStatus: "列入目的地餐饮页；口碑样本和门店信息不足", name: "撒拉人家", category: "土火锅 / 炕锅", feature: "马蜂窝页面记录土火锅、炕锅品类", classicDishes: ["土火锅", "炕锅"], base: { location: "大柴旦镇；具体门牌待补", duration: "55—75 分钟", price: "未获取", hours: "未获取" }, platforms: { amap: {}, dianping: {} }, routeRelation: "只作为前两家无法营业时的调查对象", risk: "缺可用于决策的点评量与营业证据", condition: "地图与最新评论都能核到", repetition: "若 D1 已吃火锅，本餐不优先", sources: [{ label: "马蜂窝｜大柴旦美食", url: "https://www.mafengwo.cn/cy/17985/", role: "餐厅名单与菜系线索" }] }
      ]
    },
    {
      id: "meal-d3-breakfast", dayId: "day-3", label: "D3｜早餐 · 大柴旦", note: "07:30 必须出发。马蜂窝列出 3 家早餐线索，但没有公开门牌和早晨营业时间，暂不把任何一家设为首选。",
      strategy: { title: "酒店早餐优先，前晚打包兜底", detail: "订房时确认 07:00 可用；若不能，9/28 晚餐后打包鸡蛋、馍、牛奶或酸奶与水果。" },
      manualNeed: "请补高德 / 大众点评页面，重点看这 3 家是否在 07:00 前营业、离酒店多远。",
      selected: { primary: "", backup2: "", backup3: "" },
      candidates: [
        { id: "d3b-zhanying", rankable: false, sourceTier: "马蜂窝", evidenceStatus: "目的地榜 No.3；无点评、地址和时段", name: "占英牛肉面", category: "牛肉面", feature: "属于早餐适配品类，但营业证据不足", classicDishes: ["牛肉面"], base: { location: "大柴旦镇；门牌待补", duration: "25—35 分钟", price: "未获取", hours: "未获取" }, platforms: { amap: {}, dianping: {} }, routeRelation: "只在住宿附近且 07:00 已开门时成立", risk: "0 条马蜂窝点评", condition: "地图核到早开和具体分店", repetition: "与午餐路餐区分", sources: [{ label: "马蜂窝｜大柴旦美食", url: "https://www.mafengwo.cn/cy/17985/", role: "餐厅名单" }] },
        { id: "d3b-xiaohan", rankable: false, sourceTier: "马蜂窝", evidenceStatus: "目的地榜 No.4；无点评、地址和时段", name: "小韩牛肉面", category: "牛肉面", feature: "第二个早餐线索，不因同品类强行排序", classicDishes: ["牛肉面"], base: { location: "大柴旦镇；门牌待补", duration: "25—35 分钟", price: "未获取", hours: "未获取" }, platforms: { amap: {}, dianping: {} }, routeRelation: "只在住宿附近且 07:00 已开门时成立", risk: "0 条马蜂窝点评", condition: "地图核到早开和具体分店", repetition: "与占英二选一", sources: [{ label: "马蜂窝｜大柴旦美食", url: "https://www.mafengwo.cn/cy/17985/", role: "餐厅名单" }] },
        { id: "d3b-lvji", rankable: false, sourceTier: "马蜂窝", evidenceStatus: "有 1 条低分样本；地址和时段缺失", name: "吕记胡辣汤", category: "胡辣汤 / 早餐", feature: "能提供不同于牛肉面的早餐口味", classicDishes: ["胡辣汤"], base: { location: "大柴旦镇；门牌待补", duration: "25—35 分钟", price: "未获取", hours: "未获取" }, platforms: { amap: {}, dianping: {} }, routeRelation: "只有地图证实顺路早开才启用", risk: "马蜂窝 3.2 分且仅 1 条点评", condition: "高德 / 点评近期评论无停业信号", repetition: "与牛肉面候选去重", sources: [{ label: "马蜂窝｜大柴旦美食", url: "https://www.mafengwo.cn/cy/17985/", role: "餐厅与评分线索" }] }
      ]
    },
    {
      id: "meal-d3-lunch", dayId: "day-3", label: "D3｜午餐 · 星之谷", note: "11:30—14:30 同时承担游览和午餐，之后要直奔托素湖；没有堂食时间。",
      strategy: { title: "本餐采用随车路餐", detail: "9/28 晚上在大柴旦准备耐储存咸味主食、熟食或自热餐、水果、饮水和热水；游览间隙吃，14:30 必须离谷。" },
      selected: { primary: "", backup2: "", backup3: "" }, candidates: [],
      sources: [{ label: "用户高德导航截图", url: "", role: "大柴旦—星之谷—托素湖—德令哈共 369.4 公里 / 6 小时 28 分驾驶基线" }]
    },
    {
      id: "meal-d3-dinner", dayId: "day-3", label: "D3｜晚餐 · 德令哈", note: "西行老严有明显更强的马蜂窝样本；另两家只够做调查备选，不能与首选同等展示。",
      manualNeed: "请用高德 / 大众点评核“祥和花苑 2 期东门店”的电话、营业时间和最新评论。高德另有“老严烤羊肉总店（河西）”，地址不同，不能视作同一家。",
      selected: { primary: "d3d-laoyan", backup2: "", backup3: "" },
      candidates: [
        { id: "d3d-laoyan", sourceTier: "马蜂窝", evidenceStatus: "马蜂窝德令哈美食 No.1，4.4 分 / 65 条；具体营业待地图复核", name: "西行老严烤羊肉（祥和花苑 2 期东门店）", category: "清真烧烤", feature: "当前德令哈候选中口碑样本最完整", classicDishes: ["烤羊肉", "面食；现场再看当日供应"], base: { location: "祥和花苑 2 期东门店；门牌号待复核", duration: "50—70 分钟", price: "未获取", hours: "未获取" }, platforms: { amap: {}, dianping: {} }, routeRelation: "托素湖后进入德令哈市区用餐", risk: "到店晚可能排队或售罄", condition: "T-1 确认营业，等位不超 20 分钟", repetition: "D2 晚餐若吃炕锅，本餐用烧烤区分", sources: [{ label: "马蜂窝｜德令哈美食", url: "https://www.mafengwo.cn/cy/12444/", role: "榜单、评分与点评量" }] },
        { id: "d3d-caiji", rankable: false, sourceTier: "马蜂窝", evidenceStatus: "4.0 分但只有 1 条点评；具体分店信息不足", name: "蔡记羊羔肉", category: "羊羔肉", feature: "提供非烧烤的羊肉做法", classicDishes: ["羊羔肉"], base: { location: "德令哈市区；具体门牌待补", duration: "50—70 分钟", price: "未获取", hours: "未获取" }, platforms: { amap: {}, dianping: {} }, routeRelation: "地图核到离酒店更近时才有替代价值", risk: "证据量太低", condition: "补到具体分店与近期营业证据", repetition: "与 D2 肉食总量控制", sources: [{ label: "马蜂窝｜德令哈美食", url: "https://www.mafengwo.cn/cy/12444/", role: "餐厅与低样本评分" }] },
        { id: "d3d-ziyunxiang", rankable: false, sourceTier: "马蜂窝", evidenceStatus: "4.0 分但只有 1 条点评；具体分店信息不足", name: "紫云祥", category: "青海菜", feature: "马蜂窝点评提到生炒羊肉", classicDishes: ["生炒羊肉"], base: { location: "德令哈市区；具体门牌待补", duration: "50—70 分钟", price: "未获取", hours: "未获取" }, platforms: { amap: {}, dianping: {} }, routeRelation: "地图核到顺路时才保留", risk: "证据量太低", condition: "补到具体分店与近期营业证据", repetition: "若首选吃烤羊肉则不再点同类", sources: [{ label: "马蜂窝｜德令哈美食", url: "https://www.mafengwo.cn/cy/12444/", role: "菜品线索与低样本评分" }] }
      ]
    },
    {
      id: "meal-d4-breakfast", dayId: "day-4", label: "D4｜早餐 · 德令哈", note: "08:00 出发去柏树山。按指定来源没有找到能确认 07:00 左右营业、又与住宿顺路的具体早餐店。",
      strategy: { title: "早餐并入订房条件", detail: "酒店需 07:00—07:15 可取早餐；否则 D3 晚餐后打包。" },
      manualNeed: "酒店确定后，请给我酒店名；我再围绕 2 公里范围查高德 / 大众点评。现在没有住宿锚点，硬列餐厅容易反向绕路。",
      selected: { primary: "", backup2: "", backup3: "" }, candidates: [],
      sources: [{ label: "马蜂窝｜德令哈目的地", url: "https://www.mafengwo.cn/cy/12444/", role: "公开餐饮页未给出适配本时段的早餐分店" }]
    },
    {
      id: "meal-d4-lunch", dayId: "day-4", label: "D4｜午餐 · 茶卡盐湖入口", note: "13:30 左右抵达，午餐要短且不压缩盐湖光线。茶卡盐湖官方餐饮指南比平台门店页更适合本餐。",
      selected: { primary: "d4l-qingyan", backup2: "d4l-chaka-noodle", backup3: "d4l-qingxiang" },
      candidates: [
        { id: "d4l-qingyan", sourceTier: "景区官方", evidenceStatus: "景区官方餐饮指南列明位置、品类和电话；营业时间需 T-1 电话核", name: "青盐餐厅", category: "炒菜 / 快餐 / 自助", feature: "位于景区入口广场外，最适合先吃后入园", classicDishes: ["快餐或简餐优先", "不在本餐点耗时桌餐"], base: { location: "茶卡盐湖景区入口广场外", duration: "35—50 分钟", price: "未获取", hours: "未公开；电话 13649710759" }, platforms: { amap: {}, dianping: {} }, routeRelation: "不进入镇中心，吃完直接进景区", risk: "国庆前客流与出餐速度待核", condition: "13:30 左右到达且 15 分钟内能点单", repetition: "晚餐不再选景区入口同一餐厅", sources: [{ label: "茶卡盐湖官网｜景区餐饮指南", url: "https://www.chakasl.com/pc/introduction/chi/detail/744.html", role: "位置、品类与电话" }] },
        { id: "d4l-chaka-noodle", sourceTier: "景区官方", evidenceStatus: "官方列明具体店名、位置和电话；营业时间待核", name: "茶卡情牛肉拉面", category: "牛肉面 / 简餐", feature: "入园后想快速吃热食的备选", classicDishes: ["牛肉面", "拌面", "盖浇饭"], base: { location: "茶卡盐湖景区老礼堂区域", duration: "30—45 分钟", price: "未获取", hours: "未公开；电话 18997381444" }, platforms: { amap: {}, dianping: {} }, routeRelation: "必须先入园，适合到达偏晚时把午餐并入游览", risk: "是否当日营业需电话核", condition: "青盐排队过长且景区允许快速进入", repetition: "D3 早餐若吃牛肉面，本餐可改清香茶味道", sources: [{ label: "茶卡盐湖官网｜景区餐饮指南", url: "https://www.chakasl.com/pc/introduction/chi/detail/744.html", role: "店名、位置、品类与电话" }] },
        { id: "d4l-qingxiang", sourceTier: "景区官方", evidenceStatus: "官方列明具体店名、位置和电话；营业时间待核", name: "清香茶味道", category: "米线 / 酸辣粉 / 肉夹馍", feature: "比桌餐更容易控制用时", classicDishes: ["肉夹馍", "米线", "酸辣粉"], base: { location: "茶卡盐湖景区老礼堂区域", duration: "25—40 分钟", price: "未获取", hours: "未公开；电话 13109787881" }, platforms: { amap: {}, dianping: {} }, routeRelation: "入园后的快餐备选", risk: "只适合能接受小吃型午餐的团队", condition: "到达偏晚或其他店排队", repetition: "与晚餐手抓 / 烧烤完全去重", sources: [{ label: "茶卡盐湖官网｜景区餐饮指南", url: "https://www.chakasl.com/pc/introduction/chi/detail/744.html", role: "店名、位置、品类与电话" }] }
      ]
    },
    {
      id: "meal-d4-dinner", dayId: "day-4", label: "D4｜晚餐 · 茶卡镇", note: "茶卡官方景区外餐饮页给出了具体店名、位置和电话，但页面发布于 2022 年；只做可电话复核的候选，不与午餐重复。",
      manualNeed: "请在 9/29 晚上电话确认三家是否仍营业；若都无法接通，再用高德 / 点评截图补新店。",
      selected: { primary: "", backup2: "", backup3: "" },
      candidates: [
        { id: "d4d-xinding", sourceTier: "景区官方旧指南", evidenceStatus: "有店名、位置和电话；来源较旧，尚未确认 2026 营业", name: "鑫鼎手抓精品小炒", category: "手抓 / 小炒", feature: "晚餐可点小炒和蔬菜，避开连续炕锅", classicDishes: ["手抓按人数小份点", "家常小炒", "时蔬"], base: { location: "茶卡西街中段", duration: "50—70 分钟", price: "未获取", hours: "未公开；电话 18097375410" }, platforms: { amap: {}, dianping: {} }, routeRelation: "出园后回镇用餐", risk: "2022 资料可能过时", condition: "电话确认仍营业且无需等位", repetition: "午餐不选重肉类时更合适", sources: [{ label: "茶卡盐湖官网｜景区外餐饮指南", url: "https://www.chakasl.com/introduction/chi/detail/823.html", role: "店名、位置和电话" }] },
        { id: "d4d-yakbone", sourceTier: "景区官方旧指南", evidenceStatus: "有店名、位置和电话；来源较旧，尚未确认 2026 营业", name: "牦牛大骨头", category: "牦牛骨汤 / 热食", feature: "风大降温后适合喝热汤", classicDishes: ["牦牛大骨头", "汤", "主食"], base: { location: "青盐 1 号宾馆一层", duration: "50—70 分钟", price: "未获取", hours: "未公开；电话 15500567528" }, platforms: { amap: {}, dianping: {} }, routeRelation: "住入口附近时更顺路", risk: "2022 资料可能过时", condition: "电话确认且住宿不在镇中心反方向", repetition: "D6 若选牦牛大骨汤，本餐不选", sources: [{ label: "茶卡盐湖官网｜景区外餐饮指南", url: "https://www.chakasl.com/introduction/chi/detail/823.html", role: "店名、位置和电话" }] },
        { id: "d4d-jiashanlou", sourceTier: "景区官方旧指南", evidenceStatus: "有店名、位置和电话；来源较旧，尚未确认 2026 营业", name: "家膳楼烧烤饺子馆", category: "烧烤 / 饺子", feature: "团队口味分散时比火锅灵活", classicDishes: ["饺子", "烧烤", "时蔬"], base: { location: "青盐 1 号宾馆一层", duration: "50—70 分钟", price: "未获取", hours: "未公开；电话 15209674858" }, platforms: { amap: {}, dianping: {} }, routeRelation: "住入口附近时启用", risk: "2022 资料可能过时", condition: "电话确认仍营业", repetition: "D3 已吃烧烤则本餐以饺子和蔬菜为主", sources: [{ label: "茶卡盐湖官网｜景区外餐饮指南", url: "https://www.chakasl.com/introduction/chi/detail/823.html", role: "店名、位置和电话" }] }
      ]
    },
    {
      id: "meal-d5-breakfast", dayId: "day-5", label: "D5｜早餐 · 茶卡", note: "10/1 国庆首日，08:00 必须出发去二郎剑。按指定来源未找到可确认 07:00 早开的具体分店。",
      strategy: { title: "酒店早餐或前晚打包", detail: "订房时确认 07:00 可取；否则 D4 晚餐后买鸡蛋、馍、牛奶或酸奶、水果，07:15 在房间吃完。" },
      manualNeed: "茶卡酒店确定后请给我名称；届时按酒店 2 公里范围补高德 / 点评早餐店。",
      selected: { primary: "", backup2: "", backup3: "" }, candidates: [],
      sources: [{ label: "茶卡盐湖官网｜目的地服务", url: "https://www.chakasl.com/introduction", role: "早餐仍需结合具体住宿定位" }]
    },
    {
      id: "meal-d5-lunch", dayId: "day-5", label: "D5｜午餐 · 青海湖二郎剑", note: "2026 年官方商业续约公示能确认景区内有大食巷、肯德基和德克士；具体营业时段仍要在 9/30 电话核。",
      strategy: { title: "景区简餐为主，自带一份路餐兜底", detail: "10:30—13:40 的游览窗口不接受超过 20 分钟排队。消费只选正式备案商户，先看明码标价并留凭证。" },
      selected: { primary: "d5l-dashixiang", backup2: "d5l-kfc", backup3: "d5l-dicos" },
      candidates: [
        { id: "d5l-dashixiang", sourceTier: "景区官方公示", evidenceStatus: "2026 续约公示确认在营业态；具体档口与时段待现场核", name: "二郎剑景区大食巷", category: "景区餐饮集合区", feature: "品类比单店多，适合 4 人分散选择", classicDishes: ["优先选择现成简餐", "不排长队等桌餐"], base: { location: "二郎剑景区内大食巷", duration: "30—45 分钟", price: "以明码标价为准", hours: "未公开" }, platforms: { amap: {}, dianping: {} }, routeRelation: "不离开正式景区", risk: "国庆首日排队不可预测", condition: "排队不超 20 分钟", repetition: "与早餐路餐品类区分", sources: [{ label: "青海湖景区｜2026 商业业态续约公示（转载）", url: "https://www.meadin.com/jq/294043.html", role: "确认大食巷 2026 续约" }, { label: "青海新闻网｜二郎剑消费提示", url: "https://www.qhnews.com/newscenter/system/2026/06/04/030565046.shtml", role: "合规餐饮、明码标价与留证要求" }] },
        { id: "d5l-kfc", sourceTier: "景区官方公示", evidenceStatus: "2026 续约公示确认品牌商户；具体位置和时段待现场核", name: "肯德基（二郎剑景区店）", category: "连锁快餐", feature: "出餐相对标准化，适合压缩午餐时间", classicDishes: ["以当日菜单为准"], base: { location: "二郎剑景区内；具体铺位待现场图", duration: "25—40 分钟", price: "以现场为准", hours: "未公开" }, platforms: { amap: {}, dianping: {} }, routeRelation: "不离开景区", risk: "国庆可能排队", condition: "大食巷拥堵且本店排队更短", repetition: "与晚餐青海菜去重", sources: [{ label: "青海湖景区｜2026 商业业态续约公示（转载）", url: "https://www.meadin.com/jq/294043.html", role: "确认肯德基 2026 续约" }] },
        { id: "d5l-dicos", sourceTier: "景区官方公示", evidenceStatus: "2026 续约公示确认品牌商户；具体位置和时段待现场核", name: "德克士（二郎剑景区店）", category: "连锁快餐", feature: "第二个能控制用时的连锁备选", classicDishes: ["以当日菜单为准"], base: { location: "二郎剑景区内；具体铺位待现场图", duration: "25—40 分钟", price: "以现场为准", hours: "未公开" }, platforms: { amap: {}, dianping: {} }, routeRelation: "不离开景区", risk: "国庆可能排队", condition: "前两处排队更长", repetition: "与晚餐青海菜去重", sources: [{ label: "青海湖景区｜2026 商业业态续约公示（转载）", url: "https://www.meadin.com/jq/294043.html", role: "确认德克士 2026 续约" }] }
      ]
    },
    {
      id: "meal-d5-dinner", dayId: "day-5", label: "D5｜晚餐 · 西宁", note: "这是整条路线餐饮证据最完整的一餐：三家都来自嬉游正文，其中益鑫、伊然轩又由高德核到同名同址门店。",
      manualNeed: "嬉游评论区未被本地资料保存，微信正文页本次也未能稳定加载评论。若你能看到评论区，请截取涉及这 3 家店的留言，我会再做一次口碑校正。",
      selected: { primary: "d5d-yixin", backup2: "d5d-yiranxuan", backup3: "d5d-shalihai" },
      candidates: [
        { id: "d5d-yixin", sourceTier: "嬉游正文 + 高德", evidenceStatus: "嬉游直接推荐；高德核到同名同址、4.4 分，并进入 2025 指南", name: "清真·益鑫羊肉手抓馆（花园北街店）", category: "清真手抓羊肉", feature: "适合 4 人分食，是本餐首选", classicDishes: ["手抓羊肉，优先胸茬与肋条", "羊肉汤", "青海面食"], base: { location: "花园北街白玉巷 5 号", duration: "60—80 分钟", price: "未获取", hours: "未公开；电话 18797340345" }, platforms: { amap: { score: "4.4", list: "2025 高德指南收录" }, dianping: {} }, routeRelation: "到西宁先停车，再步行或网约车去吃", risk: "国庆晚餐可能排队", condition: "等位不超 30 分钟", repetition: "前几日羊肉多则小份手抓，多点蔬菜", sources: [{ label: "嬉游｜西宁城市美食攻略", url: "https://mp.weixin.qq.com/s/fYcbCQTQLxs-qgvqi4ovpg", role: "直接推荐、菜品与地址" }, { label: "高德｜益鑫羊肉手抓馆", url: "https://www.amap.com/place/B03CB06Q3J", role: "同名同址门店、电话与评分" }] },
        { id: "d5d-yiranxuan", sourceTier: "嬉游正文 + 高德", evidenceStatus: "嬉游明确放在 19:00 晚餐段；高德核到同名同址、4.0 分", name: "清真·伊然轩青海特色美食", category: "炕锅羊排 / 青海菜", feature: "想吃炕锅而非纯手抓时选它", classicDishes: ["炕锅羊排", "土豆、洋葱与饼", "时蔬"], base: { location: "大众街杨家一巷内约 100 米", duration: "60—80 分钟", price: "未获取", hours: "未公开；电话 0971-5319775" }, platforms: { amap: { score: "4.0", list: "2025 高德西宁美食榜 4.74 综合分" }, dianping: {} }, routeRelation: "城东住宿更顺；吃完不再开长途", risk: "国庆等位与营业待核", condition: "益鑫排队过长或团队更想吃炕锅", repetition: "D2 / D4 已吃炕锅则改沙力海", sources: [{ label: "嬉游｜西宁城市美食攻略", url: "https://mp.weixin.qq.com/s/fYcbCQTQLxs-qgvqi4ovpg", role: "19:00 晚餐段直接推荐" }, { label: "高德｜伊然轩", url: "https://www.amap.com/place/B0FFHR14F8", role: "同名同址、电话与评分" }] },
        { id: "d5d-shalihai", sourceTier: "嬉游正文", evidenceStatus: "嬉游直接推荐并给出北大街地址；高德 / 点评具体门店仍待补", name: "沙力海（北大街店）", category: "青海菜 / 清真菜", feature: "菜单更宽，适合降低纯肉比例", classicDishes: ["手抓羊肉", "狗浇尿", "青海面食"], base: { location: "北大街 4 号", duration: "60—80 分钟", price: "未获取", hours: "未获取" }, platforms: { amap: {}, dianping: {} }, routeRelation: "酒店靠城中区时更顺", risk: "具体门店营业尚未由地图核验", condition: "T-1 核到营业且前两家排队", repetition: "本餐只选一家，不跨店打卡", sources: [{ label: "嬉游｜西宁城市美食攻略", url: "https://mp.weixin.qq.com/s/fYcbCQTQLxs-qgvqi4ovpg", role: "直接推荐、菜品与地址" }] }
      ]
    },
    {
      id: "meal-d6-breakfast", dayId: "day-6", label: "D6｜早餐 · 西宁", note: "20:00 航班不再要求清晨离店；可在万达文华酒店或海湖新区从容吃早餐。",
      safetyLocked: false,
      strategy: { title: "酒店早餐或城西本地早餐", detail: "08:00—09:00 完成；若选择市区早餐，先装好行李并保留 11:00 返回酒店的边界。" },
      selected: { primary: "", backup2: "", backup3: "" },
      candidates: [
        { id: "d6b-quaner", sourceTier: "嬉游正文", evidenceStatus: "嬉游给出具体地址、5:00—14:30 与菜品；评论区仍待补", name: "泉儿头杂碎", category: "牛羊杂碎早餐", feature: "开门早、位置在城东，最匹配还车日", classicDishes: ["特色羊杂", "牛杂", "馍馍"], base: { location: "大众街 74 号", duration: "35—50 分钟", price: "嬉游文中招牌羊杂 35 元 / 份", hours: "嬉游资料 05:00—14:30；T-1 再核" }, platforms: { amap: {}, dianping: {} }, routeRelation: "东关大寺后顺路，随后继续向东去机场", risk: "早餐高峰可能排队；文章时段不是 2026 营业承诺", condition: "排队不超 15 分钟", repetition: "前五天未安排杂碎早餐", sources: [{ label: "嬉游｜西宁城市美食攻略", url: "https://mp.weixin.qq.com/s/fYcbCQTQLxs-qgvqi4ovpg", role: "地址、营业参考、菜品与体验" }] },
        { id: "d6b-shendiao", sourceTier: "嬉游正文", evidenceStatus: "嬉游给出旗舰店地址与 6:30—16:00；但位于城西", name: "神雕老字号牦牛大骨汤旗舰店", category: "牦牛大骨汤", feature: "不吃杂碎时的热汤早餐", classicDishes: ["牦牛大骨汤", "大饼", "辣酱和咸菜"], base: { location: "彭家寨镇富兴路 2-30 号", duration: "40—55 分钟", price: "未获取", hours: "嬉游资料 06:30—16:00；T-1 再核" }, platforms: { amap: {}, dianping: {} }, routeRelation: "只适合西侧住宿并在 07:00 前用餐；之后横穿城区去大寺", risk: "明显增加东西向行车", condition: "酒店靠海湖新区 / 彭家寨且 06:30 能入店", repetition: "D4 若吃牦牛大骨头则不选", sources: [{ label: "嬉游｜西宁城市美食攻略", url: "https://mp.weixin.qq.com/s/fYcbCQTQLxs-qgvqi4ovpg", role: "旗舰店、地址、时段与菜品" }] },
        { id: "d6b-xiaoqiao", sourceTier: "嬉游正文", evidenceStatus: "嬉游给出虎台店地址与清晨 6:00 开始；但位于城西", name: "小桥尕晋娃羊肠面（虎台店）", category: "羊肠面", feature: "用时可控、价格低的当地早餐", classicDishes: ["羊肠面"], base: { location: "虎台二巷虎台小区 18 栋", duration: "30—45 分钟", price: "嬉游文中大碗 11 元、小碗 9 元", hours: "嬉游资料清晨 06:00 开始；T-1 再核" }, platforms: { amap: {}, dianping: {} }, routeRelation: "只适合城西住宿并提早出发", risk: "会横穿城区，不适合睡晚", condition: "酒店靠虎台且 06:30 前进店", repetition: "与前几天面食不冲突", sources: [{ label: "嬉游｜西宁城市美食攻略", url: "https://mp.weixin.qq.com/s/fYcbCQTQLxs-qgvqi4ovpg", role: "具体分店、地址、时段与价格" }] }
      ]
    },
    {
      id: "meal-d6-lunch", dayId: "day-6", label: "D6｜早午餐 · 西宁", note: "11:00 返回万达文华后，在酒店周边完成早午餐并于 12:00 前退房。",
      strategy: { title: "海湖新区就近吃，不横穿城区", detail: "优先酒店步行范围内、出餐快的店；排队超过 20 分钟就打包，12:00 开始向机场移动。" },
      manualNeed: "下一步围绕西宁富力万达文华酒店补 3 家 10:30—11:00 可用餐的具体分店。",
      selected: { primary: "", backup2: "", backup3: "" }, candidates: [],
      sources: [{ label: "已预订住宿（隐私化摘录）", url: "", role: "10/1 入住西宁富力万达文华酒店" }]
    },
    {
      id: "meal-d6-dinner", dayId: "day-6", label: "D6｜晚餐 · 曹家堡机场 T3", note: "14:00 还车后距离 20:00 起飞仍有充足时间；值机安检后在 T3 完成提前晚餐。",
      manualNeed: "T-1 从机场小程序或高德补 T3 安检后的具体餐饮列表，选 3 家营业稳定、排队可控的门店。",
      selected: { primary: "", backup2: "", backup3: "" }, candidates: [],
      sources: [{ label: "已出票行程（隐私化摘录）", url: "", role: "GJ8166 20:00 从曹家堡 T3 起飞" }]
    }
  ],

  checks: [
    { id: "check-route", dayId: "day-1", title: "A3 路线与两端航班时刻边界已锁", when: "已完成", verify: "9/27 GJ8165 + MU6517，14:20 抵达茫崖；10/2 GJ8166，20:00 从西宁返回杭州", done: true },
    { id: "check-flight-transfer", dayId: "day-1", title: "确认西宁中转行李是否直挂", when: "现在", verify: "向航司确认 GJ8165 转 MU6517 是否需要提取并重新托运行李；若需要，提前熟悉曹家堡 T3 中转动线", done: false },
    { id: "check-rental", dayId: "day-1", title: "确认茫崖延迟取车与 14:00 还车边界", when: "现在", verify: "去程 14:20 才落地，向茫崖门店书面确认约 15:00—15:30 仍可取车；10/2 继续按订单 14:00 在曹家堡机场 T3 服务点还车", done: false },
    { id: "check-hotels", dayId: "", title: "五晚住宿已锁定", when: "已完成", verify: "美豪酒店（茫崖店）→大柴旦丽呈翠星酒店→德令哈美豪 R→茶卡白兰道→西宁富力万达文华", done: true },
    { id: "check-altitude-medicine", dayId: "", title: "提前网上下单抗高反药品", when: "现在", verify: "先向医生或药师确认适用药物、禁忌和服用时点，再完成下单；收货后核对数量与有效期", done: false },
    { id: "check-energy-gel", dayId: "", title: "带上能量胶", when: "出发前采购，9/26 装车前复核", verify: "按 4 人的实际需要准备并检查保质期；装入随车补给包，长驾日放在方便取用的位置", done: false },
    { id: "check-jack-wine", dayId: "", title: "带上给杰克的酒", when: "9/26 整理行李时", verify: "确认已经装箱；按实际酒精度、容量和承运航司规则核对携带或托运要求，并做好防碎防漏", done: false },
    { id: "check-weather", dayId: "", title: "T-7 天气、道路与国庆管制总复核", when: "2026-09-20", verify: "查茫崖、冷湖、大柴旦、德令哈、茶卡、青海湖、西宁的大风、沙尘、降雪、结冰、施工和 10/1 交通管制", done: false },
    { id: "check-scenic", dayId: "", title: "T-3 逐景区电话复核", when: "2026-09-24", verify: "确认翡翠湖、黑独山、星之谷、托素湖、柏树山、茶卡和二郎剑的入口、营业、停止入园、景交、停车与无人机边界", done: false },
    { id: "check-day2", dayId: "day-2", title: "实算黑独山长驾与补给节点", when: "9/24 与 9/28 06:00", verify: "分别导航花土沟→正式入口→大柴旦；截图施工 / 管制，记录正规加油站、厕所、救援电话和最晚离场", done: false },
    { id: "check-day3", dayId: "day-3", title: "确认星之谷与托素湖当天可达", when: "9/26 与 9/29 07:00", verify: "星之谷停止入园与景交、连接路路况；托素湖正常开放入口和封控。仍执行 14:30 离谷、17:00 前到湖", done: false },
    { id: "check-chaka", dayId: "day-4", title: "购买茶卡可退改票并核末班", when: "2026-09-24", verify: "确认 9/30 门票、景交 / 小火车末班、鞋套、停车和天气退改；官网咨询 0977-8246999、救援 0977-8246699", done: false },
    { id: "check-erlangjian", dayId: "day-5", title: "核二郎剑国庆预约与交通公告", when: "2026-09-24 后每日关注", verify: "只使用正式景区；确认 10/1 预约、停车、运营时间、小火车 / 游船与共和县交通疏导", done: false },
    { id: "check-restaurants", dayId: "", title: "T-1 核餐厅营业并保留替换顺序", when: "每天前一晚", verify: "先复核嬉游 / 评论区候选，再查马蜂窝，最后用大众点评 / 高德核门店、营业与最新评论；长驾日按页面准备路餐", done: false },
    { id: "check-return", dayId: "day-6", title: "返程航班与还车时间已锁定", when: "已完成", verify: "10/2 14:00 还车；GJ8166 20:00 从西宁曹家堡 T3 起飞，23:10 抵达杭州萧山 T3", done: true }
  ]
};
