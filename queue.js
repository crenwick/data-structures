/*jshint node:true*/
'use strict';

function Queue() {
    this.dataStore = [];
}

Queue.prototype = {
    enqueue: function(element) {
        this.dataStore.push(element);
    },
    dequeue: function() {
        return this.dataStore.shift();
    },
    front: function() {
        return this.dataStore[0];
    },
    back: function() {
        return this.dataStore[this.dataStore.length - 1];
    },
    toString: function() {
        var retStr = '';
        for (var i = 0; i < this.dataStore.length; i++) {
            retStr += this.dataStore[i] + '\n';
        }
        return retStr;
    },
    empty: function() {
        if (this.dataStore.length === 0) {
            return true;
        } else {
            return false;
        }
    },
    headerEnqueue: function(element) {
        return this.dataStore.unshift(element);
    },
    footerDequeue: function() {
        return this.dataStore.pop();
    }
};

module.exports = Queue;
