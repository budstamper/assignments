Use the built-in .reduce() method on arrays to solve all of these problems

1) Turn an array of numbers into a total of all the numbers


2) Turn an array of numbers into a long string of all those numbers.


3) Turn an array of voter objects into a count of how many people voted

Note: You don't necessarily have to use reduce for this, so try to think of multiple ways you could solve this.


4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once


5) Given an array of arrays, flatten them into a single array

Note: Take a look at Array.concat() to help with this one



6) Given an array of potential voters, return an object representing the results of the vote
Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.


Extra credit
Using AJAX, do a GET request to your own Github repositories endpoint. The URL will be https://api.github.com/users/<YOUR GITHUB USERNAME HERE>/repos.

Once you get the data, use .reduce() to figure out how many watchers you have across all of your repositories. Don't be too disappointed if the number is 0. You're still new at this :)

Note: If you've learned how to use the axios library, you can do this in node. Otherwise, you'll want to run this code in the browser's JavaScript context and either use XMLHttpRequest or jQuery's AJAX methods, meaning you'll need an HTML page and an associated script tag for your JavaScript.