const POINTS_MAP={'أمريكي':10,'هونغ كونغ':7,'ياباني':5,'سوداني':0};
function getPoints(a){return POINTS_MAP[a.type]||0}
function getTotalPoints(){if(typeof accounts==='undefined')return 0;return accounts.reduce((s,a)=>s+getPoints(a),0)}
function updatePointsDisplay(){
const tp=document.getElementById('tp');
if(tp)tp.textContent=getTotalPoints();
document.querySelectorAll('.ac').forEach(card=>{
const old=card.querySelector('.points-badge');
if(old)old.remove();
const emailText=card.querySelector('.acet')?.textContent;
if(!emailText||typeof accounts==='undefined')return;
const acc=accounts.find(a=>a.email===emailText);
if(!acc)return;
const pts=getPoints(acc);
const badge=document.createElement('div');
badge.className='points-badge';
badge.style.cssText='text-align:center;margin-top:8px;color:#2dd4bf;font-size:.85rem;font-weight:700';
badge.textContent=pts>0?'⭐ '+pts+' نقاط':'—';
const emailEl=card.querySelector('.ace');
if(emailEl)emailEl.parentNode.insertBefore(badge,emailEl.nextSibling);
});
}
const _orig=window.renderAccounts;
window.renderAccounts=function(){if(_orig)_orig.apply(this,arguments);setTimeout(updatePointsDisplay,200)};
window.addEventListener('load',()=>setTimeout(updatePointsDisplay,800));
