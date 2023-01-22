// More on JavaScript Events

console.log('This is tut 18');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// // btn.addEventListener('mousedown', func3);
// btn.addEventListener('dblclick', func2);

// function func1(e) {
//     console.log("Thanks", e);
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("Thanks its a double click", e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Thanks its a mouse down ", e);
//     e.preventDefault();
// }
// document.querySelector('.no').addEventListener('mouseenter', function(){


//     console.log('You entered no')
// })

// document.querySelector('.no').addEventListener('mouseleave', function(){
//     console.log('You exited no')
// })

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`;
    console.log('You triggered mouse move event')
})

/*

Dblclick:-
const myclick = document.querySelector('aside');
myclick.addEventListener('dblclick', function (e) {
console.log(“Double click event occur”);});

Mousemove:-
const test= document.getElementById('test');
test.addEventListener('mousemove', function (e) {
console.log(“ Mousemove event occur”);});

Mouseover and mouseout:-
const test= document.getElementById('test');
test.addEventListener("mouseover", function( event ) { event.target.style.color = "red";});

const myclick = document.querySelector('aside');
myclick.addEventListener('dblclick', function (e) {
console.log(“Double click event occur”);});

Mouseenter and mouseleave:-
const mouseTarget = document.getElementById('mouseTarget');
mouseTarget.addEventListener('mouseenter', function(e) {
mouseTarget.style.border = '5px dotted blue';});

const mouseTarget = document.getElementById('mouseTarget');
mouseTarget.addEventListener('mouseleave', function(e){
mouseTarget.style.border = '1px solid red'; });

Mousedown and mouseup:-
myevent.addEventListener('mousedown', function(e) {
    console.log("Mousedown event occur")});

    myevent.addEventListener('mouseup', function(e) {
        console.log("Mouseup event occur")});
        */