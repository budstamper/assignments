function fizzBuzz(){
      var arr = [];
      for(var i=0;i<101;i++){
        if(i%3===0 && i%5===0){
          arr.push("FizzBuzz");
        } else if(i%3===0){
          arr.push("Fizz");
        } else if(i%5===0){
          arr.push("Buzz");
        } else { arr.push(i);}
      }
      var str = arr.join(" ");
      console.log(str);
    }
    
    fizzBuzz();
    