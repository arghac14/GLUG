var toggle = document.getElementById("myToggle");
toggle.addEventListener("click",myToggler);
function myToggler(e){
    var myEvent = e.target;
    if(myEvent.className === 'btn-open'){
        myEvent.className = 'btn-close';
    }
    else if(myEvent.className === 'btn-close'){ 
        myEvent.className = 'btn-open';
    }
}
/*..............................Animation with wow.js and animation.css..............................*/
new WOW().init();