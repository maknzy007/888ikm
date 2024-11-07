// timer.js

// ضبط العد التنازلي
let countdown = 20; // عدد الثواني للعد التنازلي
const countdownElement = document.getElementById('countdown');

// الحصول على الرابط الأصلي من الـ URL
const urlParams = new URLSearchParams(window.location.search);
const redirectUrl = urlParams.get('url');

// التحقق من وجود الرابط المختصر
if (!redirectUrl) {
    alert("الرابط غير صالح!");
    window.location.href = "index.html"; // إعادة التوجيه إلى الصفحة الرئيسية إذا لم يكن هناك رابط
} else {
    // بدء العد التنازلي
    const timer = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(timer);
            window.location.href = decodeURIComponent(redirectUrl); // إعادة التوجيه للرابط المختصر
        }
    }, 1000);
}

// إضافة إعلان بانر إلى صفحة التايمر
document.getElementById('banner-ad').innerHTML = `
    <script type="text/javascript">
        atOptions = {
            'key' : '9cb9c41d6e62d18a8e4065ac1fd9a72c',
            'format' : 'iframe',
            'height' : 60,
            'width' : 468,
            'params' : {}
        };
    </script>
    <script type="text/javascript" src="//www.highperformanceformat.com/9cb9c41d6e62d18a8e4065ac1fd9a72c/invoke.js"></script>
`;
