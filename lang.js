// ==========================================
// نظام اللغات - عربي وإنجليزي
// ==========================================

const LANGS = {
    ar: {
        // العناوين
        title: 'إدارة الحسابات',
        appTitle: 'إدارة الحسابات',
        
        // الإحصائيات
        total: '📊 الإجمالي',
        usdTotal: '💰 الإجمالي بالدولار',
        american: 'أمريكي',
        hongkong: 'هونغ كونغ',
        japanese: 'ياباني',
        sudanese: 'سوداني',
        
        // الرسوم البيانية
        pieChart: '📊 توزيع الأنواع',
        barChart: '📈 عدد الحسابات',
        
        // التبويبات
        single: '➕ فردية',
        bulk: '📦 جماعية',
        advancedFilters: '🔍 بحث متقدم',
        
        // فورم الإضافة
        addSingle: '➕ إضافة حساب واحد',
        email: 'البريد الإلكتروني',
        type: 'النوع',
        price: 'السعر',
        currency: 'العملة',
        tag: '🏷️ تاج',
        addBtn: '➕ إضافة',
        
        // الإضافة الجماعية
        addBulk: '📦 إضافة جماعية',
        hintTitle: '🧠 النظام يستوعب أي صيغة:',
        defaultType: 'النوع الافتراضي',
        duplicate: 'التكرار',
        skip: 'تخطي',
        update: 'تحديث',
        addAll: '📥 إضافة الكل',
        example: '📋 مثال',
        clear: '🧹 تفريغ',
        
        // البحث المتقدم
        advancedSearch: '🔍 بحث متقدم',
        priceFrom: 'السعر من (USD)',
        priceTo: 'السعر إلى (USD)',
        dateFrom: 'التاريخ من',
        dateTo: 'التاريخ إلى',
        applyFilter: '🔍 تطبيق البحث',
        clearFilter: '🧹 مسح البحث',
        
        // البحث والفلترة
        search: '🔍 ابحث...',
        all: 'الكل',
        
        // الأزرار
        sync: '🔄 مزامنة',
        backup: '💾 نسخة',
        restore: '📂 استيراد',
        html: '🌐 HTML',
        pdf: '📄 PDF',
        csv: '📥 CSV',
        clearAll: '🗑️ مسح الكل',
        actions: 'إجراء',
        date: '📅 تاريخ',
        
        // تأكيد المسح
        confirmClear: '⚠️ تأكيد المسح',
        confirmClearMsg: 'هل أنت متأكد من مسح جميع الحسابات؟ لا يمكن التراجع!',
        cancel: '❌ إلغاء',
        delete: '🗑️ مسح',
        
        // رسائل التنبيه
        noData: '⚠️ لا توجد بيانات!',
        enterEmail: '⚠️ أدخل البريد الإلكتروني!',
        invalidEmail: '⚠️ بريد إلكتروني غير صالح!',
        enterPrice: '⚠️ أدخل سعر صحيح!',
        emailExists: '⚠️ هذا البريد موجود مسبقاً!',
        added: '✅ تم إضافة الحساب',
        addedSudanese: '✅ تم إضافة حساب سوداني',
        saved: '✅ تم الحفظ',
        deleted: '🗑️ تم الحذف',
        cleared: '🗑️ تم مسح الكل',
        
        // رسائل المزامنة
        syncing: '🔄 جاري المزامنة...',
        synced: '✅ تمت المزامنة!',
        syncOnline: '✅ متزامن',
        syncOffline: '⚠️ غير متصل',
        syncSyncing: '⏳ جاري المزامنة',
        
        // رسائل النسخ
        backupDone: '💾 تم تحميل النسخة الاحتياطية!',
        restoreDone: '✅ تم استيراد الحسابات!',
        invalidFile: '❌ ملف غير صالح!',
        copied: '📋 تم النسخ',
        
        // رسائل الإدخال
        pasteData: '⚠️ الصق البيانات أولاً!',
        exampleLoaded: '📋 تم تحميل المثال',
        clearedInput: '🧹 تم التفريغ',
        filterApplied: '🔍 تم تطبيق البحث',
        filterCleared: '🧹 تم مسح البحث'
    },
    
    en: {
        // Titles
        title: 'Accounts Manager',
        appTitle: 'Accounts Manager',
        
        // Statistics
        total: '📊 Total',
        usdTotal: '💰 Total USD',
        american: 'American',
        hongkong: 'Hong Kong',
        japanese: 'Japanese',
        sudanese: 'Sudanese',
        
        // Charts
        pieChart: '📊 Types Distribution',
        barChart: '📈 Accounts Count',
        
        // Tabs
        single: '➕ Single',
        bulk: '📦 Bulk',
        advancedFilters: '🔍 Advanced',
        
        // Add Form
        addSingle: '➕ Add Single Account',
        email: 'Email',
        type: 'Type',
        price: 'Price',
        currency: 'Currency',
        tag: '🏷️ Tag',
        addBtn: '➕ Add',
        
        // Bulk Add
        addBulk: '📦 Bulk Add',
        hintTitle: '🧠 System accepts any format:',
        defaultType: 'Default Type',
        duplicate: 'Duplicate',
        skip: 'Skip',
        update: 'Update',
        addAll: '📥 Add All',
        example: '📋 Example',
        clear: '🧹 Clear',
        
        // Advanced Search
        advancedSearch: '🔍 Advanced Search',
        priceFrom: 'Price From (USD)',
        priceTo: 'Price To (USD)',
        dateFrom: 'Date From',
        dateTo: 'Date To',
        applyFilter: '🔍 Apply Filter',
        clearFilter: '🧹 Clear Filter',
        
        // Search & Filter
        search: '🔍 Search...',
        all: 'All',
        
        // Buttons
        sync: '🔄 Sync',
        backup: '💾 Backup',
        restore: '📂 Restore',
        html: '🌐 HTML',
        pdf: '📄 PDF',
        csv: '📥 CSV',
        clearAll: '🗑️ Clear All',
        actions: 'Actions',
        date: '📅 Date',
        
        // Confirm Clear
        confirmClear: '⚠️ Confirm Clear',
        confirmClearMsg: 'Are you sure you want to delete all accounts? This cannot be undone!',
        cancel: '❌ Cancel',
        delete: '🗑️ Delete',
        
        // Toast Messages
        noData: '⚠️ No data!',
        enterEmail: '⚠️ Enter email!',
        invalidEmail: '⚠️ Invalid email!',
        enterPrice: '⚠️ Enter valid price!',
        emailExists: '⚠️ Email already exists!',
        added: '✅ Account added',
        addedSudanese: '✅ Sudanese account added',
        saved: '✅ Saved',
        deleted: '🗑️ Deleted',
        cleared: '🗑️ Cleared all',
        
        // Sync Messages
        syncing: '🔄 Syncing...',
        synced: '✅ Synced!',
        syncOnline: '✅ Synced',
        syncOffline: '⚠️ Offline',
        syncSyncing: '⏳ Syncing',
        
        // Backup Messages
        backupDone: '💾 Backup downloaded!',
        restoreDone: '✅ Accounts restored!',
        invalidFile: '❌ Invalid file!',
        copied: '📋 Copied',
        
        // Input Messages
        pasteData: '⚠️ Paste data first!',
        exampleLoaded: '📋 Example loaded',
        clearedInput: '🧹 Cleared',
        filterApplied: '🔍 Filter applied',
        filterCleared: '🧹 Filter cleared'
    }
};

// ==========================================
// اللغة الحالية
// ==========================================
let currentLang = localStorage.getItem('amjad_lang') || 'ar';

// ==========================================
// دالة الترجمة
// ==========================================
function t(key) {
    return (LANGS[currentLang] && LANGS[currentLang][key]) || LANGS.ar[key] || key;
}

// ==========================================
// تبديل اللغة
// ==========================================
function toggleLang() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('amjad_lang', currentLang);
    applyLang();
}

// ==========================================
// تطبيق اللغة على الصفحة
// ==========================================
function applyLang() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.textContent = currentLang === 'ar' ? 'EN' : 'ع';
    }
    
    document.title = t('title');
    
    if (typeof renderCharts === 'function' && typeof accounts !== 'undefined') {
        renderCharts();
    }
}