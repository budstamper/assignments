function isCaps(letter) {  
    console.log("running")
    return letter === letter.toUpperCase();
  }

  function antiCaps(str){
      var str2="";
      for(var i=0;i<str.length;i++){
          if(isCaps(str[i])){ str2+=str[i].toLowerCase();}
          else{ str2+=str[i].toUpperCase()}
      }
      console.log(str2);
      return str2;

  }

  antiCaps('Hello') // hELLO  
antiCaps('racEcar') // RACeCAR  
antiCaps('bAnAnA') // BaNaNa  