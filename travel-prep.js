/* We maintain this site together in conversation. No booking data is edited here.
   Update known fields only after the user confirms them. See AGENTS.md. */
(() => {
  'use strict';
  const TRIP='FQp6V2';
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const today=()=>new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  // null = booking status not confirmed; false = explicitly not booked.
  const preparation={
    updatedOn:'2026-10-22',
    outbound:{booked:null,airline:'',number:'',date:'2026-11-11',origin:'',destination:'富國島 PQC',departure:'',arrival:'20:20'},
    return:{booked:null,airline:'',number:'',date:'2026-11-16',origin:'富國島 PQC',destination:'',departure:'11:20',arrival:''},
    'first-hotel':{booked:false,name:'',address:'',checkin:'2026-11-11',checkout:'2026-11-13',checkinTime:''},
    resort:{booked:true,name:'WorldHotels Long Beach Resort Phu Quoc',address:'152 Tran Hung Dao Street, Cua Lap Quarter, Duong To, Phu Quoc',checkin:'2026-11-13',checkout:'2026-11-16',checkinTime:''},
    pickup:{booked:null,provider:'',date:'2026-11-11',time:'',meeting:'',destination:''},
    dropoff:{booked:null,provider:'',date:'2026-11-16',time:'',meeting:'',destination:'富國島機場 PQC'}
  };
  const definitions=[
    {id:'outbound',group:'飛行',icon:'↗',title:'去程機票',bookingLabel:'是否已訂票',hint:'目前知道抵達時間。訂好後，把航班資訊告訴我。',fields:[['airline','航空公司'],['number','航班號'],['date','出發日期'],['origin','出發機場'],['destination','抵達機場'],['departure','起飛時間'],['arrival','抵達時間']]},
    {id:'return',group:'飛行',icon:'↙',title:'回程機票',bookingLabel:'是否已訂票',hint:'回程時間已記下，訂票與完整航班資料還等你確認。',fields:[['airline','航空公司'],['number','航班號'],['date','出發日期'],['origin','出發機場'],['destination','抵達機場'],['departure','起飛時間'],['arrival','抵達時間']]},
    {id:'first-hotel',group:'落腳',icon:'01',title:'前兩晚，住哪裡？',bookingLabel:'是否已訂房',hint:'先找到抵達後的落腳處，再把飯店資訊交給我整理。',fields:[['name','飯店名稱'],['address','飯店地址'],['checkin','入住日期'],['checkout','退房日期'],['checkinTime','可入住時間']]},
    {id:'resort',group:'落腳',icon:'02',title:'後三晚，飯店已訂',bookingLabel:'是否已訂房',hint:'已經有落腳處。再補入住時間，當天就能直接跟著走。',fields:[['name','飯店名稱'],['address','飯店地址'],['checkin','入住日期'],['checkout','退房日期'],['checkinTime','可入住時間']]},
    {id:'pickup',group:'接送',icon:'→',title:'落地後，怎麼到飯店？',bookingLabel:'接機是否已確認',hint:'晚間抵達，把接機方式與碰面資訊告訴我。',fields:[['provider','接送方式／業者'],['date','接送日期'],['time','碰面時間'],['meeting','碰面地點'],['destination','目的地']]},
    {id:'dropoff',group:'接送',icon:'←',title:'回程，怎麼到機場？',bookingLabel:'送機是否已確認',hint:'依回程航班確認送機，把飯店出發時間留在行程裡。',fields:[['provider','接送方式／業者'],['date','接送日期'],['time','出發時間'],['meeting','上車地點'],['destination','目的地']]}
  ];
  let showComplete=false,feedback='',copyFallback='';
  const missing=d=>[...(preparation[d.id].booked===true?[]:[d.bookingLabel]),...d.fields.filter(([key])=>!preparation[d.id][key]).map(([,label])=>label)];
  const pending=()=>definitions.filter(d=>missing(d).length);
  const status=d=>missing(d).length===0?'資料已收好':preparation[d.id].booked===true?'已訂，待補資訊':preparation[d.id].booked===false?'待安排':'訂購／安排狀態待確認';
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
    return '<article class="prep-mission '+(done?'is-complete':'')+'"'+(done&&!showComplete?' hidden':'')+'><div class="prep-mission-top"><span class="prep-mission-symbol" aria-hidden="true">'+d.icon+'</span><span class="prep-tag">'+d.group+'</span><span class="prep-status">'+esc(status(d))+'</span></div><h3>'+esc(d.title)+'</h3><p class="prep-hint">'+esc(done?'這張卡的資料已收好，完整安排在下方行程。':d.hint)+'</p><div class="prep-snippets">'+known.slice(0,3).map(([key])=>'<span>'+esc(item[key])+'</span>').join('')+'</div>'+(gaps.length?'<div class="prep-missing"><span class="prep-eyebrow">下一次，記得告訴我</span><p>'+gaps.map(esc).join('、')+'</p></div>':'<p class="prep-reminder">✓ 資料已確認</p>')+'<details><summary>目前已記下的資訊 <span aria-hidden="true">＋</span></summary><dl class="prep-known">'+'<div><dt>訂購／安排</dt><dd>'+esc(item.booked===true?'已確認':item.booked===false?'尚未安排':'待你確認')+'</dd></div>'+known.map(([key,label])=>'<div><dt>'+esc(label)+'</dt><dd>'+esc(item[key])+'</dd></div>').join('')+'</dl></details>'+(gaps.length?'<button type="button" class="prep-card-copy" data-prep-copy="'+d.id+'">複製這張卡的待補清單 ↗</button>':'')+'</article>';
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
    const hotel=(id,label)=>{const item=preparation[id],d=definitions.find(x=>x.id===id);return {date:item.checkin,endDate:new Date(Date.parse(item.checkout+'T12:00:00Z')-86400000).toISOString().slice(0,10),time:shortDate(item.checkin)+'–'+shortDate(item.checkout),title:label+'｜'+(item.name||'住宿待安排'),desc:[status(d),item.address,item.checkinTime?'入住 '+item.checkinTime:'可入住時間待補'].filter(Boolean).join(' · '),links:mapLink(item.address)};};
    const transfer=(id,title)=>{const item=preparation[id],d=definitions.find(x=>x.id===id);return {date:item.date,time:shortDate(item.date)+' '+(item.time||'時間待補'),title,desc:[status(d),item.provider||'交通方式待確認',item.meeting?'上車／碰面：'+item.meeting:'碰面地點待補',item.destination?'前往：'+item.destination:'目的地待補'].filter(Boolean).join(' · '),links:mapLink(item.meeting)};};
    return {...trip,start:out.date,end:back.date,timeZone:'Asia/Ho_Chi_Minh',summary:'兩大一小，慢慢玩富國島。'+pending().length+' 項資訊等我們補齊；已確認的安排會直接列在行程裡。',stops:[{date:out.date,time:shortDate(out.date)+' '+out.arrival,title:'去程・抵達富國島',desc:flight(definitions[0])},transfer('pickup','機場接機・前往住宿'),hotel('first-hotel','前兩晚'),hotel('resort','後三晚'),...(trip.dailyPlans||[]),transfer('dropoff','飯店出發・送機'),{date:back.date,time:shortDate(back.date)+' '+back.departure,title:'回程・離開富國島',desc:flight(definitions[1])}],details:[{title:'我們的旅行節奏',intro:'航班填各機場當地時間，富國島行程與接送使用越南當地時間。',bullets:['以午睡與飯店體驗為優先，不把行程排滿。','11/13–15 是建議行程，景點與用餐尚未預訂；依孩子作息與天氣彈性調整。']},{title:'下次記得告訴我',intro:'你提供資料後，我會更新網站。',bullets:pending().length?pending().map(d=>d.title+'：'+missing(d).join('、')):['六張準備卡的資料已收好。']}],checklist:['航班與住宿資料','機場接送與碰面地點','孩子的水壺、備用衣物與午睡用品']};
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
