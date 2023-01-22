// Console Logs, Errors, Warnings & More | JavaScript Tutorial


console.time('Your code Took'); /*With the help of console.time() and console.timeEnd() we can find the amount of time spend by a code on execution.*/


console.log('Hello console'); /*This method is used to log(print) the output to the console. We can put anything inside the log(). It can be an array, object, string, boolean, etc. */



console.table({harry: 'this', marks:34}); /*To generate a table inside a console, we use console.table() method. The input must be an array or an object which will be displayed as a table.*/



console.warn('This is a warning'); /*This method is used to log a warning message to the console. By default, the warning message will be highlighted with yellow color.*/



// console.clear(); /*It is used to clear the console. The console will be cleared. In the case of Chrome, a simple overlayed text will be printed on the console.*/


console.timeEnd('Your code Took');


// console.assert(566<189, 'Age >189 is not possible') /*This method writes a message to the console that the assertion failed and the message we provide as a parameter, but only if an expression evaluates to false. If the expression is true, then nothing will happen.*/


// console.error('This is an error') /*Used to log error message to the console. Useful in the testing of code. By default, the error message will be highlighted with red color.*/


// for (i = 0; i<4; i++) {
//     console.count(i);  /*The console.count() method is used to count the number that the function hit by this counting method.*/
//   }


console.group('simple'); 
console.log('Grouped'); 
console.groupEnd('simple'); 
console.log('new section');  /*group() and groupEnd() methods of the console object allow us to group contents in a separate block, indented. Just like the time() and the timeEnd(), they also accept the label, again of the same value*/


/*Custom Console logs:- 
If the user has even a little idea about CSS, they can add Styling to the console logs to make logs Custom. The Syntax for it is to add the CSS styling as a parameter to the logs, which will replace %c in the logs as shown in the example below:*/
const spacing = '8px'; 
const mystyle =  
`padding: ${spacing}; background-color: white; color: blue ; font-style:
italic; border: 1px solid black dotted; font-size: 2em;`; 
console.log('%cCode With Harry', mystyle);