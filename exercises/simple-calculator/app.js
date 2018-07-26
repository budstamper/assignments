

document.add.addEventListener('submit', function(event){
    event.preventDefault();
    var num1 = document.add.add1.value;
    var num2 = document.add.add2.value;


    document.getElementById("addResult").innerHTML= Number(num1)+Number(num2);
});

document.subtract.addEventListener('submit', function(event){
    event.preventDefault();
    var num1 = document.subtract.sub1.value;
    var num2 = document.subtract.sub2.value;


    document.getElementById("subResult").innerHTML= Number(num1)-Number(num2);
});

document.multiply.addEventListener('submit', function(event){
    event.preventDefault();
    var num1 = document.multiply.mul1.value;
    var num2 = document.multiply.mul2.value;


    document.getElementById("mulResult").innerHTML= Number(num1)*Number(num2);
});