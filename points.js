// ====== نظام النقاط ======
const POINTS_MAP = {
    'أمريكي': 10,
    'هونغ كونغ': 7,
    'ياباني': 5,
    'سوداني': 0
};

function getPoints(acc) {
    return POINTS_MAP[acc.type] || 0;
}

function getTotalPoints() {
    if (typeof accounts === 'undefined') return 0;
    return accounts.reduce((sum, a) => sum + getPoints(a), 0);
}

// إضافة عرض النقاط في الإحصائيات
function addPointsStat() {
    const statsGrid = document.querySelector('.sg');
    if (!statsGrid) return;
    if (document.getElementById('tp')) return;
    
    const pointCard = document.createElement('div');
    pointCard.className = 'sc';
    pointCard.innerHTML = '<span class="l">⭐ إجمالي النقاط</span><span class="v" id="tp" style="color:#2dd4bf">0</span>';
    statsGrid.appendChild(pointCard);
}

// تحديث عرض النقاط
function updatePointsDisplay() {
    const tp = document.getElementById('tp');
    if (tp) tp.textContent = getTotalPoints();
}

// إضافة النقاط في كل كارت
function addPointsToCards() {
    document.querySelectorAll('.ac').forEach(card => {
        if (card.querySelector('.points-badge')) return;
        const emailEl = card.querySelector('.ace');
        if (!emailEl) return;
        
        // البحث عن الحساب بالبريد
        const emailText = emailEl.querySelector('.acet')?.textContent;
        if (!emailText || typeof accounts === 'undefined') return;
        const acc = accounts.find(a => a.email === emailText);
        if (!acc) return;
        
        const pts = getPoints(acc);
        if (pts === 0) return;
        
        const badge = document.createElement('div');
        badge.className = 'points-badge';
        badge.style.cssText = 'text-align:center;margin-top:5px;color:#2dd4bf;font-size:.8rem;font-weight:700';
        badge.textContent = '⭐ ' + pts + ' نقاط';
        emailEl.parentNode.insertBefore(badge, emailEl.nextSibling);
    });
}

// ربط مع تحديث الموقع
const _origRenderAccounts = window.renderAccounts;
window.renderAccounts = function() {
    if (_origRenderAccounts) _origRenderAccounts.apply(this, arguments);
    setTimeout(() => {
        addPointsStat();
        updatePointsDisplay();
        addPointsToCards();
    }, 50);
};

// تشغيل أولي
window.addEventListener('load', () => {
    setTimeout(() => {
        addPointsStat();
        updatePointsDisplay();
        addPointsToCards();
    }, 500);
});
