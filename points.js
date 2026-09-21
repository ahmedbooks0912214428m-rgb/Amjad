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

function addPointsStat() {
    const statsGrid = document.querySelector('.sg');
    if (!statsGrid) return;
    if (document.getElementById('tp')) return;
    const pointCard = document.createElement('div');
    pointCard.className = 'sc';
    pointCard.innerHTML = '<span class="l">⭐ إجمالي النقاط</span><span class="v" id="tp" style="color:#2dd4bf">0</span>';
    statsGrid.appendChild(pointCard);
}

function updatePointsDisplay() {
    const tp = document.getElementById('tp');
    if (tp) tp.textContent = getTotalPoints();
}

function addPointsToCards() {
    document.querySelectorAll('.ac').forEach(card => {
        if (card.querySelector('.points-badge')) return;
        const emailEl = card.querySelector('.ace');
        if (!emailEl) return;
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

function addPointsToTable() {
    document.querySelectorAll('#at tr').forEach(tr => {
        if (tr.querySelector('.points-cell-added')) return;
        const cells = tr.querySelectorAll('td');
        if (cells.length < 8) return;
        const emailText = cells[1]?.querySelector('.et')?.textContent;
        if (!emailText || typeof accounts === 'undefined') return;
        const acc = accounts.find(a => a.email === emailText);
        if (!acc) return;
        const pts = getPoints(acc);
        const newCell = document.createElement('td');
        newCell.className = 'points-cell-added';
        newCell.style.cssText = 'color:#2dd4bf;font-weight:700;font-size:.85rem;text-align:center';
        newCell.textContent = pts > 0 ? '⭐ ' + pts : '—';
        cells[6].insertAdjacentElement('afterend', newCell);
        tr.querySelector('thead')?.insertAdjacentHTML('beforeend','<th>⭐ نقاط</th>');
    });
}

const _origRenderAccounts = window.renderAccounts;
window.renderAccounts = function() {
    if (_origRenderAccounts) _origRenderAccounts.apply(this, arguments);
    setTimeout(() => {
        addPointsStat();
        updatePointsDisplay();
        addPointsToCards();
        addPointsToTable();
    }, 50);
};

window.addEventListener('load', () => {
    setTimeout(() => {
        addPointsStat();
        updatePointsDisplay();
        addPointsToCards();
        addPointsToTable();
    }, 600);
});