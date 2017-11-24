var moment = require('moment');

// Jan 1st 1070 00:00:00

// var date = new Date();
// var months = ['Jan','Feb'];
// console.log(date.getMonth());

// var date = moment();
//
// date.add(100, 'year').subtract(14, 'month');
//
// console.log(date.format('MMM'));
// console.log(date.format('MMM YYYY'));
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am
//6:01
var date = moment();
console.log(date.format('h:mm a'));
