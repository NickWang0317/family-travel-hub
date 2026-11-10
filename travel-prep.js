/* We maintain this site together in conversation. No booking data is edited here.
   Update known fields only after the user confirms them. See AGENTS.md. */
(() => {
  'use strict';
  const TRIP='FQp6V2';
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const today=()=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  // null = booking status not confirmed; false = explicitly not booked.
  const preparation={
    updatedOn:'2026-11-09',
    outbound:{booked:true,airline:'太陽富國航空 Sun PhuQuoc Airways',number:'9G511',date:'2026-11-11',origin:'桃園機場 TPE（第一航廈）',destination:'富國島機場 PQC',departure:'17:25',arrival:'20:20',cabin:'Economy Lite',passengers:3,baggage:'每位票面 1PC；航空公司官方台灣航線 Economy Lite 規定托運 1 件 23kg、手提 7kg（出發前再確認）',liveBookingStatusConfirmed:null},
    return:{booked:true,airline:'太陽富國航空 Sun PhuQuoc Airways',number:'9G510',date:'2026-11-16',origin:'富國島機場 PQC',destination:'桃園機場 TPE（第一航廈）',departure:'11:20',arrival:'16:00',cabin:'Economy Lite',passengers:3,baggage:'每位票面 1PC；航空公司官方台灣航線 Economy Lite 規定托運 1 件 23kg、手提 7kg（出發前再確認）',liveBookingStatusConfirmed:null},
    'first-hotel':{booked:true,paymentSettled:null,name:'ROSIE SUNSET HOTEL',address:'44 Đường MILAN, An Thoi, 92516 Phú Quốc, Vietnam',phone:'+84 829 506 788',checkin:'2026-11-11',checkout:'2026-11-13',checkinTime:'15:00–23:30（訂房時間）；服務條款另列櫃台最晚 23:00，須向飯店確認',checkoutTime:'05:00–12:00',lateArrivalNoticeConfirmed:null,room:'海景豪華三人房',breakfast:'不含早餐',payment:'僅收現金；免訂金',refund:'訂房確認單顯示可免費取消',costVND:4355656,costTWD:5569,latestBookingConfirmedOn:'2026-11-08',actualCheckinCutoffConfirmed:false,note:'已核對太太轉寄的 Booking.com 正式訂房確認與 PDF：房價 VND 4,355,656（含稅，台幣約價依當時匯率變動）；僅收現金、免訂金，是否已付款仍待核實。飯店曾寄一般歡迎信，但未明確確認 11/11 航班 20:20 抵達後的晚到入住或免費接機安排；飯店名稱含 Free pick-up service 不代表接機已訂。11/08 晚間 Booking.com APP 訂單列表顯示「已確認」，新轉寄確認信與 10/23 變更後內容一致，但住宿條款另外寫櫃台最晚 23:00，與預訂時段 23:30 不一致；必須請住宿方確認延誤時可辦入住。須確認最晚入住與實際接機方式。',sources:[{label:'Booking.com｜ROSIE 住宿介紹',url:'https://www.booking.com/hotel/vn/rosie-sunset.html'},{label:'Google Maps｜ROSIE 路線',url:'https://www.google.com/maps/search/?api=1&query=44+Duong+Milan+An+Thoi+Phu+Quoc'}]},
    resort:{booked:true,paymentSettled:null,name:'WorldHotels Long Beach Resort Phu Quoc',address:'152 Tran Hung Dao Street, Cua Lap Quarter, Duong To, 922200 Phu Quoc, Vietnam',phone:'+84 297 3981 818',checkin:'2026-11-13',checkout:'2026-11-16',checkinTime:'14:00 起',checkoutTime:'12:00 前',room:'私人花園景豪華雙床房',breakfast:'含早餐',refund:'不可退款',costVND:16848000,costTWD:21543,latestBookingConfirmedOn:'2026-11-08',actualBedConfigurationConfirmed:false,childStayWithoutExtraFeeConfirmed:false,babyCot:{requested:true,requestedOn:'2026-10-23',followUpSent:true,followUpSentOn:'2026-11-09',requestChannel:'Booking.com 住宿訊息',confirmed:null,extraFee:null,note:'旅客 10/23 17:24 已在 Booking.com 為 Deluxe Twin Room with Private Garden View 提出加一張供 3 歲孩童使用的嬰兒床要求，APP 顯示「等待住宿方回覆」。後續住宿確認與 10/31 Gemy Kids Zone 郵件未確認提供嬰兒床或加床，仍須請飯店明確回覆適用年齡、是否提供及收費。'},beds:'訂購 Deluxe Twin；網站顯示雙床，11/08 訂房確認信房型描述卻寫 1 張床與最多 2 位成人，同一訂單有 2 大 1 小；需由飯店確認實際床數、3 歲兒童可否不加價入住',airportShuttle:{booked:false,willUse:false,decisionOn:'2026-11-09',requestSent:true,followUpSent:true,followUpSentOn:'2026-11-09',requestChannel:'Booking.com 住宿訊息',requestContent:'旅客曾留言要求 2026/11/16 機場接送，但未指定班次或提供完整旅客／行李／航班資料；飯店僅回覆住宿確認及接駁班表，尚未接受送機預約',includedInBooking:true,advanceHours:48,pickupTimes:'07:30／09:30／11:30／13:30／15:30／17:30／19:30／21:30',dropoffTimes:'08:15／10:15／12:15／14:15／16:15／18:15／20:15',recommended:'11/16 家庭決定不搭 08:15 接駁，改自行叫 Grab；仍以 08:20 前抵達機場為目標',contactEmail:'gro@worldhotelslongbeach.com',contactPhone:'+84 986 590 002'},note:'Booking.com 訂房與 PDF 均確認總價 VND 16,848,000（含稅），約 NT$21,543 僅換算參考。住宿方可能預先扣款，但尚無實際扣款證明；不可退款。11/08 Booking.com APP 列表顯示已確認，轉寄的更新確認信註明來回機場接送包含在房價內，但必須另外安排，仍未預約；同信客房描述出現 1 床、最多 2 位成人，和訂購的 Twin＋2 大 1 小不一致，須請飯店確認床數、孩童入住費用。11/09 旅客提供 Booking.com 住宿對話錄影：已向飯店留言『I need airport transfer at 16/11/2026』，但飯店相鄰回覆僅為住宿預訂確認；後續提供班表和至少 48 小時前提交姓名、人數／行李、WhatsApp、航班號與預選時段的規則。未見飯店確認 08:15 送機班次，不能標為已預約。11/09 旅客表示已再次透過 Booking.com 發送 08:15 送機與嬰兒床兩則補問訊息，等待飯店回覆，尚未收到服務確認。10/31 Gemy Kids Zone 回覆與兩份活動表已於 11/09 收到。11/09 家人決定不搭 08:15 飯店接駁，改自行叫 Grab（尚未預約），飯店只剩嬰兒床／加床等待確認。'},
    resortKids:{
      confirmed:false,reserved:false,officialScheduleReceived:true,scheduleReplyDate:'2026-10-31',scheduleForwardedOn:'2026-11-09',priceNote:'WorldHotels 預訂部 10/31 正式回覆並附 Gemy Kids Zone Daily Activities 與 Daily Recreation Activities 兩份 PDF；以下越南盾金額出自飯店價目表，台幣約價只是匯率換算。兒童服務未預約，住客優惠、資格及實際供應仍待飯店確認。',
      sources:[{label:'Gemy Kids Zone 官方資訊',url:'https://worldhotelslongbeach.com/service/gemy-kids-zone/'},{label:'WorldHotels 聯絡方式',url:'https://worldhotelslongbeach.com/contact-us/'}],
      zone:{name:'Gemy Kids Zone',hours:'09:00～20:00',priceTWD:190,priceVND:150000,maxHours:3,features:'溜滑梯、球池、彈跳床、扮家家酒等',includedInRoom:null},
      craft:{morningHours:'09:00～10:00',morning:'燈籠、斗笠、相框、衣服或提袋彩繪，每項約 NT$177～329',afternoonHours:'14:00～15:00',afternoon:'沙畫約 NT$114、石膏彩繪約 NT$139、拼圖約 NT$177',needsZoneTicket:null,ageAccepted:null},
      childcare:{ages:'3 歲至未滿 6 歲',hours:'10:00～20:00',prices:'1 小時 VND 200,000／2 小時 VND 350,000／3 小時 VND 500,000／4 小時 VND 650,000（原 PDF 正式價）',pricesVND:[200000,350000,500000,650000],reservationRequired:null,includesZoneTicket:null},
      swimming:{minutes:60,priceTWD:253,priceVND:200000,included:'汽水、薯條與 20 分鐘動物浮具使用',acceptsThreeYearOld:null},
      evening:{events:'吉祥物跳舞、兒童才藝舞台等',time:null}
    },
    'island-tour':{booked:false,bookingCheckedOn:'2026-11-09',provider:'KKday',product:'快艇三島一日遊',date:'2026-11-12',meetingTime:'',meetingPoint:'',childJacket:'',returnTime:'約 15:00 回到碼頭（行程規劃）'},
    pickup:{booked:null,provider:'',date:'2026-11-11',time:'',meeting:'',destination:'ROSIE SUNSET HOTEL'},
    'hotel-transfer':{booked:null,provider:'',date:'2026-11-13',time:'',meeting:'ROSIE SUNSET HOTEL',destination:'WorldHotels Long Beach Resort Phu Quoc'},
    dropoff:{booked:null,transportChosen:true,provider:'Grab（當天自行叫車，未預約）',date:'2026-11-16',time:'07:45（建議出發時間，依叫車狀況調整）',meeting:'WorldHotels Long Beach Resort Phu Quoc',destination:'富國島機場 PQC',arrivalGoal:'08:20 抵達機場（目標）',note:'不搭飯店 08:15 免費接駁；自行叫 Grab，7:45 僅為建議出發時間，未預約車輛。'},
    packingNotes:{phoneWaterproofPouch:{needed:true,packed:null,note:'帶手機防水袋，11/12 跳島或泳池、海邊玩水時使用；出發前放進行李。'}},
    cash:{ready:false,usdCashObtained:true,usdCashAmount:1000,usdCashObtainedOn:'2026-11-08',usdCashExtra:100,currency:'美金（USD）／越南盾（VND）',plannedUSD:700,airportExchangeUSD:300,airportTravelUSD:100,phuQuocReserveUSD:600,note:'已於 11/08 領妥 US$1,000 美元現鈔；原先旅費 US$700＋ROSIE 住宿 US$200 共計 US$900 的換匯計畫仍適用，多出的 US$100 作為額外備用。已領美元不等於已換越南盾，越南盾目前仍未確認備妥。桃園機場將 US$300 等值換成越南盾，內含旅費 US$100 和 ROSIE 住宿預備金 US$200；剩餘 US$600 帶到富國島視實際需要分次換盾。US$200 已算在機場 US$300 中，不能額外加算。換匯尚未完成。出發前向桃園機場兆豐確認櫃台可否直接以美元換越南盾、若須台幣結算的換匯方式及現鈔庫存。ROSIE 訂房 PDF 確認應付 VND 4,355,656、僅收現金及免訂金；是否已付款與付款時點仍需確認，11/11 晚間抵達前先確保越南盾足夠。',
      sources:[{label:'兆豐銀行現鈔幣別',url:'https://www.megabank.com.tw/personal/savings/foreign-service/fx-cash'},
        {label:'兆豐最新匯率',url:'https://www.megabank.com.tw/personal/savings/foreign-service/forex'},
        {label:'富國島 Robinson Pearl 地圖',url:'https://www.google.com/maps/search/?api=1&query=Robinson+Pearl+54+Tran+Hung+Dao+Phu+Quoc'}]},
    rosieReserve:{ready:false,reserveUSD:200,currency:'住宿以越南盾（VND）現金支付',note:'ROSIE 11/11–11/13 兩晚住宿獨立預留 US$200，已包含在桃園機場計畫兌換的 US$300 等值越南盾中（另外 US$100 為旅費），不重複另外準備。旅費 US$700＋住宿 US$200＝總預算 US$900，桃園機場換 US$300 等值越南盾＋富國島視需要換 US$600。訂房正式金額 VND 4,355,656（PDF 顯示約 NT$5,569），住宿現金仍未換好，房費是否已支付也待確認。ROSIE 僅收現金，須於入住前準備足夠越南盾並確認付款時點。'},
    mobileData:{ready:true,enabledReported:true,enabledOn:'2026-11-11',enabledQuantity:null,connectionVerified:null,option:'KKday｜Viettel 原生（非漫遊）eSIM・每日高速 5GB・7 天×2 張',purchaseDate:'2026-11-08',startDate:'2026-11-11',days:7,quantity:2,priceTWD:310,note:'已購買 2 張，合計 NT$310；選擇 11/11 使用、7 天有效期，涵蓋 11/11–11/16。11/11 旅客已確認 eSIM 已開啟，完成啟用提醒；未逐一核對兩張的連線狀態及使用張數。QR Code、訂單號及個人資訊不放公開網站。',
      sources:[{label:'KKday Viettel 5G eSIM・含富國島',url:'https://www.kkday.com/zh-tw/product/249518'},
        {label:'航空公司免費 MobiFone eSIM',url:'https://www.sunphuquocairways.com/tw/tw/ticket-info/additional-services/esim-selection'}]},
    travelInsurance:{ready:true,provider:'富邦產險・旅平卡',plan:'國外旅遊適用 300 萬×2＋國外兒童×1',premiumTWD:2045,insuredCount:3,activityDate:'2026-11-12',note:'三人已完成投保。成人每位旅平險 300 萬、傷害醫療 30 萬、海外突發疾病醫療 30 萬；兒童傷害醫療與海外突發疾病醫療各 20 萬。11/12 特定活動三人均已加保，特定活動醫療各 30 萬、緊急救援費用各 10 萬。投保選擇方案計算：成人 NT$636×2＋兒童 NT$326＋特定活動 NT$149×3＝NT$2,045；保單生效時間、法定傳染病及活動承保條件均以正式保單／條款為準。'},
    audit:{checkedOn:'2026-11-08',source:'已連結兩個 Gmail，核對太太轉寄訂房 PDF 與 23:45 再轉寄的兩封更新信；另檢視 Booking.com APP 訂單列表 11/08 同時顯示兩筆已確認；原始訂房 Gmail 尚未直接連結',liveFlightBookingVerified:false,liveHotelsVerified:true,passportNamesAndExpiryVerified:true,passportVerificationSource:'旅客於 2026-11-09 口頭確認三人護照效期與英文姓名均已核對',islandTourVoucherVerified:false,airportPickupVerified:false,returnShuttleVerified:false,hotelPaymentsVerified:false,note:'電子機票三人均已開票且原票面 OK，兩間住宿有正式訂房確認；Booking.com APP 11/08 兩筆住宿均顯示已確認，最新轉寄的兩封更新信與訂房 PDF 日期金額一致；這個「訂房更改成功」指 10/23 變更，不是 11/08 再次改單。航空最新訂位狀態仍未在航空管理頁核對，原始信箱仍可能有未轉寄的通知。ROSIE 23:00 與 23:30 截止時間矛盾，WorldHotels 床數／孩童入住條款需問飯店。'},
    costs:{airfareTWD:17847,firstHotelTWD:5569,resortTWD:21543,totalTWD:44959,note:'三人往返機票 NT$17,847 為電子票據金額；ROSIE 與 WorldHotels 訂房憑證顯示總價分別 VND 4,355,656、VND 16,848,000，換算約 NT$5,569、NT$21,543。NT$44,959 為以上加總的台幣參考值，不代表兩筆住宿均已付款；未含跳島、接送、餐飲及購物。'}
  };
  const definitions=[
    {id:'outbound',group:'飛行',icon:'↗',title:'去程機票',bookingLabel:'是否已訂票',hint:'9G511｜11/11 桃園 17:25 → 富國島 20:20（兩地當地時間）。',fields:[['airline','航空公司'],['number','航班號'],['date','出發日期'],['origin','出發機場'],['destination','抵達機場'],['departure','起飛時間'],['arrival','抵達時間']]},
    {id:'return',group:'飛行',icon:'↙',title:'回程機票',bookingLabel:'是否已訂票',hint:'9G510｜11/16 富國島 11:20 → 桃園 16:00（兩地當地時間）。',fields:[['airline','航空公司'],['number','航班號'],['date','出發日期'],['origin','出發機場'],['destination','抵達機場'],['departure','起飛時間'],['arrival','抵達時間']]},
    {id:'first-hotel',group:'住宿',icon:'01',title:'ROSIE｜晚到入住待確認',bookingLabel:'是否已訂房',hint:'訂房 PDF 已確認地址 44 Đường MILAN、入住 15:00–23:30、現金房價 VND 4,355,656。僅剩晚到通知、接機安排及付款狀態待確認。',fields:[['name','飯店名稱'],['address','訂房確認地址'],['phone','住宿電話'],['checkin','入住日期'],['checkout','退房日期'],['checkinTime','正式入住時段']]},
    {id:'resort',group:'住宿',icon:'02',title:'WorldHotels｜11/13–11/16',bookingLabel:'是否已訂房',hint:'已訂三晚、不可退款、含早餐；11/16 回程不搭飯店 08:15 免費接駁，改自行叫 Grab（尚未叫車）。嬰兒床／加床仍待飯店回覆。',fields:[['name','飯店名稱'],['address','飯店地址'],['phone','飯店電話'],['checkin','入住日期'],['checkout','退房日期'],['checkinTime','可入住時間']]},
    {id:'resortKids',group:'親子活動',icon:'☆',title:'WorldHotels｜兒童服務待確認',completionField:'confirmed',bookingLabel:'是否已向飯店核對兒童服務',hint:'Gemy Kids Zone、手作、托育、泳課及晚間表演尚未預約；住房是否免費入場、年齡資格、門票與時間需向飯店確認。台幣費用僅約價。',fields:[]},
    {id:'island-tour',group:'活動',icon:'03',title:'11/12 KKday 快艇三島',bookingLabel:'是否已訂購',hint:'11/09 旅客確認尚未預訂。活動仍為暫定；購買前確認是否接受 3 歲兒童、合身救生衣、集合時間及地點。',fields:[['provider','活動平台'],['product','行程名稱'],['date','活動日期'],['meetingTime','集合時間'],['meetingPoint','集合地點'],['childJacket','兒童救生衣尺寸／適用條件']]},
    {id:'pickup',group:'交通',icon:'→',title:'11/11 機場 → ROSIE',bookingLabel:'接機是否已確認',hint:'晚間抵達，確認接機方式、集合點與延誤聯絡方式。',fields:[['provider','接送方式／業者'],['date','接送日期'],['time','碰面時間'],['meeting','碰面地點'],['destination','目的地']]},
    {id:'hotel-transfer',group:'交通',icon:'↔',title:'11/13 ROSIE → WorldHotels',bookingLabel:'飯店間交通是否已安排',hint:'日落小鎮散步和午餐原規劃至約 14:30；之後回 ROSIE 取行李再前往 WorldHotels。轉飯店交通尚待安排，午睡依實際入住時間彈性調整。',fields:[['provider','接送方式／業者'],['date','接送日期'],['time','移動時間'],['meeting','出發地點'],['destination','目的地']]},
    {id:'dropoff',group:'交通',icon:'←',title:'11/16 Grab → 富國島機場',bookingLabel:'當天是否已叫到 Grab',hint:'家人決定 08:15 飯店接駁太晚，改自行叫 Grab；建議約 07:45 出發、08:20 前抵達機場。Grab 尚未預約，不再等待飯店送機確認。',fields:[['provider','接送方式／業者'],['date','接送日期'],['time','出發時間'],['meeting','上車地點'],['destination','目的地']]},
    {id:'cash',group:'行前準備',icon:'₫',title:'US$1,000 已領｜越南盾待換',completionField:'ready',bookingLabel:'越南盾是否已換妥',hint:'已領美元 US$1,000，原規劃支用 US$900（含 ROSIE US$200），額外 US$100 備用；仍須將足夠金額換成越南盾支付 ROSIE。',fields:[['currency','幣別'],['usdCashAmount','已領美元現鈔（USD）'],['plannedUSD','旅費美元預算（不含住宿）'],['airportExchangeUSD','桃園機場預計換盾（含 ROSIE）'],['airportTravelUSD','機場換盾中的旅費部分'],['phuQuocReserveUSD','帶至富國島待換的美元']]},
    {id:'rosieReserve',group:'行前準備',icon:'₫',title:'ROSIE 住宿現金（含在機場 US$300）',completionField:'ready',bookingLabel:'是否已準備住宿現金',hint:'住宿預備金 US$200 已包含在桃園機場 US$300 的換盾計畫，並非另外再加 US$200；訂房 PDF 應付 VND 4,355,656，付款仍待確認。',fields:[['reserveUSD','機場換盾中的住宿部分'],['currency','實際付款幣別提醒']]},
    {id:'mobileData',group:'行前準備',icon:'▣',title:'Viettel eSIM｜已購買，已開啟',completionField:'ready',bookingLabel:'是否已買網卡',hint:'兩張 KKday Viettel eSIM 已購買，每日 5GB × 7 天，共 NT$310；11/11 旅客確認已開啟。未逐一確認兩張連線狀態。',fields:[['option','上網方案'],['startDate','開始使用日期'],['quantity','張數'],['priceTWD','費用（NT$）']]},
    {id:'travelInsurance',group:'行前準備',icon:'✚',title:'富邦旅平卡｜三人已投保',completionField:'ready',bookingLabel:'旅平險是否已投保',hint:'兩位大人＋一位兒童均已投保，11/12 特定活動加保三人；總保費依所選方案合計 NT$2,045。',fields:[['provider','保險公司'],['plan','投保方案'],['premiumTWD','保費合計（NT$）']]}
  ];
  let showComplete=false,feedback='',copyFallback='';
  const completionValue=d=>d.id==='rosieReserve'&&preparation['first-hotel'].paymentSettled===true?true:preparation[d.id][d.completionField||'booked'];
  const missing=d=>[...(completionValue(d)===true?[]:[d.bookingLabel]),...d.fields.filter(([key])=>!preparation[d.id][key]).map(([,label])=>label),...(d.id==='first-hotel'&&preparation['first-hotel'].lateArrivalNoticeConfirmed!==true?['飯店回覆確認 11/11 晚到入住方式']:[])];
  const pending=()=>definitions.filter(d=>missing(d).length);
  const status=d=>d.id==='dropoff'&&preparation.dropoff.transportChosen?'已決定自行叫 Grab（未預約）':missing(d).length===0?'資料已收好':d.completionField?(completionValue(d)===false?'尚未完成':'待確認是否完成'):preparation[d.id].booked===true?'已訂，待補資訊':preparation[d.id].booked===false?'待安排':'訂購／安排狀態待確認';
  const shortDate=value=>value?value.slice(5).replace('-','/'):'待確認';
  const remaining=()=>Math.ceil((Date.parse(preparation.outbound.date+'T00:00:00Z')-Date.parse(today()+'T00:00:00Z'))/86400000);
  function promptFor(id) {
    const tasks=id==='all'?pending():definitions.filter(d=>d.id===id);
    return '請幫我更新富國島旅行網站。\n'+tasks.map(d=>'\n【'+d.title+'】\n'+missing(d).map(label=>label+'：').join('\n')).join('\n')+'\n\n我提供的資料請更新到網站，已確認的項目請移出待補提醒。';
  }
  function summary() {
    if(preparation.return.date<today())return '';
    const tasks=pending(),url=preparation.outbound.date<=today()?'?t='+TRIP+'#prep-heading':'#upcoming';
    return '<aside class="prep-nudge"><span class="prep-nudge-icon" aria-hidden="true">↗</span><div><span class="prep-eyebrow">我們的下一趟 · 富國島</span><strong>'+(tasks.length?'還有 '+tasks.length+' 件事，等我們一起補齊。':'資料都收好了，出發前再看一眼。')+'</strong><p>訂好機票、飯店或接送後，告訴我，我幫你更新網站。</p></div><a href="'+url+'" class="prep-button">看看還缺什麼 ↗</a></aside>';
  }
  function mission(d) {
    const item=preparation[d.id],gaps=missing(d),done=!gaps.length;
    const known=d.fields.filter(([key])=>item[key]);
    const resources=(item.sources||[]).filter(source=>/^https:\/\//.test(source.url||''))
      .map(source=>'<a href="'+esc(source.url)+'" target="_blank" rel="noopener noreferrer">'+esc(source.label)+' ↗</a>').join('');
    const resourceLinks=resources?'<div class="overview-task-links" aria-label="已查證資訊來源">'+resources+'</div>':'';
    return '<article class="prep-mission '+(done?'is-complete':'')+'"'+(done&&!showComplete?' hidden':'')+'><div class="prep-mission-top"><span class="prep-mission-symbol" aria-hidden="true">'+d.icon+'</span><span class="prep-tag">'+d.group+'</span><span class="prep-status">'+esc(status(d))+'</span></div><h3>'+esc(d.title)+'</h3><p class="prep-hint">'+esc(done?'這張卡的資料已收好，完整安排在下方行程。':d.hint)+'</p>'+resourceLinks+'<div class="prep-snippets">'+known.slice(0,3).map(([key])=>'<span>'+esc(item[key])+'</span>').join('')+'</div>'+(gaps.length?'<div class="prep-missing"><span class="prep-eyebrow">下一次，記得告訴我</span><p>'+gaps.map(esc).join('、')+'</p></div>':'<p class="prep-reminder">✓ 資料已確認</p>')+'<details><summary>目前已記下的資訊 <span aria-hidden="true">＋</span></summary><dl class="prep-known">'+'<div><dt>'+(d.completionField?'完成狀態':'訂購／安排')+'</dt><dd>'+esc(completionValue(d)===true?'已確認':completionValue(d)===false?'尚未完成':'待你確認')+'</dd></div>'+known.map(([key,label])=>'<div><dt>'+esc(label)+'</dt><dd>'+esc(item[key])+'</dd></div>').join('')+'</dl></details>'+(gaps.length?'<button type="button" class="prep-card-copy" data-prep-copy="'+d.id+'">複製這張卡的待補清單 ↗</button>':'')+'</article>';
  }
  function board() {
    const tasks=pending(),complete=definitions.length-tasks.length,next=tasks[0],days=remaining();
    const during=preparation.return.date>=today();
    const countdown=days>0?'<strong>'+days+'</strong><span>天後出發</span>':days===0?'<strong class="prep-word">今天</strong><span>出發日</span>':'<strong class="prep-word">'+(during?'旅途中':'收好回憶')+'</strong><span>把安排留在手邊</span>';
    return '<section class="prep-board" aria-labelledby="prep-heading"><div class="prep-ticket"><div class="prep-ticket-copy"><p class="prep-eyebrow">OUR FAMILY TRAVEL CLUB · 兩大一小</p><h1 id="prep-heading">先把小事收好，<br>再去慢慢看海。</h1><p class="prep-lead">你告訴我新的安排，我把它整理進網站。<br class="prep-desktop-break">這裡提醒我們，下一件要補的是什麼。</p><div class="prep-route"><span>我們家</span><span class="prep-route-line" aria-hidden="true">········ ↗ ········</span><strong>PHU QUOC</strong></div><p class="prep-ticket-date">'+esc(preparation.outbound.date.replaceAll('-','.'))+' — '+esc(preparation.return.date.replaceAll('-','.'))+'</p></div><div class="prep-ticket-stub"><div class="prep-island" aria-hidden="true"><span class="prep-sun"></span><span class="prep-shore"></span><span class="prep-wave"></span></div><div class="prep-countdown">'+countdown+'</div><div class="prep-barcode" aria-hidden="true"></div><span class="prep-stub-caption">TAKE IT SLOW / 6 DAYS</span></div></div><div class="prep-progress"><div><span class="prep-eyebrow">資料收集進度</span><strong>'+complete+' / '+definitions.length+' 張已收好</strong></div><div class="prep-progress-track" role="progressbar" aria-label="旅行資料收集進度" aria-valuemin="0" aria-valuemax="'+definitions.length+'" aria-valuenow="'+complete+'"><span style="width:'+(complete/definitions.length*100)+'%"></span></div><span class="prep-progress-note">訂好只是第一步，資料齊了才收好。</span></div><div class="prep-next"><span class="prep-next-dot" aria-hidden="true"></span><div><span class="prep-eyebrow">下一次聊旅程，先補這件</span><h2>'+(next?esc(next.title):'資料都收好了。')+'</h2><p>'+(next?'請告訴我：'+missing(next).map(esc).join('、')+'。':'出發前再核對一次時間與接送。')+'</p></div>'+(next?'<button type="button" class="prep-button" data-prep-copy="'+next.id+'">複製要告訴我的資料 ↗</button>':'')+'</div><div class="prep-section-heading"><div><p class="prep-eyebrow">LITTLE DETAILS, A BETTER JOURNEY</p><h2>還缺的，放在這裡。</h2></div><button type="button" class="prep-text-button" data-show-complete>'+ (showComplete?'收起已收好':'查看已收好（'+complete+'）')+'</button></div><div class="prep-missions">'+definitions.map(mission).join('')+'</div><div class="prep-conversation"><span class="prep-conversation-mark" aria-hidden="true">↗</span><div><strong>這趟旅行，我們一邊聊、一邊完成。</strong><p>直接在對話裡告訴我新安排，或把訂票、訂房資訊給我。我會更新這些提醒，也把已確認的資料放進下方行程。</p><span class="prep-updated">資料整理至 '+esc(preparation.updatedOn.replaceAll('-','/'))+'</span></div><button type="button" class="prep-button prep-button-light" data-prep-copy="all">複製全部待補清單</button></div><p id="prep-feedback" class="prep-feedback" role="status" aria-live="polite">'+esc(feedback)+'</p>'+(copyFallback?'<div class="prep-copy-fallback"><p>可選取下方清單，複製到我們的對話。</p><pre>'+esc(copyFallback)+'</pre></div>':'')+'<div class="prep-follow-heading"><span>↓</span><div><h2>資訊收好後，開著就能跟著走。</h2><p>航班、住宿與接送直接列在下面；未確認的安排會清楚標示。</p></div></div></section>';
  }
  const mapLink=address=>address?[{label:'導航',href:'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(address)}]:[];
  function flight(d) {
    const item=preparation[d.id];
    return [status(d),item.airline,item.number,item.origin&&item.destination?item.origin+' → '+item.destination:'機場資訊待補',item.departure?'起飛 '+item.departure:'起飛時間待補',item.arrival?'抵達 '+item.arrival:'抵達時間待補'].filter(Boolean).join(' · ');
  }
  function withUpdates(trip) {
    if(trip.id!==TRIP)return {...trip,label:trip.label==='今天'&&trip.start!==today()?'待回填':trip.label};
    const out=preparation.outbound,back=preparation.return;
    const kids=preparation.resortKids;
    const hotel=(id,label,order)=>{
      const item=preparation[id],d=definitions.find(x=>x.id===id);
      return {date:item.checkin,endDate:new Date(Date.parse(item.checkout+'T12:00:00Z')-86400000).toISOString().slice(0,10),
        order,time:id==='resort'?'實際抵達時間待確認':item.checkinTime||'晚上',title:label+'｜'+(item.name||'住宿待安排'),
        desc:[item.booked===true?'已訂房':status(d),item.room,item.breakfast,item.payment,id==='first-hotel'?(item.paymentSettled===true?'房費已支付':item.paymentSettled===false?'房費尚未付款':'房費付款狀態待確認'):'',item.refund,item.checkinTime?'入住 '+item.checkinTime:'入住時間待確認',id==='first-hotel'?'晚到入住後休息':''].filter(Boolean).join(' · '),
        place:item.name||'',links:mapLink(item.name||item.address),...(id==='resort'?{photo:"https://worldhotelslongbeach.com/wp-content/uploads/2026/08/WorldHotels-Long-Beach-Resort-Phu-Quoc-Overview-8.jpg",photoLabel:"WorldHotels 官網刊登的度假村外觀（入住時間仍待交通確認）",photoSource:"https://worldhotelslongbeach.com/",photoKind:"official",photoCredit:"WorldHotels 官網"}:{})};
    };
    const transfer=(id,title,order)=>{
      const item=preparation[id],d=definitions.find(x=>x.id===id);
      const fromPlace=id==='pickup'?'Phu Quoc International Airport':id==='hotel-transfer'?preparation['first-hotel'].name:id==='dropoff'?preparation.resort.name:'';
      const toPlace=id==='dropoff'?'Phu Quoc International Airport':item.destination||'';
      return {date:item.date,order,time:item.time||'時間待確認',title,kind:'transfer',travelMode:'driving',
        desc:[status(d),item.provider||'交通方式待確認',item.meeting?'出發／集合：'+item.meeting:'集合地點待確認',item.destination?'前往：'+item.destination:'目的地待確認',item.arrivalGoal].filter(Boolean).join(' · '),
        fromPlace,place:toPlace,links:mapLink(toPlace)};
    };
    const stops=[
      ...(trip.dailyPlans||[]),
      {date:out.date,order:60,time:out.arrival,title:'抵達富國島｜9G511',kind:'flight',
        desc:flight(definitions[0]),place:'Phu Quoc International Airport'},
      transfer('pickup','機場接機｜前往 ROSIE',70),
      hotel('first-hotel','入住前兩晚飯店',80),
      transfer('hotel-transfer','取行李後前往 WorldHotels',45),
      hotel('resort','入住後三晚渡假村',55),
      transfer('dropoff','自行叫 Grab｜前往機場',30),
      {date:back.date,order:50,time:back.departure,title:'9G510｜從富國島起飛',kind:'flight',
        desc:flight(definitions[1]),place:'Phu Quoc International Airport'}
    ].sort((a,b)=>a.date===b.date?(Number(a.order||50)-Number(b.order||50)):String(a.date).localeCompare(String(b.date)));
    return {...trip,start:out.date,end:back.date,timeZone:'Asia/Ho_Chi_Minh',
      summary:'11/11–11/16 富國島 6 天 5 夜。機票、護照、兩間住宿、旅平險已確認；eSIM 已開啟、US$1,000 已領。11/16 回程改自行叫 Grab（未預約），飯店僅剩嬰兒床／加床待回覆；仍須換越南盾、決定 11/12 跳島，並帶手機防水袋。',
      stops,
      details:[
        {title:'行程與費用速記',intro:'機票、護照、兩間飯店、旅平險均已確認；eSIM 已開啟（兩張均已購買）。越南比台灣慢 1 小時。',bullets:[
          '三人機票 NT$17,847＋ROSIE 2 晚約 NT$5,569＋WorldHotels 3 晚約 NT$21,543，合計約 NT$44,959；住宿台幣金額是換算參考，不等於已付款。',
          '11/11 晚間抵達後搭車前往 ROSIE；11/13 換飯店當天午睡彈性安排；11/16 回程約 07:45 自行叫 Grab 前往機場（未預約）。若去程航班大幅延誤，再通知 ROSIE。'
        ]},
        {id:'trip-kids',title:'WorldHotels｜兒童活動',intro:'飯店正式活動價目表已收到；僅是可選活動，尚未預約。',bullets:[
          'Gemy Kids Zone：每次 VND '+Number(kids.zone.priceVND).toLocaleString('en-US')+'，最多 3 小時；住客是否有優惠待確認。',
          '手作：上午 '+kids.craft.morningHours+'、下午 '+kids.craft.afternoonHours+'；遇到午睡可略過。',
          '3～未滿 6 歲托育：每小時 VND 200,000 起；兒童游泳課 60 分鐘 VND 200,000。適齡與預約以飯店回覆為準。'
        ]}
      ],
      checklistIds:['cash-v48','worldhotels-cot-v50','tour-v48','waterproof-pouch-v50'],
      checklist:[
        '換越南盾：US$1,000 已領；ROSIE 兩晚須以現金付 VND '+Number(preparation['first-hotel'].costVND).toLocaleString('en-US')+'。',
        '等 WorldHotels 回覆：只剩 11/13～11/16 嬰兒床／加床；11/16 送機改自行叫 Grab，不搭 08:15 飯店接駁。',
        '11/12 跳島尚未購買；決定參加再確認 3 歲兒童資格和救生衣。',
        '帶手機防水袋：出發前放入行李，跳島／泳池／海邊玩水時可用。'
      ]};
  }
  document.addEventListener('click',async event=>{
    if(event.target.closest('[data-show-complete]')){showComplete=!showComplete;document.dispatchEvent(new CustomEvent('travel-prep:updated'));return;}
    const button=event.target.closest('[data-prep-copy]');if(!button)return;
    const text=promptFor(button.dataset.prepCopy);
    try{await navigator.clipboard.writeText(text);feedback='清單已複製。貼到我們的對話，再補上你知道的資料就可以。';copyFallback='';const live=document.getElementById('prep-feedback');if(live)live.textContent=feedback;}
    catch{feedback='複製未成功，已展開可手動複製的清單。';copyFallback=text;document.dispatchEvent(new CustomEvent('travel-prep:updated'));document.querySelector('.prep-copy-fallback')?.scrollIntoView({block:'center',behavior:'auto'});}
  });
  window.TravelPrep={tripId:TRIP,summary,board,withUpdates,getPreparation:()=>JSON.parse(JSON.stringify(preparation))};
})();
