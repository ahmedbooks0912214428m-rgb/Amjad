const API='/api/accounts';
const T2C={'أمريكي':'USD','هونغ كونغ':'HKD','ياباني':'JPY','سوداني':null};
const POINTS_MAP={'أمريكي':10,'هونغ كونغ':7,'ياباني':5,'سوداني':0};
const ER={USD:1,HKD:0.128,JPY:0.0067,SAR:0.27,AED:0.27,EUR:1.08,EGP:0.021,GBP:1.27,TRY:0.03,CAD:0.74,AUD:0.66};
const CS={USD:'$',HKD:'HK$',JPY:'¥',SAR:'﷼',AED:'د.إ',EUR:'€',EGP:'ج.م',GBP:'£',TRY:'₺',CAD:'C$',AUD:'A$'};
const CN={USD:'دولار أمريكي',HKD:'دولار هونغ كونغ',JPY:'ين ياباني',SAR:'ريال سعودي',AED:'درهم إماراتي',EUR:'يورو',EGP:'جنيه مصري',GBP:'جنيه إسترليني',TRY:'ليرة تركية',CAD:'دولار كندي',AUD:'دولار أسترالي'};
const AC=['سوداني','أمريكي','هونغ كونغ','ياباني'];
let accounts=[],editIndex=-1,syncTimer=null,idb=null;
let advancedFilter={active:false,priceFrom:null,priceTo:null,dateFrom:null,dateTo:null};
const DBN='AmjadDB',ST='backup';
function openIDB(){return new Promise((r,j)=>{const q=indexedDB.open(DBN,1);q.onerror=()=>j(q.error);q.onsuccess=()=>{idb=q.result;r(idb)};q.onupgradeneeded=e=>{if(!e.target.result.objectStoreNames.contains(ST))e.target.result.createObjectStore(ST)}})}
function idbSave(d){return new Promise((r,j)=>{if(!idb)return r();const t=idb.transaction(ST,'readwrite');t.objectStore(ST).put(d,'data');t.oncomplete=()=>r();t.onerror=()=>j(t.error)})}
function idbLoad(){return new Promise((r,j)=>{if(!idb)return r(null);const t=idb.transaction(ST,'readonly');const q=t.objectStore(ST).get('data');q.onsuccess=()=>r(q.result);q.onerror=()=>j(q.error)})}
function setSS(s){const e=document.getElementById('ss');if(!e)return;if(s==='online'){e.className='ss online';e.textContent='✅ متزامن'}else if(s==='offline'){e.className='ss offline';e.textContent='⚠️ غير متصل'}else{e.className='ss syncing';e.textContent='⏳ جاري'}}
async function saveData(){localStorage.setItem('amjad_final',JSON.stringify(accounts));try{await idbSave(accounts)}catch(e){}}
function showToast(m,t2){t2=t2||'success';const e=document.getElementById('tst');if(!e)return;e.textContent=m;e.className='ts '+t2;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),3500)}
function switchTab(n,b){document.querySelectorAll('.tc').forEach(x=>x.classList.remove('active'));document.querySelectorAll('.tbb').forEach(x=>x.classList.remove('active'));const tab=document.getElementById('tab-'+n);if(tab)tab.classList.add('active');if(b)b.classList.add('active')}
function filterByType(t2){const ft=document.getElementById('ft');if(ft)ft.value=t2;renderAccounts()}
function updateFF(){const t2=document.getElementById('ti').value;const c=T2C[t2];const pg=document.getElementById('pg');const p=document.getElementById('pi');if(!pg||!p)return;if(c===null){pg.classList.add('hn');p.value=''}else{pg.classList.remove('hn')}updateCurrencyDisplay()}
function updateCurrencyDisplay(){const t2=document.getElementById('ti').value;const c=T2C[t2];const ci=document.getElementById('ci');if(!ci)return;if(c===null){ci.innerHTML='<option value="FREE">Free</option>';ci.disabled=true;return}ci.disabled=false;let opts='';const allCur=['USD','HKD','JPY','SAR','AED','EUR','EGP','GBP','TRY','CAD','AUD'];allCur.forEach(cur=>{opts+='<option value="'+cur+'"'+(cur===c?' selected':'')+'>'+CS[cur]+' '+CN[cur]+'</option>'});ci.innerHTML=opts}
function toggleTheme(){document.body.classList.toggle('light-mode');const l=document.body.classList.contains('light-mode');const tb=document.getElementById('tb');if(tb)tb.textContent=l?'☀️':'🌙';localStorage.setItem('amjad_theme',l?'light':'dark')}
if(localStorage.getItem('amjad_theme')==='light'){document.body.classList.add('light-mode');const tb=document.getElementById('tb');if(tb)tb.textContent='☀️'}
function extractEmail(tx){const m=tx.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);return m?m[0]:null}
function extractPrice(tx,e){const c=tx.replace(e,' ');const m=c.match(/(\d+(?:[.,]\d+)?)/g);if(!m)return null;for(let x of m){const n=parseFloat(x.replace(',','.'));if(!isNaN(n)&&n>=0&&n<10000000)return n}return null}
function extractType(tx){const x=tx.toLowerCase();if(x.includes('سوداني')||x.includes('sudan')||x.includes('sd'))return 'سوداني';if(x.includes('هونغ')||x.includes('هونج')||x.includes('hong')||x.includes('hk'))return 'هونغ كونغ';if(x.includes('ياباني')||x.includes('japan')||x.includes('jp'))return 'ياباني';if(x.includes('أمريكي')||x.includes('امريكي')||x.includes('usa')||x.includes('us'))return 'أمريكي';return null}
function extractCurrency(tx){const x=tx.toLowerCase();if(x.includes('ريال')||x.includes('sar')||x.includes('﷼'))return 'SAR';if(x.includes('درهم')||x.includes('aed')||x.includes('د.إ'))return 'AED';if(x.includes('يورو')||x.includes('eur')||x.includes('€'))return 'EUR';if(x.includes('جنيه مصري')||x.includes('egp')||x.includes('ج.م'))return 'EGP';if(x.includes('إسترليني')||x.includes('gbp')||x.includes('£'))return 'GBP';if(x.includes('تركي')||x.includes('try')||x.includes('₺'))return 'TRY';if(x.includes('كندي')||x.includes('cad'))return 'CAD';if(x.includes('أسترالي')||x.includes('aud'))return 'AUD';return null}
function getUSD(a){if(!a.currency||a.currency==='FREE')return 0;return parseFloat(a.price||0)*(ER[a.currency]||1)}
function getPoints(a){return a.points!==undefined?a.points:(POINTS_MAP[a.type]||0)}
function getTotalPoints(){return accounts.reduce((s,a)=>s+getPoints(a),0)}
function esc(s){return String(s).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]))}
function isValidEmail(e){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}
function formatDate(d){if(!d)return '';const dt=new Date(d);return dt.toLocaleDateString('ar-EG',{year:'numeric',month:'2-digit',day:'2-digit'})}
