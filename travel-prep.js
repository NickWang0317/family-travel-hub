/* We maintain this site together in conversation. No booking data is edited here.
   Update known fields only after the user confirms them. See AGENTS.md. */
(() => {
  'use strict';
  const TRIP='FQp6V2';
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const today=()=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  // null = booking status not confirmed; false = explicitly not booked.
  const preparation={
    updatedOn:'2026-10-27',
    outbound:{booked:true,airline:'太陽富國航空 Sun PhuQuoc Airways',number:'9G511',date:'2026-11-11',origin:'桃園機場 TPE（第一航廈）',destination:'富國島機場 PQC',departure:'17:25',arrival:'20:20'},
    return:{booked:true,airline:'太陽富國航空 Sun PhuQuoc Airways',number:'9G510',date:'2026-11-16',origin:'富國島機場 PQC',destination:'桃園機場 TPE（第一航廈）',departure:'11:20',arrival:'16:00'},
    'first-hotel':{booked:true,name:'ROSIE SUNSET HOTEL',address:'',checkin:'2026-11-11',checkout:'2026-11-13',checkinTime:'',lateArrivalNoticeConfirmed:null,room:'海景豪華三人房',breakfast:'不含早餐',payment:'僅收現金',costTWD:5496},
    resort:{booked:true,name:'WorldHotels Long Beach Resort Phu Quoc',address:'152 Tran Hung Dao Street, Cua Lap Quarter, Duong To, Phu Quoc',checkin:'2026-11-13',checkout:'2026-11-16',checkinTime:'14:00 起',room:'私人花園景豪華雙床房',breakfast:'含早餐',refund:'不可退款',costTWD:21258},
    'island-tour':{booked:null,provider:'KKday',product:'快艇三島一日遊',date:'2026-11-12',meetingTime:'',meetingPoint:'',childJacket:'',returnTime:'約 15:00 回到碼頭（行程規劃）'},
    pickup:{booked:null,provider:'',date:'2026-11-11',time:'',meeting:'',destination:'ROSIE SUNSET HOTEL'},
    'hotel-transfer':{booked:null,provider:'',date:'2026-11-13',time:'',meeting:'ROSIE SUNSET HOTEL',destination:'WorldHotels Long Beach Resort Phu Quoc'},
    dropoff:{booked:null,provider:'',date:'2026-11-16',time:'',meeting:'WorldHotels Long Beach Resort Phu Quoc',destination:'富國島機場 PQC',arrivalGoal:'08:20 抵達機場（目標）'},
    cash:{ready:false,currency:'越南盾（VND）',note:'ROSIE SUNSET HOTEL 僅收現金；換匯金額與地點尚待決定。'},
    mobileData:{ready:false,option:'越南網卡／eSIM',note:'購買前確認手機相容的 SIM／eSIM 形式、使用天數及抵達後啟用方式。'},
    costs:{airfareTWD:18000,firstHotelTWD:5496,resortTWD:21258,totalTWD:44754,note:'機票與住宿參考合計；未含跳島、接送、餐飲及購物。住宿以越南盾及實際匯率結算。'}
  };
  const definitions=[
    {id:'outbound',group:'飛行',icon:'↗',title:'去程機票',bookingLabel:'是否已訂票',hint:'9G511｜11/11 桃園 17:25 → 富國島 20:20（兩地當地時間）。',fields:[['airline','航空公司'],['number','航班號'],['date','出發日期'],['origin','出發機場'],['destination','抵達機場'],['departure','起飛時間'],['arrival','抵達時間']]},
    {id:'return',group:'飛行',icon:'↙',title:'回程機票',bookingLabel:'是否已訂票',hint:'9G510｜11/16 富國島 11:20 → 桃園 16:00（兩地當地時間）。',fields:[['airline','航空公司'],['number','航班號'],['date','出發日期'],['origin','出發機場'],['destination','抵達機場'],['departure','起飛時間'],['arrival','抵達時間']]},
    {id:'first-hotel',group:'住宿',icon:'01',title:'ROSIE｜晚到入住與資訊',bookingLabel:'是否已訂房',hint:'已訂兩晚；請提前告知航班 20:20 抵達，並確認晚到入住、飯店地址與現金付款。',fields:[['name','飯店名稱'],['address','飯店地址'],['checkin','入住日期'],['checkout','退房日期'],['checkinTime','可入住與晚到方式']]},
    {id:'resort',group:'住宿',icon:'02',title:'WorldHotels｜11/13–11/16',bookingLabel:'是否已訂房',hint:'已訂三晚，14:00 起可入住；午餐後轉飯店讓孩子午睡。',fields:[['name','飯店名稱'],['address','飯店地址'],['checkin','入住日期'],['checkout','退房日期'],['checkinTime','可入住時間']]},
    {id:'island-tour',group:'活動',icon:'03',title:'11/12 KKday 快艇三島',bookingLabel:'是否已訂購',hint:'尚未確認訂購；確認集合時間、地點、3 歲半兒童參加條件與合身救生衣。',fields:[['provider','活動平台'],['product','行程名稱'],['date','活動日期'],['meetingTime','集合時間'],['meetingPoint','集合地點'],['childJacket','兒童救生衣尺寸／適用條件']]},
    {id:'pickup',group:'交通',icon:'→',title:'11/11 機場 → ROSIE',bookingLabel:'接機是否已確認',hint:'晚間抵達，確認接機方式、集合點與延誤聯絡方式。',fields:[['provider','接送方式／業者'],['date','接送日期'],['time','碰面時間'],['meeting','碰面地點'],['destination','目的地']]},
    {id:'hotel-transfer',group:'交通',icon:'↔',title:'11/13 ROSIE → WorldHotels',bookingLabel:'飯店間交通是否已安排',hint:'建議午餐後取行李並出發，14:00 起可入住後優先安排午覺。',fields:[['provider','接送方式／業者'],['date','接送日期'],['time','移動時間'],['meeting','出發地點'],['destination','目的地']]},
    {id:'dropoff',group:'交通',icon:'←',title:'11/16 WorldHotels → 機場',bookingLabel:'送機是否已確認',hint:'以當地時間 08:20 抵達 PQC 為目標，實際飯店出發時間依交通確認。',fields:[['provider','接送方式／業者'],['date','接送日期'],['time','出發時間'],['meeting','上車地點'],['destination','目的地']]},
    {id:'cash',group:'行前準備',icon:'₫',title:'換越南盾｜現金',completionField:'ready',bookingLabel:'是否已換錢',hint:'出發前準備越南盾；ROSIE 僅收現金，兌換金額與地點尚未決定。',fields:[['currency','幣別']]},
    {id:'mobileData',group:'行前準備',icon:'▣',title:'購買越南網卡／eSIM',completionField:'ready',bookingLabel:'是否已買網卡',hint:'尚未購買；依手機支援狀況選 SIM 或 eSIM，核對使用天數及開通方式。',fields:[['option','上網形式']]}
  ];
  let showComplete=false,feedback='',copyFallback='';
  const completionValue=d=>preparation[d.id][d.completionField||'booked'];
  const missing=d=>[...(completionValue(d)===true?[]:[d.bookingLabel]),...d.fields.filter(([key])=>!preparation[d.id][key]).map(([,label])=>label)];
  const pending=()=>definitions.filter(d=>missing(d).length);
  const status=d=>missing(d).length===0?'資料已收好':d.completionField?(completionValue(d)===false?'尚未完成':'待確認是否完成'):preparation[d.id].booked===true?'已訂，待補資訊':preparation[d.id].booked===false?'待安排':'訂購／安排狀態待確認';
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
    return '<article class="prep-mission '+(done?'is-complete':'')+'"'+(done&&!showComplete?' hidden':'')+'><div class="prep-mission-top"><span class="prep-mission-symbol" aria-hidden="true">'+d.icon+'</span><span class="prep-tag">'+d.group+'</span><span class="prep-status">'+esc(status(d))+'</span></div><h3>'+esc(d.title)+'</h3><p class="prep-hint">'+esc(done?'這張卡的資料已收好，完整安排在下方行程。':d.hint)+'</p><div class="prep-snippets">'+known.slice(0,3).map(([key])=>'<span>'+esc(item[key])+'</span>').join('')+'</div>'+(gaps.length?'<div class="prep-missing"><span class="prep-eyebrow">下一次，記得告訴我</span><p>'+gaps.map(esc).join('、')+'</p></div>':'<p class="prep-reminder">✓ 資料已確認</p>')+'<details><summary>目前已記下的資訊 <span aria-hidden="true">＋</span></summary><dl class="prep-known">'+'<div><dt>'+(d.completionField?'完成狀態':'訂購／安排')+'</dt><dd>'+esc(completionValue(d)===true?'已確認':completionValue(d)===false?'尚未完成':'待你確認')+'</dd></div>'+known.map(([key,label])=>'<div><dt>'+esc(label)+'</dt><dd>'+esc(item[key])+'</dd></div>').join('')+'</dl></details>'+(gaps.length?'<button type="button" class="prep-card-copy" data-prep-copy="'+d.id+'">複製這張卡的待補清單 ↗</button>':'')+'</article>';
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
    const hotel=(id,label,order)=>{
      const item=preparation[id],d=definitions.find(x=>x.id===id);
      return {date:item.checkin,endDate:new Date(Date.parse(item.checkout+'T12:00:00Z')-86400000).toISOString().slice(0,10),
        order,time:item.checkinTime||'晚上',title:label+'｜'+(item.name||'住宿待安排'),
        desc:[item.booked===true?'已訂房':status(d),item.room,item.breakfast,item.payment,item.refund,item.checkinTime?'入住 '+item.checkinTime:'入住時間待確認',id==='first-hotel'?'晚到入住後休息':''].filter(Boolean).join(' · '),
        place:item.name||'',links:mapLink(item.name||item.address)};
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
      transfer('dropoff','飯店出發｜前往機場',30),
      {date:back.date,order:50,time:back.departure,title:'9G510｜從富國島起飛',kind:'flight',
        desc:flight(definitions[1]),place:'Phu Quoc International Airport'}
    ].sort((a,b)=>a.date===b.date?(Number(a.order||50)-Number(b.order||50)):String(a.date).localeCompare(String(b.date)));
    const tasks=pending();
    return {...trip,start:out.date,end:back.date,timeZone:'Asia/Ho_Chi_Minh',
      summary:'兩大一小，11/11–11/16 富國島 6 天 5 夜。機票及兩間飯店已訂，11/12 跳島與三段交通仍待確認；玩樂、午覺與飯店休息優先。',
      stops,
      details:[
        {title:'旅行節奏與時區',intro:'航班時間依出發及抵達機場當地時間；越南比台灣慢 1 小時。',bullets:['11/12 快艇三島列入規劃，尚未確認訂購與兒童安全裝備。','11/13 午餐後轉 WorldHotels；14:00 起入住，優先讓孩子午睡。','11/14 夜市與 11/15 晚間活動視體力和天氣彈性調整。']},
        {title:'已訂花費（新台幣參考）',intro:'合計約 NT$44,754；未含跳島、接送、餐飲、購物。',bullets:['9G511／9G510 來回機票（2 大 1 小）約 NT$18,000。','ROSIE 2 晚約 NT$5,496；不含早餐、僅收現金。','WorldHotels 3 晚約 NT$21,258；含早餐、不可退款。','住宿金額為換算參考，以越南盾結算及實際匯率為準。']},
        {title:'行前仍需確認',intro:'已確認的機票及住宿不再列為未訂。',bullets:tasks.length?tasks.map(d=>d.title+'：'+missing(d).join('、')):['已列出的八項確認卡都已完成。']}
      ],
      checklist:['11/12 快艇三島訂購與兒童合身救生衣確認','11/11 接機與 ROSIE 晚到入住通知','11/13 兩飯店間交通','11/16 08:20 到機場的送機安排','孩子備用衣物與午睡用品','出發前換越南盾（ROSIE 僅收現金）','購買越南網卡／eSIM，確認手機可使用及開通方式']};
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
