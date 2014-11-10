/*jshint node:true*/
'use strict';

var Node = function(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
};

var LList = function() {
    this.head = new Node('head');
};

LList.prototype = {
    dispReverse: function() {
        var currNode = this.head;
        currNode = this.findLast();
        while (currNode.previous !== null) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    },
    findLast: function() {
        var currNode = this.head;
        while (currNode.next !== null) {
            currNode = currNode.next;
        }
        return currNode;
    },
    remove: function(item) {
        var currNode = this.find(item);
        if (currNode.next !== null) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    },
    find: function(item) {
        var currNode = this.head;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    },
    insert: function(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    },
    display: function() {
        var currNode = this.head;
        while (currNode.next !== null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    },
    
    //exercise 1
    advance: function(current, n) {
	while(n>0 && current.next !== null) {
	    current = current.next;
	    n--;
	}
	return current;
    },

    //excercise 2
    back: function(current, n) {
	while(n>0 && this.findPrevious(current) !== null) {
	    current = this.findPrevious(current);
	    n--;
	}
	return current;
    },

    //excercise 3
    show: function (current) {
	console.log(current.element);
    },

    //excercise 6
    add: function(newN, curr) {
	var newNode = new Node(newN);
	curr.next = newNode;
	newNode.next = this.head.next;
    };
	
};

module.exports = LList;
