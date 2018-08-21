var str = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

function getDups(str){
    var str2 = str.replace(/[.|,]/, "")
    str2 = str2.split(" ")
    var dups = []
    for(var i = 0; i < str2.length; i++){
        if(str2.indexOf(str2[i]) !== i){
            if(dups.indexOf(str2[i]) === -1){dups.push(str2[i])}
        }
    }
    console.log(dups)
    return dups
}

getDups(str)
