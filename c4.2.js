/*jshint node:true*/
'use strict';

var Stack = require('./stack');

// 2 + 4 into 2 4 +

var infix = function(postfix) {
    var output = '';
    var opns = new Stack();
    var oprs = new Stack();

    //loops throught the postfix to fill onps and oprs stacks
    for (var i = 0; i < postfix.length; i++) {
        // catches the numbers and filles it to opns
        if (!isNaN(postfix[i]) && postfix[i] !== ' ') {
            console.log('adding to the opns stack: ', postfix[i]);
            opns.push(postfix[i]);
        }
        if (postfix[i] === '+') {
            console.log('adding to the oprs stack: ', postfix[i]);
            oprs.push(postfix[i]);
        }
    }
    var l = opns.top;
    for (i = 0; i < l; i++) {
        output += opns.pop();
        output += ' ';
    }
    l = oprs.top;
    for (i = 0; i < l; i++) {
        output += oprs.pop();
        output += ' ';
    }
    return output;
};

console.log(infix('2 + 4'));
