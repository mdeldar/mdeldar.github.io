function myFunction() {
    var x = document.getElementById("myTopnav");
    var menu=document.getElementById("menu");
    var icon=document.getElementById("mobile-icon");
    if (x.className === "topnav") {
        x.className += " responsive";
        menu.style.height="auto";
        icon.innerHTML='<i class="fa fa-bars fa-rotate-90" aria-hidden="true"></i>';
    } else {
        x.className = "topnav";
        menu.style.height="80px";
        icon.innerHTML='<i class="fa fa-bars " aria-hidden="true"></i>';
    }
}
