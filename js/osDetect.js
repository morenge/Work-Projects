if (/\bCrOS\b/.test(navigator.userAgent)) {

    var modify = document.getElementsByClassName("item-wrapper");
    //    var XXXX = document.getElementsByClassName("XXXX");

    for (var i = 0; i < modify.length; i++) {
        modify[i].classList.add('chrome');

    }
    console.log("This is a Chrome device");
    
    //    ADD ADDITIONAL    
    //    for (var i = 0; i < XXXX.length; i++) {
    //        XXXX[i].classList.add('chrome');
    //
    //    }

} if (/\bWindows\b/.test(navigator.userAgent)) {

    console.log("This is a Windows device");

} 

else {
    console.log(navigator.userAgent);

}
