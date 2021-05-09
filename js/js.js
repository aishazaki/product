
var myvideo = document.getElementById("video1")   
function playPause() {
    if (myvideo.paused) {
        myvideo.play();
    } else {
        myvideo.pause();
    }
}
// والتي تظهر رسالة خطأ عندما يقوم المستخدم بإدخال معلومات خاطئة validate() شيفرة التابع

$(document).ready(function() {
    $(function () {
        $("#commentForm").validate();
    });
});/*validate()هى تابع لتطبيق مكتبة جيكويري فاليديت  */