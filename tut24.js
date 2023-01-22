console.log("Welcome to tutorial 24");
// Date Object: Date & Time In JavaScript

let today = new Date();
// console.log(typeof today);
let otherDate = new Date("8-4-2003 04:54:08");
// otherDate = new Date('June 13 1976');
// otherDate = new Date('09/16/1976');
console.log(otherDate);
let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
// a = otherDate.getSeconds();
// a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a);
otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);

// Method	                   Description
getFullYear()       //Get the year as a four digit number (yyyy)
getMonth()	        //Get the month as a number (0-11)
getDate()	        //Get the day as a number (1-31)
getHours()	        //Get the hour (0-23)
getMinutes()    	//Get the minute (0-59)
getSeconds()	    //Get the second (0-59)
getMilliseconds()	//Get the millisecond (0-999)
getTime()         	//Get the time (milliseconds since January 1, 1970)
getDay()	        //Get the weekday as a number (0-6)
Date.now()       	//Get the time. ECMAScript 5.