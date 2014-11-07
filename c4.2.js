/*jshint node:true*/
'use strict';

var Stack = require('./stack');

// 2 + 4 into 2 4 +

var infix = function(postfix) {
    var output = '';
    var opns = new Stack();
    var oprs = new Stack();

    //loops throught the postfix to fill onps and oprs stacks
    for(var i = 0; i < postfix.length; i++){
	// catches the numbers and filles it to opns
	if (!isNaN(postfix[i])){
	    console.log('found a ', postfix[i]);
	}
    }
    return output;
};

console.log(infix('2 + 4'));
