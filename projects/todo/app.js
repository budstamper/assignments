

axios.get('https://api.vschool.io/bud/todo').then(function(response){
    displayData(response.data)

}).catch(function(err){
    console.log(err)
})

function displayData(arr){
    //grab list from html
    //loop through array
        //for each todo object in the array
        //create a text element (p, h1-16,span)
        //Put todo text in the text element
        //Append text element to list on DOM
}