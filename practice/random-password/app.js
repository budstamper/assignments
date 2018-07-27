function randPassword(num){
    var str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&?"
    var password=""

    for(var i=0; i<num;i++){
        var ii = Math.floor(Math.random()*str.length);
        password+=str[ii];
    }
    console.log(password);
    return password;
}

randPassword(2000);