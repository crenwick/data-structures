/*jshint node:true*/
'use strict';

var Queue = require('./queue');

var isPal = function(word) {
    var p = new Queue();
    var l = word.length;
    var h = (l / 2) + 1;

    //popuplate the queue with the word
    for (var i = 0; i < l; i++) {
        p.enqueue(word[i]);
    }

    //circle the word, checking if the footer matches the heading
    for (i = 0; i < h; i++) {
        if (p.front() !== p.back()) {
            return false;
        }
        p.dequeue();
        p.footerDequeue();
    }
    return true;
};

console.log('hello:', isPal('hello'));
console.log('racecar:', isPal('racecar'));
