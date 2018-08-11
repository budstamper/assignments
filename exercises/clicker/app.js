if(localStorage.clicks === undefined){localStorage.setItem("clicks", 0);}
else{localStorage.clicks = localStorage.getItem('clicks')}

function countClicks(){
    localStorage.clicks++
    localStorage.setItem("clicks", localStorage.clicks)
    document.getElementById("count").innerHTML = "You have clicked "+ localStorage.clicks + " times"
}

document.addEventListener('click', countClicks)

setTimeout(function(){  
    document.removeEventListener('click', countClicks)
 }, 30000);