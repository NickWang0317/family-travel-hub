/* Keep an open itinerary current after a conversation update is published. */
(() => {
  'use strict';
  const revision=document.querySelector('meta[name="site-revision"]')?.content;
  if(!revision)return;
  const dayKey=()=>['Asia/Taipei','Asia/Ho_Chi_Minh'].map(timeZone=>new Intl.DateTimeFormat('sv-SE',{timeZone,year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date())).join('/');
  const initialDay=dayKey();
  const positionKey='family-travel-hub:update-position';
  try{
    const saved=JSON.parse(sessionStorage.getItem(positionKey)||'null');
    if(saved?.revision===revision){
      sessionStorage.removeItem(positionKey);
      requestAnimationFrame(()=>window.scrollTo(0,saved.y));
    }
  }catch{}
  let checking=false;
  async function check(){
    if(checking||document.visibilityState!=='visible'||!navigator.onLine)return;
    checking=true;
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),15000);
    try{
      if(dayKey()!==initialDay){location.reload();return;}
      const response=await fetch(new URL('site-version.json',location.href),{cache:'no-store',signal:controller.signal});
      if(!response.ok)return;
      const next=await response.json();
      if(typeof next.revision!=='string'||next.revision===revision)return;
      const url=new URL(location.href);url.searchParams.set('_site',next.revision);
      // Wait until the new HTML and version file are both available on Pages.
      const page=await fetch(url,{cache:'no-store',signal:controller.signal});
      if(!page.ok)return;
      const html=new DOMParser().parseFromString(await page.text(),'text/html');
      if(html.querySelector('meta[name="site-revision"]')?.content!==next.revision)return;
      try{sessionStorage.setItem(positionKey,JSON.stringify({revision:next.revision,y:window.scrollY}));}catch{}
      const status=document.getElementById('site-update-status');
      if(status)status.textContent='正在載入我們剛更新的內容…';
      location.replace(url.href);
    }catch{}finally{clearTimeout(timeout);checking=false;}
  }
  setInterval(check,60000);
  document.addEventListener('visibilitychange',check);
  check();
})();
