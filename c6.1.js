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
