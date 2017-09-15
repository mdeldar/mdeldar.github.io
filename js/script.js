var image_arr = ["files/Gallery/1.jpg",
                 "files/Gallery/2.jpg",
                 "files/Gallery/3.jpg",
                 "files/Gallery/4.jpg",
                 "files/Gallery/5.jpg",
                 "files/Gallery/6.jpg",
                 "files/Gallery/7.jpg",
                 "files/Gallery/8.jpg",
                 "files/Gallery/9.jpg"
                 
                 ];


                
var index = 0;
var time_1;
var time_2;

function next() {
    var slider = document.getElementById("slidebar");
    index=index+1;
    if (index==image_arr.length){
        index=0;
    }
    slider.src = image_arr[index];
    
}

function prev() {
    var slider = document.getElementById("slidebar");
    index=index-1;
    if (index<0){
        index=image_arr.length-1;
    }
    slider.src = image_arr[index];
    
}

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
