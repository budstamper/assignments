The Todo API is something we built to help students create web applications with a completely open API to use. Have fun! And don't get too crazy on it...

The baseUrl is: https://api.vschool.io/<yourname>/todo[/<todoId>]

(Where <yourname> is your actual name, i.e.: https://api.vschool.io/jonsmith/todo) and <todoId> is the _id attribute of an already-existing todo item. (Only to be used for GET (one), PUT, and DELETE requests.) See the Using id section below for more info on how to use _id in your requests.

All todo items are tracked by your name so don't forget to enter it in the url.

GET requests
GET all todos: https://api.vschool.io/<yourname>/todo

GET one todo: https://api.vschool.io/<yourname>/todo/<todoId>

POST requests
POST a new todo: https://api.vschool.io/<yourname>/todo

PUT requests
Update (PUT) an existing todo: https://api.vschool.io/<yourname>/todo/<todoId>

DELETE requests
DELETE an existing todo: https://api.vschool.io/<yourname>/todo/<todoId>

The database model looks like this: 
Note: You won't need to mess with sessionId - that is handled automatically

{
    title: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    imgUrl: String,
    completed: Boolean,
    sessionId: {
        type: String,
        required: true
    }
}
Don't worry if that doesn't look familiar to you yet. All it means is that you can submit a JavaScript object that looks like this (notice that the title property MUST be included in your object in order to work):

var newTodo = {  
    title: "Title here", // this one is the only thing that is actually required
    description: "Description here",
    price: 20, // Must be a number of some kind (integer or float)
    imgUrl: "http://www.example.com/some-link-to-a-cool-photo.jpg",
    completed: false // must be a boolean (true or false). If nothing provided, defaults to false.
};
Any properties you submit to the server that aren't title, description, price, imgUrl, or completed will be ignored, so make sure you're spelling everything exactly right.

The JSON you'll get back (or rather, the object that gets saved in the database) will look a little more like this:

{
    "_id": "5630dcfcac2dfab2428b8c02",
    "sessionId": "jonsmith",
    "title": "Title here",
    "price": 20,
    "description": "Description here",
    "completed": false,
    "imgUrl": "http://www.example.com/some-link-to-a-cool-photo.jpg",
    "__v": 0
  }
Using _id   (This is useful for doing your PUT and  DELETE Request)

Notice when you perform a GET request of any kind, the object(s) you're given back contain an _id attribute (see above example). This is added by MongoDB for us, and we can use it when performing a GET (one), PUT, or DELETE to access the correct todo item in the database. E.g.:

// Get all the todos from the database and assign them to the variable "todoList"
axios.get("https://api.vschool.io/jonsmith/todo/").then(function(response) {  
    var todoList = response.data;
});

// Let's assume I've also added a delete button next to each todo item in my view 
// I can add an click handler and this will pass the entire todo object to the function we called.

var deleteTodo = function(singleTodoObject) {  
// This "singleTodoObject" I passed in has an attribute "_id" I can use to delete it
// I just need to add that "_id" to the end of my URL to which I'm sending this DELETE request
    axios.delete("https://api.vschool.io/jonsmith/todo/" + singleTodoObject._id).then(function(response) {
        // This made a DELETE request to "https://api.vschool.io/jonsmith/todo/5630dcfcac2dfab2428b8c02"
        // Assuming I used the object from the example above.
        alert("Your todo was successfully deleted!")
    }, function(response) {
        alert("There was a problem deleting your todo :(");
    });
};