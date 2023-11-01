// function sayHi() {
//   alert('Hello');
// }
// setTimeout(sayHi, 1000);
// function sayHi(phrase, who) {
//   alert( phrase + ', ' + who );
// }

// setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
// let timerId = setTimeout(...);
// clearTimeout(timerId);
// repeat with the interval of 2 seconds
// let timerId = setInterval(() => alert('tick'), 2000);

// // after 5 seconds stop
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

// let timerId = setTimeout(function tick() {
//   alert('tick');
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
// let delay = 5000;

// let timerId = setTimeout(function request() {
//   // send request

//   if (request failed due to server overload) {
//     // increase the interval to the next run
//     delay *= 2;
//   }

//   timerId = setTimeout(request, delay);

// }, delay);
// let i = 1;
// setInterval(function() {
//   func(i++);
// }, 100);
// let i = 1;
// setTimeout(function run() {
//   func(i++);
//   setTimeout(run, 100);
// }, 100);
setTimeout(() => alert("World"));

alert("Hello");