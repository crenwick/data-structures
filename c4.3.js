/*jshint node:true*/
'use strict';

var Stack = require('./stack');

var dispenser = function(candies) {
    var noYellowR = new Stack();
    var noYellow = new Stack();
    var l = candies.top;
    for (var i = 0; i < l; i++) {
        if (candies.peek() !== 'y'){
            noYellowR.push(candies.peek());
        }
        candies.pop();
    }
    l = noYellowR.top;
    for (var i = 0; i < l; i++) {
        noYellow.push(noYellowR.pop());
    } 
    return noYellow;
};

// input: r, y, y, w, r, y, r
// output: r, w, r, r
var withYellow = new Stack();
withYellow.push('r');
withYellow.push('y');
withYellow.push('y');
withYellow.push('w');
withYellow.push('r');
withYellow.push('y');
withYellow.push('r');
console.log(dispenser(withYellow));