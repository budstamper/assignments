document.getElementById("square").addEventListener('mouseover',function(){this.style.backgroundColor="blue";});
document.getElementById("square").addEventListener('mousedown',function(){this.style.backgroundColor="red";});
document.getElementById("square").addEventListener('mouseup',function(){this.style.backgroundColor="yellow";});
document.getElementById("square").addEventListener('dblclick',function(){this.style.backgroundColor= "green";});
document.getElementById("square").addEventListener('wheel',function(){this.style.backgroundColor="orange";});
document.getElementById("square").addEventListener('mouseout',function(){this.style.backgroundColor="purple";});


window.addEventListener('keydown', function(e){
    console.log(e);
    if(e.keyCode == 82){
        document.getElementById("square").style.backgroundColor='red';
    }
    else if(e.keyCode == 89){
        document.getElementById("square").style.backgroundColor='yellow';  
    }
    else if(e.keyCode == 66){
        document.getElementById("square").style.backgroundColor='blue';  
    }
    else if(e.keyCode == 79){
        document.getElementById("square").style.backgroundColor='orange';  
    }
    else if(e.keyCode == 71){
        document.getElementById("square").style.backgroundColor='green';  
    }
    else if(e.keyCode == 80){
        document.getElementById("square").style.backgroundColor='purple';  
    }
});