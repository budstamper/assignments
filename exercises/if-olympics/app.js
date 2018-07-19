if(5>3){
    console.log("is greater than");
}

if("cat".length === 3){
    console.log("is the length");
}

if("cat"==="dog"){

} else{console.log("not the same");}

var person = {  
    name: "Bobby",
    age: 12,
  }

if(person.age>=18){
    console.log(`${person.name} is allowed to go to the movie`);
} else{    console.log(`${person.name} is not allowed to go to the movie`);
}

if(person.name.charAt(0)==="B"){
    console.log(`${person.name} is allowed to go to the movie`);
} else{console.log(`${person.name} is not allowed to go to the movie`);
}

if(person.name.charAt(0)==="B" && person.age>=18){
    console.log(`${person.name} is allowed to go to the movie`);
} else{console.log(`${person.name} is not allowed to go to the movie`);
}

if(1==="1"){
    console.log("strict");
} else if(1=="1"){
    console.log("loose");
} else{console.log("not equal at all");}

if((1<=2 && 2===4) || (3*4>10 && 5+10>10)){
    console.log("yes");
}

if(typeOf("dog")==="string"){
    console.log("yea");
}else{    console.log("no");
}

if(typeOf("true")==="boolean"){
    console.log("yea");
}else{    console.log("no");
}

if(myVariable){
    console.log("yea");
}else{    console.log("no");
}

if(c>5){
    console.log("yea");
}else{    console.log("no");
}

var myNum = 10;
myNum%2===0 ? console.log("even") : console.log("odd");