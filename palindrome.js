/*jshint node:true*/
'use strict';
//This was an excercise shown in chapter 4.

var Stack = require('./stack');

function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var rword = '';
    while (s.length() > 0) {
        rword += s.pop();
    }if (word == rword) {
        return true;
    } else {
        return false;
    }
}

var word = 'hello';
if (isPalindrome(word)) {
    console.log('%s is a palindrome', word);
} else {
    console.log('%s is not a palindrome', word);
}
word = 'racecar';

if (isPalindrome(word)) {
    console.log('%s is a palindrome', word);
} else {
    console.log('%s is not a palindrome', word);
}
