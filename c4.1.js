/*jshint node:true*/
'use strict';

var Stack = require('./stack');

var expTest = function(exp) {

    var e = new Stack();
    var badP = [];

    var length = exp.length;
    for (var i = 0; i < length; i++) {
        e.push(exp[i]);
    }

    console.log(e);

    var nRight = 0;
    var nLeft = 0;
    var rCache = new Stack();
    length = e.top;
    for (i = 0; i < length; i++) {
        if (e.peek() === ')') {
            nRight++;
            rCache.push(e.top);
        }if (e.peek() === '(') {
            nLeft++;
            if (nRight === 0) {
                badP.push(e.top);
                if (nRight > 0) {
                    nRight--;
                }
            } else {
                nLeft--;
                if (nRight > 0) {
                    nRight--;
                }
                rCache.pop();
            }
            //rCache.pop();
        }
        e.pop();
    }

    length = rCache.top;
    for (i = 0; i < length; i++) {
        badP.push(rCache.top);
        rCache.pop();
    }

    return badP;
};

var expression = ')()(((';
console.log(expTest(expression));
