window.onscroll = function () { 
var myNav = document.getElementById('myNav');
    if (document.documentElement.scrollTop >= 50 ) {
        myNav.classList.add("nav-purple");
        myNav.classList.remove("nav-colored");
    } 
    else {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-purple");    
    }
};