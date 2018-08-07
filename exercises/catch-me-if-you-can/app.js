function sum(x, y){  
    if(typeof x!=='number' || typeof y!=='number'){throw console.log("Enter numbers only")}
    else{return x + y;}
  }

  try{
      sum('1', '2')
  }catch(err){
      console.log(err)
  }

  //user object
  var obj = {username: "user", password: '1234'}

  function login(str1, str2){
      if(str1 !==obj.username || str2 !== obj.password){
          throw console.log("user or password does not match")
      } else{console.log("log in successful")}
  }

  try{
    login("user", "1234")
  }catch(err){
      console.log(err)
  }

  try{
    login("userasdf", "12sadfa34")
  }catch(err){
      console.log(err)
  }