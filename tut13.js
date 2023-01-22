// Exercise 1
// You have to create a variable which is a string containing the text which is a link you are interested in. 

// You have to fetch all the links from a given page which contains this text

// codewithharry.com 
// javascript




let a = document.links;

let myText = 'harry';

Array.from(a).forEach(function (element) {
    if (String(element).includes(myText)) {
        console.log(element);
    }
});



