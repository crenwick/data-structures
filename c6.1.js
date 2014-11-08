/*jshint node:true*/
'use strict';

var LList = require('./llist');

var cities = new LList();
cities.insert('conway', 'head');
cities.insert('russelville', 'conway');
cities.insert('carl', 'russelville');
cities.insert('alma', 'carl');
cities.display();
cities.remove('carl');
cities.display();
console.log('revserse: ');
console.log(cities.dispReverse());
//implent a advance(n) function that moves the node forward
//implement a back(n)
//implement a show(node) function

//write a program to keep track of a set of test grades

//40 roman soldiers in a circle
//kill every third
