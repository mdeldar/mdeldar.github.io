"use strict";
var image_arr = ["files/Gallery/1.jpg"
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
function colorchange1(a){
    var but=document.getElementsByTagName("button");
    if (a==1) {
         but[0].style.background="red";
    }
   else{
       but[1].style.background="red";
   }
    
    
        
}

    

function originalcolor(a){
    var but=document.getElementsByTagName("button");
    if (a==1){
         but[0].style.background="chocolate";

    }
    else{
          but[1].style.background="chocolate";

    }
   
  
    
}
  
 

setInterval(next,15000);


