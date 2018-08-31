Your challenge is to build a timer using React and Redux. This is a pair programming exercise, so pick a partner!

Requirements:

Display Minutes and Seconds
Start Button
Stop Button
Reset Button
Style creatively using whatever CSS tools you prefer
Bonus Points:

Display milliseconds.
Create a Lap button that saves the current time and pushes it to an array of laps and displays it.
Tips:

Your redux state should contain the current time, defaulted to zero.
You will need a component to display the time, as well as a separate component which contains the buttons.
Use the Date object to set minutes and seconds easier. For example:
let time = new Date(0);
let secs = date.getSeconds();
// 0
let mins = date.getMinutes();
// 0
setInterval and clearInterval methods will be your best friends.
Good Luck!
