"use strict";

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


