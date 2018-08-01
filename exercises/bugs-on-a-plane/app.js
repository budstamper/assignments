//var form = document.getElementByID("airline-form");
//var submit = document.getElementByID("submit");
//var query = document.querySelector;

console.log("loaded");

document.getElementById("submit").addEventListener('click', function(e){
    e.preventDefault();
    console.log("here");

    var firstName = document.airlineForm.firstname.value;
    var lastName = document.airlineForm.lastname.value;
    var age = document.airlineForm.age.value;
    var gender = document.airlineForm.gender.value;
    var location = document.airlineForm.travellocation.value;
    var diet = [];
    var diet2 = document.querySelectorAll('input[name=diet]:checked');
    for(var i =0;i<diet2.length;i++){
        diet.push(diet2[i].value);
    }
    // if (airlineForm.vegan.checked) {
    //     diet.push(document.getElementById("vegan").value);
    // }
    // if (airlineForm.elements['gluten'].checked) {
    //     diet.push(document.getElementById('gluten').value);
    // }
    // if (airlineForm.elements['paleo'].checked) {
    //     diet.push(document.getElementById('paleo').value);
    // }


    window.alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
})

console.log("booted")