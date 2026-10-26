/* 富國島手繪行程直接融入既有 ?t=FQp6V2 原頁；不使用 iframe 或轉址。
   來源是已確認的旅行資料，且只修改單一富國島旅程的呈現。 */
(function(){
'use strict';
const styleText="\n:host{--ink:#30302d;--paper:#faf8f1;--white:#fffefa;--pink:#f1a7a4;--rose:#f8d7d2;--blue:#add9e5;--yellow:#fbd989;--mint:#c7dfb3;--gray:#827e76;--shadow:0 5px 0 var(--ink);--border:3px solid var(--ink);font-synthesis:none}\n*{box-sizing:border-box}:host{margin:0;background:#eae7df;color:var(--ink);font-family:-apple-system,BlinkMacSystemFont,\"Noto Sans TC\",\"PingFang TC\",\"Microsoft JhengHei\",sans-serif;line-height:1.58;-webkit-font-smoothing:antialiased}\nbutton,a{font:inherit}button{cursor:pointer}a{color:inherit}button:focus-visible,a:focus-visible{outline:4px solid #6b8fd0;outline-offset:4px}\n.shell{width:min(100%,700px);min-height:100vh;margin:auto;background:var(--paper);box-shadow:0 0 40px #0001;overflow:clip}.bar{background:#fffefd;text-align:center;border-bottom:1px solid #dedbd3;padding:15px 12px;font-size:13px;font-weight:850;letter-spacing:.05em}.nav{display:flex;align-items:center;justify-content:space-between;gap:10px;background:#fbf9f2;border-bottom:var(--border);padding:15px 20px 16px;position:sticky;top:0;z-index:9}.logo{height:44px;width:44px;display:grid;place-items:center;text-decoration:none;border-radius:13px;background:#fac1ba;border:var(--border);box-shadow:2px 2px 0 var(--ink);position:relative;transform:rotate(-5deg)}.logo:before{content:\"\";position:absolute;top:-10px;left:12px;width:15px;height:11px;border:3px solid var(--ink);border-bottom:0;border-radius:7px 7px 0 0}.logo svg{width:32px;height:32px}\n.tabs{display:flex;gap:4px;align-items:center}.tab{border:3px solid transparent;border-radius:40px;background:transparent;padding:6px 13px;font-weight:850;white-space:nowrap;font-size:17px;transition:transform .16s,background .16s}.tab.active{background:var(--pink);border-color:var(--ink);box-shadow:2px 3px 0 var(--ink)}.tab:hover{transform:translateY(-2px)}.main{padding:30px 22px 44px}.view{display:none;animation:appear .2s ease-out}.view.active{display:block}@keyframes appear{from{opacity:.3;transform:translateY(5px)}to{opacity:1;transform:none}}\n.hero{text-align:center;padding:8px 0 25px}.eyebrow{display:inline-flex;align-items:center;gap:7px;padding:5px 12px;border:2px solid var(--ink);background:#fff;border-radius:30px;font-size:12px;font-weight:800;letter-spacing:.06em;transform:rotate(-2deg)}h1{font-size:clamp(32px,8vw,50px);font-weight:950;letter-spacing:.035em;line-height:1.22;margin:17px 0 9px}h2{font-size:25px;margin:0 0 17px;font-weight:900}h3{font-size:19px;line-height:1.35;margin:0;font-weight:900}.sub{font-size:17px;letter-spacing:.04em}.count{display:inline-flex;align-items:center;gap:12px;background:var(--yellow);border:var(--border);box-shadow:var(--shadow);padding:9px 19px;border-radius:40px;font-size:17px;font-weight:800;margin-top:21px}.count strong{font-size:28px;line-height:1.2}.small-note{font-size:12px;color:var(--gray)}.section-title{display:flex;gap:11px;align-items:center;margin:21px 0 23px}.miniicon{display:grid;place-items:center;font-size:24px;width:42px;height:42px;border:var(--border);border-radius:50%;background:var(--blue);flex-shrink:0;box-shadow:2px 2px 0 var(--ink)}.section-title h2{margin:0}\n.card{border:var(--border);border-radius:27px;background:#fff;box-shadow:var(--shadow);overflow:hidden;margin-bottom:25px}.card-head{background:var(--blue);padding:12px 18px;border-bottom:var(--border);display:flex;justify-content:space-between;gap:8px;font-size:15px;font-weight:850;align-items:center}.card-head.green{background:var(--mint)}.card-head.pink{background:var(--rose)}.card-content{padding:18px 19px 21px}.flight-row{display:flex;align-items:center;justify-content:space-between;gap:10px}.flight-row .big{font-size:clamp(23px,7vw,39px);font-weight:780;letter-spacing:0;line-height:1.25}.flight-row .lab{font-size:13px;color:#605e59}.flight-row>div:last-child{text-align:right}.dotted{flex:1;text-align:center;border-bottom:4px dotted var(--ink);height:2px;position:relative;min-width:35px;max-width:115px}.dotted span{position:absolute;top:-13px;left:0;right:0;margin:auto;background:#fff;font-size:16px;width:32px}.status{font-weight:800;font-size:13px;color:#84514d;margin-top:15px}.hint{display:flex;gap:8px;align-items:start;padding-top:15px;border-top:2px dashed #c8c4b9;color:#646058;margin-top:13px;font-size:13px}.hint::before{content:'✎';font-weight:bold;color:#bd746e}.pill{display:inline-block;border:2px solid var(--ink);padding:3px 11px;border-radius:20px;font-weight:800;background:#fff9de;font-size:12px;white-space:nowrap}.pill.blue{background:var(--blue)}.pill.green{background:var(--mint)}.pill.pink{background:var(--rose)}\n.day-strip{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:0;margin-top:15px;margin-bottom:28px;position:relative;padding-top:27px}.day-strip:before{content:\"\";position:absolute;height:3px;background:var(--ink);top:37px;left:8%;right:8%;z-index:0}.day-button{background:none;border:0;display:flex;align-items:center;flex-direction:column;gap:5px;padding:0 0 2px;min-width:0;position:relative;z-index:1}.day-dot{height:22px;width:22px;border-radius:50%;border:3px solid var(--ink);background:#fff;transition:.15s}.day-button.active .day-dot{background:var(--rose)}.day-button.active .day-dot:after{content:\"🧳\";position:absolute;top:-25px;left:50%;transform:translateX(-50%);font-size:25px;filter:drop-shadow(1px 1px 0 #333)}.day-date{padding:0 4px;border-radius:20px;font-weight:850;font-size:clamp(11px,3.3vw,16px)}.day-button.active .day-date{background:var(--rose)}.day-week{font-size:11px;color:#706e69}.day-card{background:#fff0cc;border:var(--border);border-radius:28px;display:flex;gap:18px;align-items:center;padding:18px;box-shadow:var(--shadow);margin-bottom:31px;min-height:139px}.sticker{width:95px;height:86px;border:var(--border);border-radius:21px;background:#fdfcf5;display:grid;place-items:center;font-size:50px;box-shadow:3px 3px 0 var(--ink);flex:0 0 auto;transform:rotate(-4deg)}.day-caption{font-size:14px;color:#77726a;font-weight:750;margin-bottom:3px}.day-hotel{font-size:13px;color:#78736c;margin-top:6px}.timeline{position:relative;padding-left:0}.stop{display:grid;grid-template-columns:65px 24px 1fr;gap:10px;align-items:start;position:relative;min-height:103px}.stop:not(:last-child):before{content:\"\";position:absolute;left:76px;top:21px;bottom:-5px;border-left:3px dotted var(--ink)}.stop .hour{text-align:right;font-size:14px;padding-top:9px;font-weight:750;white-space:nowrap}.stop .circle{height:22px;width:22px;border:3px solid var(--ink);border-radius:50%;background:#fff;z-index:1;margin-top:10px}.stop .detail{padding-bottom:22px}.stop-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:0 0 8px}.stop h4{font-size:17px;margin:0;line-height:1.45}.stop p{font-size:14px;margin:3px 0 0;color:#726b65}.stop .boxed{background:#fff;border:var(--border);border-radius:19px;padding:13px 16px;margin:0 0 4px;box-shadow:2px 3px 0 var(--ink)}.stop .boxed a{text-decoration:underline;text-decoration-color:#81b8c3;text-decoration-thickness:3px;text-underline-offset:3px}.stop .boxed p{margin:6px 0 0}.stop .tiny{font-size:12px}.status-line{background:#f1eee7;border:2px dashed #bdb6a9;padding:14px;border-radius:18px;font-size:14px}\n.prep-card{border:var(--border);border-radius:25px;background:var(--white);box-shadow:var(--shadow);padding:19px;margin-bottom:23px}.prep-card h3{margin-bottom:12px}.check{display:flex;align-items:flex-start;gap:13px;padding:12px 0;border-bottom:1px dashed #d2cdc3;font-size:16px;cursor:pointer}.check:last-child{border:0}.check input{appearance:none;width:27px;height:27px;margin:0;border:3px solid var(--ink);border-radius:9px;background:#fff;flex:0 0 auto;cursor:pointer}.check input:checked{background:var(--mint)}.check input:checked:after{content:'✓';display:block;line-height:21px;text-align:center;font-weight:950}.check span{flex:1}.check input:checked+span{text-decoration:line-through;color:#87817b}.progress{border:var(--border);border-radius:50px;overflow:hidden;height:19px;margin:18px 0 6px;background:#fff}.progress span{display:block;height:100%;background:var(--mint);width:0;transition:width .2s;border-right:2px solid var(--ink)}.muted{color:#716d67}.footer{text-align:center;border-top:2px dashed #c6c0b6;padding:25px 20px 32px;color:#6c6760;font-size:12px}.floating-note{background:#fff9e9;border-left:5px solid #e5b57e;padding:14px 17px;margin-top:27px;border-radius:6px 14px 14px 6px;font-size:13px;color:#635c50}\n@media(max-width:430px){.main{padding:26px 18px 38px}.nav{padding:13px 13px}.tab{font-size:16px;padding:6px 12px}.logo{width:38px;height:38px}.day-card{gap:12px;padding:14px;min-height:122px}.sticker{width:72px;height:72px;font-size:39px}.day-card h3{font-size:17px}.stop{grid-template-columns:56px 22px 1fr;gap:8px}.stop:not(:last-child):before{left:65px}.stop .hour{font-size:12px}.stop h4{font-size:15px}.stop .boxed{padding:11px 12px}.day-date{font-size:12px}.day-week{font-size:10px}}\n@media(prefers-reduced-motion:reduce){*,*:before,*:after{transition:none!important;animation:none!important;scroll-behavior:auto!important}}\n\n\n:host(.travel-locked) .shell{display:none}\n#familyGate[hidden]{display:none!important}\n#familyGate{min-height:100vh;display:grid;place-items:center;background:#faf8f1;padding:25px}\n.familyGateCard{width:min(100%,400px);padding:34px 25px;border:3px solid #30302d;border-radius:28px;background:#fffefa;box-shadow:0 6px 0 #30302d;text-align:center;font-family:-apple-system,BlinkMacSystemFont,\"PingFang TC\",sans-serif}\n.familyGateCard h1{font-size:28px;margin:0 0 12px;color:#30302d}\n.familyGateCard p{color:#636159;margin-bottom:20px}\n.familyGateCard input{width:100%;padding:12px 16px;border:3px solid #30302d;border-radius:14px;background:white;font-size:22px;text-align:center;letter-spacing:6px}\n.familyGateCard button{margin-top:16px;padding:13px 24px;border:3px solid #30302d;border-radius:16px;background:#f1a7a4;font-size:18px;font-weight:800}\n.familyGateCard small{display:block;margin-top:15px;color:#8b5e55;min-height:22px}\n\n:host{display:block;min-height:100vh;background:#faf8f1}.return-home{display:block;font-size:12px;color:#575148;text-decoration:none;margin-bottom:4px;font-weight:750}.return-home:hover{text-decoration:underline}.shell{box-shadow:none} .shell[hidden]{display:none!important}\n/* Native travel section snapping: long day timelines remain freely readable. */\n:host{scroll-snap-align:start;scroll-margin-top:12px}\n.shell>.bar,.shell>.nav,.shell .hero,.shell .section-title,\n.shell article.card,.shell .day-card,.shell .prep-card,\n.shell .floating-note,.shell .footer{scroll-snap-align:start;scroll-snap-stop:normal;scroll-margin-top:12px}\n.shell .view{scroll-snap-align:start;scroll-margin-top:12px}\n@media(prefers-reduced-motion:reduce){:host{scroll-behavior:auto!important}}\n";
const itineraryExtrasCSS="\n/* Kyoto-style continuous itinerary; mobile-first, all stops visible. */\n.timeline{display:block;position:relative;padding:4px 0 0}\n.stop{grid-template-columns:54px 20px minmax(0,1fr);gap:7px;min-height:unset;align-items:start}\n.stop:not(:last-child):before{display:none}\n.stop .hour{font-size:12px;font-weight:850;padding-top:13px;line-height:1.45;white-space:normal;color:#5c584e}\n.stop .circle{height:17px;width:17px;margin:14px auto 0;background:#fdf0c7;border:3px solid var(--ink)}\n.stop .detail{min-width:0;padding-bottom:13px}\n.stop .boxed{padding:15px 14px 16px;background:#fffefa;border:2px solid var(--ink);border-radius:18px;box-shadow:2px 3px 0 #30302d;margin:0}\n.stop .boxed h4{font-size:17px;line-height:1.45;margin:7px 0 6px}\n.stop .boxed p{font-size:13px;line-height:1.7;color:#59534b;overflow-wrap:anywhere}\n.stop .stop-head{margin:0 0 3px}\n.stop .pill{font-size:11px}\n.stop-food .boxed{background:#fff8eb;border-color:#8e664e}\n.stop-food .circle{background:#f3afa3}\n.stop-links{display:flex;align-items:center;flex-wrap:wrap;gap:7px;margin-top:12px}\n.stop-links a,.route-info a,.food-moment a{font-size:12px;display:inline-flex;align-items:center;justify-content:center;padding:8px 11px;border:2px solid #30302d;border-radius:11px;background:#fff;text-decoration:none;font-weight:850;line-height:1.4;box-shadow:1px 2px 0 #30302d}\n.stop-photo{display:block;margin:12px 0 9px;border-radius:13px;overflow:hidden;background:#f1ede3;border:1px solid #ddd3c3}\n.stop-photo img{display:block;width:100%;height:auto;aspect-ratio:16/10;object-fit:cover}\n.stop-photo figcaption{padding:7px 9px;background:#fffaf0;color:#696157;font-size:11px;line-height:1.6}\n.stop-photo figcaption a{text-decoration:underline}\n.route-connector{display:grid;grid-template-columns:54px 20px minmax(0,1fr);gap:7px;align-items:stretch;min-height:70px;margin:1px 0}\n.route-rail{grid-column:2;display:flex;justify-content:center;align-items:center;position:relative;color:#777063;font-size:18px}\n.route-rail:before{content:\"\";position:absolute;top:-12px;bottom:-12px;left:50%;border-left:2px dashed #b7aea0;z-index:0}\n.route-rail span{z-index:1;position:relative;background:#faf8f1;padding:1px 0}\n.route-info{grid-column:3;margin:5px 0 9px;padding:11px 13px;background:#f4f0e8;border:1px dashed #bfb4a4;border-radius:13px;display:flex;align-items:center;gap:7px;flex-wrap:wrap;color:#555047;font-size:12px}\n.route-info strong{font-size:13px;color:#37342d}\n.route-info a{margin-left:auto;box-shadow:none;border-width:1px;padding:7px 9px;background:#fff}\n.food-moment{border:2px solid #8d604a;border-radius:20px;padding:14px 15px;margin:0 0 20px;background:#fff4e5;box-shadow:2px 3px 0 #30302d}\n.food-moment-head{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px}\n.food-moment-label{font-size:12px;font-weight:950;letter-spacing:.05em;color:#7b4b35}\n.food-moment-status{font-size:11px;font-weight:800;color:#7e5e4b;padding:4px 8px;border-radius:12px;background:#ffe2bf}\n.food-moment h3{font-size:19px;line-height:1.4;margin:0 0 6px}\n.food-moment p{font-size:13px;color:#64574b;margin:0 0 11px;line-height:1.65}\n.food-moment-actions{display:flex;gap:8px;flex-wrap:wrap}\n.food-moment-empty{background:#f4f0e8;border-color:#b7a997;box-shadow:none}\n.food-moment-empty .food-moment-label{color:#70665b}\n.food-moment-empty h3{font-size:16px}\n.day-card{margin-bottom:20px}\n.day-card .day-hotel{line-height:1.5;overflow-wrap:anywhere}\n.day-strip{scroll-margin-top:76px}\n@media(max-width:430px){\n.main{padding:21px 13px 36px}\n.stop{grid-template-columns:44px 17px minmax(0,1fr);gap:6px}\n.stop .hour{font-size:11px}\n.stop .circle{height:16px;width:16px;margin-top:13px}\n.stop .boxed{padding:12px 11px}\n.stop .boxed h4{font-size:16px}\n.route-connector{grid-template-columns:44px 17px minmax(0,1fr);gap:6px}\n.route-info{padding:10px 9px;gap:6px}\n.route-info a{margin-left:0}\n.food-moment{padding:13px 12px}\n}\n\n/* Final trip: transport summaries only on real transfers, readable costs. */\n.route-quiet{min-height:23px;margin:0}\n.route-quiet .route-rail{min-height:23px}\n.route-quiet .route-rail span{font-size:12px;color:#aaa394;background:var(--paper)}\n.trip-cost-lines{margin:0;display:grid;gap:8px}\n.trip-cost-lines>div{display:flex;justify-content:space-between;gap:10px;border-bottom:1px dashed #dad0be;padding:6px 0}\n.trip-cost-lines dt{color:#5e594e;font-weight:700}\n.trip-cost-lines dd{margin:0;font-weight:850;text-align:right;white-space:nowrap}\n.trip-cost-lines .trip-cost-total{border:0;border-top:3px solid #333;padding-top:13px;font-size:19px;color:#463d31}\n.trip-cost-summary .small-note{line-height:1.6;margin:12px 0 0}\n.stop-photo img{height:auto;aspect-ratio:16/10;object-fit:cover}\n@media(max-width:430px){.route-quiet{grid-template-columns:44px 17px minmax(0,1fr)}}\n\n/* Real Phu Quoc day plans: food-first jump bar, not a duplicate meal card. */\n.day-meal-nav{background:#fff7e8;border:2px solid #a67b5e;border-radius:17px;padding:13px 12px 11px;margin:0 0 22px}\n.meal-nav-heading{display:flex;align-items:baseline;justify-content:space-between;flex-wrap:wrap;gap:3px 10px;padding:0 2px 10px}\n.meal-nav-heading strong{font-size:16px;color:#62432f}.meal-nav-heading span{font-size:11px;color:#86725c}\n.meal-nav-items{display:grid;grid-template-columns:repeat(auto-fit,minmax(115px,1fr));gap:8px}\n.meal-nav-item{background:#fffdf9;border:1px solid #cbb59d;border-radius:11px;text-decoration:none;display:flex;flex-direction:column;gap:2px;min-width:0;padding:9px 10px;line-height:1.4;box-shadow:none}\n.meal-nav-item span{color:#8d5739;font-weight:900;font-size:12px}.meal-nav-item strong{color:#392f29;font-size:13px;overflow-wrap:anywhere}\n.meal-nav-item small{font-size:10px;color:#766c5c}\n.meal-nav-item:focus-visible{outline:3px solid #a67b5e;outline-offset:2px}\n.stop-food{scroll-margin-top:84px;outline:none}\n.stop-food .boxed{background:#fff6e9;border:2px solid #a56c4c;box-shadow:2px 3px 0 #8c5a3f}\n.stop-food .boxed h4{font-size:19px;color:#613d2b}\n.stop-food .stop-head{justify-content:space-between}\n.food-stop-tag{font-size:11px;font-weight:850;color:#a16b51}\n.food-stop-meta{display:flex;gap:5px 10px;align-items:center;flex-wrap:wrap;margin:9px 0 4px}\n.food-stop-meta span{font-size:11px;font-weight:800;background:#fbe6c9;border:1px solid #d7b69a;border-radius:8px;padding:3px 8px;color:#704832}\n.stop-food .food-dish{background:#fff1d7;padding:9px 10px;border-radius:9px;font-size:14px;color:#63422f}\n.stop-food .stop-links a{border-color:#7b5b44}\n@media(max-width:430px){.day-meal-nav{padding:11px 9px}.meal-nav-items{grid-template-columns:repeat(2,minmax(0,1fr))}.meal-nav-item{padding:8px}.stop-food .boxed h4{font-size:17px}}\n";
const pageMarkup="<div id=\"familyGate\"><form class=\"familyGateCard\" id=\"familyGateForm\"><h1>🧳 富國島旅行手帳</h1><p>請輸入家人通行碼，開啟手繪行程。</p><input id=\"familyGateCode\" type=\"password\" inputmode=\"numeric\" maxlength=\"4\" pattern=\"[0-9]{4}\" autocomplete=\"off\" aria-label=\"家人通行碼\" required><button type=\"submit\">開啟行程 ↗</button><small id=\"familyGateError\" aria-live=\"polite\"></small></form></div><div class=\"shell\">\n<header class=\"bar\"><a class=\"return-home\" href=\"/family-travel-hub/\">← 回到家庭旅行手帳</a>富國島 6 天 5 夜｜2026.11.11—11.16</header>\n<nav class=\"nav\" aria-label=\"旅行頁籤\"><a href=\"#flights\" class=\"logo\" aria-label=\"富國島旅行首頁\" id=\"homeLogo\"><svg viewBox=\"0 0 40 40\" fill=\"none\" stroke=\"#30302d\" stroke-width=\"3.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"8\" y=\"13\" width=\"24\" height=\"22\" rx=\"7\" fill=\"#f3a9a5\"/><rect x=\"13\" y=\"20\" width=\"5\" height=\"6\" rx=\"2\" fill=\"#ffeaa0\"/><rect x=\"23\" y=\"20\" width=\"5\" height=\"6\" rx=\"2\" fill=\"#ffeaa0\"/><path d=\"M15 13V9a5 5 0 0110 0v4\"/></svg></a><div class=\"tabs\" role=\"tablist\" aria-label=\"內容切換\"><button class=\"tab active\" id=\"tab-flights\" role=\"tab\" aria-selected=\"true\" aria-controls=\"flights\" data-tab=\"flights\">航班</button><button class=\"tab\" id=\"tab-plan\" role=\"tab\" aria-selected=\"false\" aria-controls=\"plan\" data-tab=\"plan\">行程</button><button class=\"tab\" id=\"tab-prep\" role=\"tab\" aria-selected=\"false\" aria-controls=\"prep\" data-tab=\"prep\">準備</button></div></nav>\n<main class=\"main\">\n<section class=\"view active\" id=\"flights\" role=\"tabpanel\" aria-labelledby=\"tab-flights\">\n <div class=\"hero\"><span class=\"eyebrow\">OUR LITTLE FAMILY ADVENTURE ✦</span><h1>富國島<br>6 天 5 夜</h1><div class=\"sub\">2026 · 11/11（三）— 11/16（一）</div><div class=\"count\">距離出發 <strong id=\"daysLeft\">—</strong> 天</div></div>\n <div class=\"section-title\"><span class=\"miniicon\">✈</span><h2>航班資訊</h2></div>\n <article class=\"card\"><div class=\"card-head\"><span>11/11（三）去程</span><span class=\"pill\">已訂票</span></div><div class=\"card-content\"><div class=\"flight-row\"><div><div class=\"big\">17:25</div><div class=\"lab\">桃園 TPE · 台灣時間</div></div><div class=\"dotted\"><span>✈</span></div><div><div class=\"big\">20:20</div><div class=\"lab\">富國島 PQC 抵達</div></div></div><div class=\"status\">太陽富國航空 9G511 · 已訂</div><div class=\"hint\">17:25 台灣時間出發、20:20 越南時間抵達；出發前核對航班最新通知。</div></div></article>\n <article class=\"card\"><div class=\"card-head green\"><span>11/16（一）回程</span><span class=\"pill\">已訂票</span></div><div class=\"card-content\"><div class=\"flight-row\"><div><div class=\"big\">11:20</div><div class=\"lab\">富國島 PQC 出發</div></div><div class=\"dotted\"><span>✈</span></div><div><div class=\"big\">16:00</div><div class=\"lab\">桃園 TPE 第一航廈 · 台灣時間</div></div></div><div class=\"status\">太陽富國航空 9G510 · 已訂</div><div class=\"hint\">11:20 越南時間起飛、16:00 台灣時間抵達桃園第一航廈；以航空公司最新通知為準。</div></div></article>\n <div class=\"section-title\"><span class=\"miniicon\" style=\"background:var(--rose)\">⌂</span><h2>住宿安排</h2></div>\n <article class=\"card\"><div class=\"card-head pink\"><span>11/11—11/13 · 前兩晚</span><span class=\"pill green\">已訂房</span></div><div class=\"card-content\"><h3>ROSIE SUNSET HOTEL</h3><p class=\"muted\">海景豪華三人房，不含早餐，僅收現金；晚到入住方式待確認。</p></div></article>\n <article class=\"card\"><div class=\"card-head green\"><span>11/13—11/16 · 後三晚</span><span class=\"pill green\">已訂房</span></div><div class=\"card-content\"><h3>WorldHotels Long Beach Resort Phu Quoc</h3><p class=\"muted\">11/13–11/16，私人花園景豪華雙床房，含早餐、不可退款；14:00 起可入住。</p><p><a href=\"https://www.google.com/maps/search/?api=1&query=WorldHotels+Long+Beach+Resort+Phu+Quoc\" target=\"_blank\" rel=\"noopener noreferrer\">開啟飯店地圖 ↗</a></p></div></article>\n</section>\n<section class=\"view\" id=\"plan\" role=\"tabpanel\" aria-labelledby=\"tab-plan\"><div class=\"hero\"><span class=\"eyebrow\">SLOW TRAVEL · LITTLE STEPS</span><h1>每天，慢慢玩。</h1><div class=\"sub\">點日期，切換當天行程</div></div><div class=\"day-strip\" id=\"dayStrip\" role=\"group\" aria-label=\"切換旅行日期\"></div><div class=\"day-card\"><div class=\"sticker\" id=\"daySticker\" aria-hidden=\"true\">🏝</div><div><div class=\"day-caption\" id=\"dayCaption\">Day 1</div><h3 id=\"dayTitle\">抵達富國島</h3><div class=\"day-hotel\" id=\"dayHotel\">旅行的第一天</div></div></div><div class=\"timeline\" id=\"timeline\" aria-live=\"polite\"></div><div class=\"floating-note\">✦ 「建議」不代表已預約；未確認的時間與交通會保留「待確認」，不會自動補造。</div></section>\n<section class=\"view\" id=\"prep\" role=\"tabpanel\" aria-labelledby=\"tab-prep\"><div class=\"hero\"><span class=\"eyebrow\">READY, SET, VACATION!</span><h1>出發前準備</h1><div class=\"sub\">整理行程，也為小朋友保留休息時間</div></div><div class=\"section-title\"><span class=\"miniicon\" style=\"background:var(--mint)\">✓</span><h2>待辦清單</h2></div><div class=\"prep-card\"><h3>訂購與交通</h3><div id=\"prepListA\"></div></div><div class=\"prep-card\"><h3>旅行前確認</h3><div id=\"prepListB\"></div></div><div class=\"prep-card\" style=\"background:#fff4df\"><h3>準備進度 <span id=\"progressLabel\" style=\"float:right;font-size:15px\">0 / 6</span></h3><div class=\"progress\" aria-label=\"勾選進度\"><span id=\"progressBar\"></span></div><p class=\"small-note\">勾選結果只儲存在目前使用的瀏覽器。這是設計預覽，不會更新正式網站的訂購狀態。</p></div><div class=\"prep-card\"><h3>已確認的住宿</h3><p><span class=\"pill green\">已訂妥</span> 11/11–11/13 ROSIE SUNSET HOTEL</p><p><span class=\"pill green\">已訂妥</span> 11/13–11/16 WorldHotels Long Beach Resort</p><p class=\"muted\">ROSIE 晚到入住、機場接送、11/13 換飯店接送仍待確認。</p></div></section>\n</main>\n<footer class=\"footer\">OUR FAMILY TRAVEL CLUB ♥<br>手繪旅行行程 · 家庭旅行手帳<br><span>航班、住宿及逐日安排依家庭旅行手帳現有資料顯示；未確認事項明確標記</span></footer>\n</div>";
window.PhuQuocIntegrated={
  mount:function(app,trip,accessCodes,accessKey){
    document.body.classList.add('phu-integrated-page');
    app.replaceChildren();
    const host=document.createElement('div');
    host.id='phu-integrated-host';
    app.append(host);
    const root=host.attachShadow({mode:'open'});
    root.innerHTML='<style>'+styleText+itineraryExtrasCSS+'</style>'+pageMarkup;
    const gate=root.getElementById('familyGate');
    const shell=root.querySelector('.shell');
    const unlock=function(){
      host.classList.remove('travel-locked');
      gate.hidden=true;
      shell.hidden=false;
    };
    let allowed=false;
    try{allowed=sessionStorage.getItem(accessKey)==='1'}catch(_){}
    if(allowed){unlock()} else {host.classList.add('travel-locked');shell.hidden=true}
    root.getElementById('familyGateForm').addEventListener('submit',function(event){
      event.preventDefault();
      const field=root.getElementById('familyGateCode');
      if(accessCodes.has(field.value.trim())){
        try{sessionStorage.setItem(accessKey,'1')}catch(_){}
        unlock();
      }else{
        root.getElementById('familyGateError').textContent='通行碼不正確，請重新輸入。';
        field.value='';
        field.focus();
      }
    });
    (function(document){
      
(function(){'use strict';
const dates=['11/11','11/12','11/13','11/14','11/15','11/16'],weekday=['三','四','五','六','日','一'];
let days=[
 {icon:'✈️',title:'晚上抵達富國島',hotel:'前兩晚住宿尚未安排',stops:[{time:'20:20',tag:'飛機',color:'blue',title:'抵達富國島 PQC',desc:'目前記錄的抵達時間；航空公司與訂票狀態待確認。'},{time:'待確認',tag:'接送',color:'pink',title:'機場到住宿地點',desc:'接機業者、碰面地點及目的地尚未確認。'},{time:'晚上',tag:'住宿',color:'green',title:'入住前兩晚飯店',desc:'住宿尚未訂妥，先保留彈性。'}]},
 {icon:'🌴',title:'留點時間，慢慢玩',hotel:'前兩晚飯店待安排',stops:[{time:'上午',tag:'保留',color:'green',title:'自由安排的早晨',desc:'這一天目前沒有已確認的景點，建議以親子休息為優先。'},{time:'午間',tag:'休息',color:'pink',title:'午餐與午睡時間',desc:'預留完整休息時段，避免把一整天排得太滿。'},{time:'下午',tag:'待補',color:'blue',title:'當日行程尚待規劃',desc:'等住宿與交通確認後，再安排適合的附近景點。'}]},
 {icon:'🏨',title:'換飯店，海邊慢慢玩',hotel:'入住 WorldHotels（已訂）',stops:[{time:'上午',tag:'住宿',color:'green',title:'從前兩晚飯店退房',desc:'第一間飯店尚未確認；退房時間待補。'},{time:'下午',tag:'住宿',color:'green',title:'前往 WorldHotels Long Beach Resort',desc:'後三晚住宿已訂，實際可入住時間仍以飯店確認為準。'},{time:'下午',tag:'休息',color:'pink',title:'午睡、泳池或飯店海灘',desc:'建議：讓孩子休息，選擇飯店內輕鬆活動。'},{time:'傍晚',tag:'建議',color:'blue',title:'飯店看夕陽、附近晚餐',desc:'未預約餐廳，依當天精神與天氣調整。'}]},
 {icon:'🌊',title:'泳池、海景與傍晚散步',hotel:'住 WorldHotels（已訂）',stops:[{time:'上午',tag:'建議',color:'green',title:'飯店泳池與海邊',desc:'早餐後玩水、散步，不安排跨島奔波。'},{time:'中午',tag:'休息',color:'pink',title:'回房午睡',desc:'午睡時間留完整；醒來再決定是否出門。'},{time:'傍晚',tag:'建議',color:'blue',title:'丁丘廟／陽東夜市',desc:'看海景、輕鬆吃晚餐，太累就直接留在飯店。',link:'https://www.google.com/maps/search/?api=1&query=Dinh+Cau+Phu+Quoc'}]},
 {icon:'🏖️',title:'星沙灘半日，小朋友玩沙',hotel:'住 WorldHotels（已訂）',stops:[{time:'上午',tag:'建議',color:'blue',title:'Sao Beach 星沙灘',desc:'建議半日玩沙看海，是否下水依實際海況決定。',link:'https://www.google.com/maps/search/?api=1&query=Sao+Beach+Phu+Quoc'},{time:'中午',tag:'午餐',color:'green',title:'就近午餐後返回飯店',desc:'尚未預訂交通或餐廳。'},{time:'下午',tag:'休息',color:'pink',title:'午睡與飯店時光',desc:'最後一晚放慢步調，晚餐在飯店附近彈性安排。'}]},
 {icon:'🧳',title:'收好回憶，準備返家',hotel:'WorldHotels 退房',stops:[{time:'待確認',tag:'接送',color:'pink',title:'退房、前往富國島機場',desc:'送機時間與交通方式尚未確認；請依航班安排充足預留時間。'},{time:'11:20',tag:'飛機',color:'blue',title:'富國島 PQC 起飛',desc:'目前記錄的預定起飛時間；班次及訂票狀態尚未確認。'},{time:'抵達待補',tag:'回家',color:'green',title:'返回台灣',desc:'抵達機場與抵達時間仍待確認。'}]}
];

const newTripThemes=[
 {icon:'✈️',title:'結婚紀念日｜抵達富國島'},
 {icon:'🌴',title:'KKday 快艇三島｜晚上彈性逛街'},
 {icon:'🏨',title:'日落小鎮｜入住 WorldHotels'},
 {icon:'🌊',title:'飯店玩樂｜陽東夜市'},
 {icon:'🏖️',title:'整天享受渡假村'},
 {icon:'🧳',title:'返台｜9G510'}
];
newTripThemes.forEach((v,i)=>Object.assign(days[i],v));

/* 以 travel-prep.js 產生的同一份正式資料為準；已確認資料與建議不可混淆。
   只在入住當日顯示飯店節點，避免住宿跨日期時覆蓋其他行程。 */
const baseDates=['2026-11-11','2026-11-12','2026-11-13','2026-11-14','2026-11-15','2026-11-16'];
const preparation=window.TravelPrep?.getPreparation?.();
if(preparation){
 days[0].hotel=preparation['first-hotel']?.name||(preparation['first-hotel']?.booked===false?'前兩晚住宿尚未安排':'前兩晚住宿待確認');
 days[1].hotel=days[0].hotel;
 days[2].hotel=preparation.resort?.name||'後三晚住宿待確認';
 days[3].hotel=days[2].hotel;days[4].hotel=days[2].hotel;
}
if(trip&&Array.isArray(trip.stops)){
 for(let i=0;i<baseDates.length;i++){
  const on=baseDates[i];
  const matching=trip.stops.filter(row=>row.date===on);
  if(matching.length){
   const actual=matching.map(row=>{
    const name=String(row.title||'行程');
    const detail=String(row.desc||'');
    const confirmed=/已訂|已確認/.test(detail)&&!/待確認|未訂/.test(detail);
    const isFlight=/去程|回程|航班|飛機/.test(name);
    const isSuggest=/建議|未訂|尚未確認訂購|待確認/.test(name)||/尚未預訂|尚未確認訂購/.test(detail);
    const isFood=row.kind==='food'||/午餐|晚餐|早餐|用餐/.test(name);
    const place=row.place||(/WorldHotels Long Beach Resort/i.test(name)?'WorldHotels Long Beach Resort Phu Quoc':/星沙灘|Sao Beach/i.test(name)?'Sao Beach Phu Quoc':'');
    return {
     time:String(row.time||'時間待確認'),tag:row.status|| (isFlight?'航班':isSuggest?'待確認':confirmed?'已訂':isFood?'美食':'行程'),
     color:isFlight?'blue':confirmed?'green':isSuggest?'pink':'green',
     kind:isFood?'food':row.kind||'',title:name,desc:detail||'詳細資訊待補',place,
     dish:row.dish||'',restaurantName:row.restaurantName||'',photo:row.photo||'',photoSource:row.photoSource||'',photoCredit:row.photoCredit||'',
     links:Array.isArray(row.links)?row.links.filter(l=>l&&l.href&&l.label):[],
     travelMinutes:row.travelMinutes??null,travelMode:row.travelMode||'',fromPlace:row.fromPlace||''
    };
   });
   // 11/12 還沒有逐日計畫時，保留原本明確標為建議的休息行程。
   days[i].stops=(i===1&&!trip.dailyPlans?.some(row=>row.date===on))?actual.concat(days[i].stops):actual;
  }
 }
}
// 下方只是已記錄用餐方向的摘要，不代表餐廳、訂位或車程已確認。
// 已知的用餐方向，不替未選定店家建立虛構餐廳或料理照片。
const mealHints=[
 {title:'抵達日晚間｜餐點依實際情況',note:'20:20 抵達富國島，晚餐尚未指定；以順利入住 ROSIE 與休息優先。',query:'restaurants near ROSIE SUNSET HOTEL Phu Quoc'},
 {title:'跳島一日遊｜行程內午餐',note:'預計使用套裝行程內的午餐；業者與實際餐點待確認，晚上可視體力逛 VUI-Fest。',query:'VUI-Fest Bazaar Phu Quoc'},
 {title:'日落小鎮午餐｜晚餐就近吃',note:'午餐在小鎮附近，晚餐在 WorldHotels 或周邊；兩餐尚未指定店家。',query:'restaurants Sunset Town Phu Quoc'},
 {title:'飯店午餐｜陽東夜市晚餐',note:'午餐在飯店附近；傍晚若有精神再去陽東夜市找晚餐。',query:'Phu Quoc Night Market'},
 {title:'渡假村一日｜三餐放輕鬆',note:'飯店早餐已包含；午晚餐於飯店或附近彈性選擇，不安排跨島移動。',query:'restaurants near WorldHotels Long Beach Resort Phu Quoc'},
 {title:'退房日｜先享用飯店早餐',note:'飯店早餐已包含；請配合 08:20 抵達機場的目標安排退房與接送。',query:'WorldHotels Long Beach Resort Phu Quoc'}
];
const commonsPhoto=(filename,author,license,label)=>{
 const url='https://commons.wikimedia.org/wiki/File:'+encodeURIComponent(filename);
 return {photo:'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(filename)+'?width=900',
 source:url,credit:author+' · '+license,label};
};
const sitePhotos=[
 {pattern:/日落小鎮.*(散步|拍照)|日落小鎮散步/i,
  ...commonsPhoto('Sunset-town.jpg','Vivu Vietnam','CC BY-SA 4.0','日落小鎮參考實景（非本次旅行）')},
 {pattern:/VUI-Fest|日落小鎮.*晚上/i,
  ...commonsPhoto('Sunset Town Phu Quoc at night.jpg','Vivu Vietnam','CC BY-SA 4.0','日落小鎮夜景參考（非夜市店家實拍）')},
 {pattern:/陽東夜市/i,
  ...commonsPhoto('Cho Dem Phu Quoc - Welcome to Phu Quoc Night Market.jpg','FrogsLegs71','CC BY-SA 3.0','陽東夜市參考實景（非本次旅行）')}
];

function el(id){return document.getElementById(id)}
function escape(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c]));}
function activeTab(name,focus){for(const b of document.querySelectorAll('[data-tab]')){const active=b.dataset.tab===name;b.classList.toggle('active',active);b.setAttribute('aria-selected',active?'true':'false');b.tabIndex=active?0:-1;}for(const s of document.querySelectorAll('.view'))s.classList.toggle('active',s.id===name);if(focus)el('tab-'+name).focus();history.replaceState(null,'','#'+name);window.scrollTo(0,0);}
for(const b of document.querySelectorAll('[data-tab]'))b.addEventListener('click',()=>activeTab(b.dataset.tab,false));
const start=new Date('2026-11-11T00:00:00+08:00');const today=new Date();const now=new Date(today.getFullYear(),today.getMonth(),today.getDate());const remaining=Math.ceil((start-now)/86400000);el('daysLeft').textContent=remaining>0?remaining:remaining===0?'今': '—';if(remaining<0)el('daysLeft').parentElement.textContent='旅程已開始或結束';
function linkFor(place){
 return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(place);
}
function photoFor(stop){
 if(stop.photo)return {photo:stop.photo,source:stop.photoSource||'',credit:stop.photoCredit||'來源待確認',label:'行程照片'};
 return sitePhotos.find(item=>item.pattern.test(stop.title))||null;
}
function photoMarkup(stop){
 const p=photoFor(stop);if(!p)return '';
 const caption=escape(p.label)+' · '+escape(p.credit);
 return '<figure class="stop-photo"><img loading="lazy" decoding="async" alt="'+escape(p.label)+'" src="'+escape(p.photo)+'"><figcaption>'+caption+(p.source?' · <a href="'+escape(p.source)+'" target="_blank" rel="noopener noreferrer">照片與授權來源 ↗</a>':'')+'</figcaption></figure>';
}
function mealOverview(stops){
 const meals=stops.map((item,index)=>({item,index})).filter(({item})=>item.kind==='food');
 if(!meals.length)return '';
 const mealLabel=item=>{
  const name=item.title+' '+item.time;
  const match=name.match(/早餐|午餐|晚餐|下午茶|點心|宵夜/);
  return match?match[0]:'用餐';
 };
 return '<nav class="day-meal-nav" aria-label="本日美食站點快速導覽"><div class="meal-nav-heading"><strong>今天吃什麼</strong><span>點餐點直達行程 · 不折疊</span></div><div class="meal-nav-items">'+meals.map(({item,index})=>'<a class="meal-nav-item" href="#meal-stop-'+index+'" data-meal-jump="'+index+'"><span>'+escape(mealLabel(item))+'</span><strong>'+escape(item.restaurantName||item.dish||item.title)+'</strong><small>'+(item.restaurantName?'已指定店家':'餐廳待選')+'</small></a>').join('')+'</div></nav>';
}
function segmentBetween(previous,next){
 const from=next.fromPlace||previous.place||'',to=next.place||'';
 const minutes=Number(next.travelMinutes);
 const known=next.travelMinutes!==null&&next.travelMinutes!==''&&Number.isFinite(minutes)&&minutes>=0&&minutes<=1440;
 const mode=next.travelMode==='walking'?'步行':next.travelMode==='transit'?'大眾運輸':next.travelMode==='driving'?'開車':'移動';
 if(!next.travelMode&&!known&&(!from||!to||from===to))return '<div class="route-connector route-quiet" aria-hidden="true"><span class="route-rail"><span>↓</span></span></div>';
 const route=(from&&to&&from!==to)?'https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent(from)+'&destination='+encodeURIComponent(to)+'&travelmode='+(next.travelMode==='walking'?'walking':next.travelMode==='transit'?'transit':'driving'):'';
 return '<div class="route-connector" aria-label="站點間交通"><span class="route-rail"><span>↓</span></span><div class="route-info"><span>'+mode+'</span><strong>'+(known?'預估 '+minutes+' 分鐘 · 非即時':'交通時間待確認')+'</strong>'+(route?'<a href="'+escape(route)+'" target="_blank" rel="noopener noreferrer">查地圖路線 ↗</a>':'')+'</div></div>';
}
function stopMarkup(item,index,dayIndex){
 const food=item.kind==='food';
 const image=photoMarkup(item);
 const links=item.links||[];
 const actions=links.map(l=>'<a href="'+escape(l.href)+'" target="_blank" rel="noopener noreferrer">'+escape(l.label)+' ↗</a>').join('');
 const direct=(!links.length&&item.place)?'<a href="'+escape(linkFor(item.place))+'" target="_blank" rel="noopener noreferrer">開啟導航 ↗</a>':'';
 const desc=item.desc?'<p>'+escape(item.desc)+'</p>':'';
 const dish=item.dish?'<p class="food-dish"><strong>推薦料理｜'+escape(item.dish)+'</strong></p>':'';
 const breakfastIncluded=food&&/含早餐|早餐已包含|包含於房費/.test(item.desc||'');
 const foodStatus=food?'<div class="food-stop-meta"><span>'+(item.restaurantName?'已指定店家｜'+escape(item.restaurantName):'餐廳尚未指定')+'</span>'+(breakfastIncluded?'<span>房費已含早餐</span>':'')+'</div>':'';
 const hotel=dayIndex<=1?preparation?.['first-hotel']?.name:preparation?.resort?.name;
 const near=item.place||(/日落小鎮|小鎮/.test(item.title)?'Sunset Town Phu Quoc':hotel||'Phu Quoc');
 const search=food&&!item.restaurantName&&!/行程內|套裝/.test(item.title)?'<a href="'+escape(linkFor('restaurants near '+near))+'" target="_blank" rel="noopener noreferrer">找附近美食 ↗</a>':'';
 const knownRestaurant=food&&item.restaurantName&&!item.place?'<a href="'+escape(linkFor(item.restaurantName+' Phu Quoc'))+'" target="_blank" rel="noopener noreferrer">餐廳地圖 ↗</a>':'';
 const id=food?' id="meal-stop-'+index+'" tabindex="-1"':'';
 return '<div class="stop'+(food?' stop-food':'')+'"'+id+'><div class="hour">'+escape(item.time)+'</div><div class="circle"></div><div class="detail"><article class="boxed"><div class="stop-head"><span class="pill '+escape(item.color)+'">'+escape(item.tag)+'</span>'+(food?'<span class="food-stop-tag">今天吃什麼</span>':'')+'</div><h4>'+escape(item.title)+'</h4>'+dish+image+foodStatus+desc+((actions||direct||knownRestaurant||search)?'<div class="stop-links">'+actions+direct+knownRestaurant+search+'</div>':'')+'</article></div></div>';
}
function setDay(i){
 const d=days[i];
 for(const b of document.querySelectorAll('.day-button')){
  const on=Number(b.dataset.day)===i;
  b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));
 }
 el('daySticker').textContent=d.icon;
 el('dayCaption').textContent='Day '+(i+1)+' · '+dates[i]+'（週'+weekday[i]+'）';
 el('dayTitle').textContent=d.title;
 el('dayHotel').textContent=d.hotel;
 const content=d.stops.map((stop,index)=>(index?segmentBetween(d.stops[index-1],stop):'')+stopMarkup(stop,index,i)).join('');
 el('timeline').innerHTML=mealOverview(d.stops)+content;
}
el('timeline').addEventListener('click',event=>{
 const link=event.target.closest('[data-meal-jump]');
 if(!link)return;
 event.preventDefault();
 const target=el('meal-stop-'+link.dataset.mealJump);
 if(target){target.scrollIntoView({behavior:'auto',block:'start'});target.focus({preventScroll:true});}
});
el('timeline').addEventListener('error',event=>{if(event.target.tagName==='IMG')event.target.closest('figure')?.setAttribute('hidden','');},true);

el('dayStrip').innerHTML=dates.map((date,i)=>`<button class="day-button" type="button" aria-label="第 ${i+1} 天 ${date}" aria-pressed="false" data-day="${i}"><span class="day-dot"></span><span class="day-date">${date}</span><span class="day-week">週${weekday[i]}</span></button>`).join('');for(const b of document.querySelectorAll('[data-day]'))b.addEventListener('click',()=>setDay(Number(b.dataset.day)));
const vietnamToday=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Ho_Chi_Minh',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const activeTravelDay=baseDates.indexOf(vietnamToday);
setDay(activeTravelDay>=0?activeTravelDay:0);
const tasksA=['11/12 KKday 快艇三島：訂購、集合時間／地點、合身兒童救生衣','11/11 接機、11/13 兩飯店間交通、11/16 送機待確認','提前告知 ROSIE 20:20 抵達，確認晚到入住及現金付款'];const tasksB=['核對護照、入境文件與航班最新通知','出發前核對天氣、跳島出團資訊及 Gemy Kids Zone 開放狀況','11/13 午餐後轉飯店，14:00 起入住並安排午睡'];
const key='familyTravelPhuQuocChecklist20261026';let checked={};try{checked=JSON.parse(localStorage.getItem(key)||'{}')||{}}catch(_){checked={}}
function renderTasks(root,tasks,offset){el(root).innerHTML=tasks.map((txt,i)=>`<label class="check"><input type="checkbox" data-check="${i+offset}" ${checked[i+offset]?'checked':''}><span>${escape(txt)}</span></label>`).join('');}
renderTasks('prepListA',tasksA,0);renderTasks('prepListB',tasksB,3);
function progress(){let n=Object.values(checked).filter(Boolean).length;n=Math.min(n,6);el('progressLabel').textContent=n+' / 6';el('progressBar').style.width=n/6*100+'%';}
for(const input of document.querySelectorAll('[data-check]'))input.addEventListener('change',()=>{checked[input.dataset.check]=input.checked;try{localStorage.setItem(key,JSON.stringify(checked))}catch(_){}progress()});progress();
const hash=location.hash.replace('#','');if(['plan','flights','prep'].includes(hash))activeTab(hash,false);else activeTab('plan',false);document.getElementById('homeLogo').addEventListener('click',e=>{e.preventDefault();activeTab('flights',false)});
})();

    })(root);
    
function syncPreparation(){
 const p=window.TravelPrep?.getPreparation?.();
 if(!p)return;
 const cards=[...root.querySelectorAll('#flights article.card')];
 if(cards.length<4)return;
 function flight(card,f,direction){
  const big=card.querySelectorAll('.big'),lab=card.querySelectorAll('.lab');
  if(big.length===2){big[0].textContent=f.departure||'待確認';big[1].textContent=f.arrival||'待確認';}
  if(lab.length===2){lab[0].textContent=(f.origin||'出發機場')+' · 當地時間';lab[1].textContent=(f.destination||'抵達機場')+' · 當地時間';}
  const status=card.querySelector('.card-head .pill');
  if(status)status.textContent=f.booked===true?'已訂票':f.booked===false?'尚未訂票':'訂票待確認';
  const line=card.querySelector('.status');
  if(line)line.textContent=(f.airline||'航空公司待確認')+' · '+(f.number||'班次待確認')+' · '+(f.booked===true?'已訂':'狀態待確認');
  const hint=card.querySelector('.hint');
  if(hint)hint.textContent=direction==='out'?'17:25 為台灣時間，20:20 為越南時間；以電子機票與航空公司最新通知為準。':'11:20 為越南時間，16:00 為台灣時間；回程抵達桃園第一航廈。';
 }
 flight(cards[0],p.outbound,'out');flight(cards[1],p.return,'back');
 const hotel=[p['first-hotel'],p.resort];
 for(let i=0;i<2;i++){
  const card=cards[2+i],data=hotel[i],head=card.querySelector('.card-head .pill'),title=card.querySelector('h3'),muted=card.querySelector('.muted');
  if(head)head.textContent=data.booked===true?'已訂房':data.booked===false?'尚未訂房':'訂房待確認';
  if(title)title.textContent=data.name||'住宿尚待安排';
  if(muted)muted.textContent=[data.checkin?.slice(5).replace('-','/'),data.checkout?.slice(5).replace('-','/'),data.room,data.breakfast,data.payment,data.refund,data.checkinTime?'入住 '+data.checkinTime:'入住時間待確認'].filter(Boolean).join(' · ');
  let map=card.querySelector('.card-content a[href*="google.com/maps"]');
  if(!map&&data.name){
   const row=document.createElement('p');map=document.createElement('a');row.append(map);card.querySelector('.card-content').append(row);
   map.target='_blank';map.rel='noopener noreferrer';map.textContent='開啟飯店地圖 ↗';
  }
  if(map&&data.name)map.href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(data.name+' Phu Quoc');
 }
 const costs=p.costs;
 if(costs&&!root.querySelector('.trip-cost-summary')){
  const card=document.createElement('article');card.className='card trip-cost-summary';
  card.innerHTML='<div class="card-head green"><span>已訂費用｜2 大 1 小</span><span class="pill green">新台幣參考</span></div>'+
   '<div class="card-content"><dl class="trip-cost-lines">'+
    '<div><dt>來回機票</dt><dd>NT$ '+Number(costs.airfareTWD).toLocaleString('en-US')+'</dd></div>'+
    '<div><dt>ROSIE｜2 晚</dt><dd>NT$ '+Number(costs.firstHotelTWD).toLocaleString('en-US')+'</dd></div>'+
    '<div><dt>WorldHotels｜3 晚</dt><dd>NT$ '+Number(costs.resortTWD).toLocaleString('en-US')+'</dd></div>'+
    '<div class="trip-cost-total"><dt>目前合計</dt><dd>NT$ '+Number(costs.totalTWD).toLocaleString('en-US')+'</dd></div></dl>'+
    '<p class="small-note">未含跳島、交通、餐飲及購物；住宿依越南盾結算與實際匯率為準。</p></div>';
  root.getElementById('flights').append(card);
 }
}

syncPreparation();

  }
};
})();
