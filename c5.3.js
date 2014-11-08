/*jshint node:true*/
'use strict';

var Queue = require('./queue');

Queue.prototype.dequeue = function() {
    var entry = 0;
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].code > this.dataStore[entry].code) {
            entry = i;
        }
    }
    return this.dataStore.splice(entry, 1);
};

Queue.prototype.toString = function() {
    var retStr = '';
    for (var i = 0; i < this.dataStore.length; i++) {
        retStr += this.dataStore[i].name + ' code: ' +
            this.dataStore[i].code + '\n';
    }
    return retStr;
};

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

Patient.prototype.queTo = function(queue) {
    queue.enqueue(this);
};

var ed = new Queue();

new Patient('Smith', 5).queTo(ed);
new Patient('Jones', 4).queTo(ed);
new Patient('Fehrenbach', 6).queTo(ed);
new Patient('Brown', 1).queTo(ed);
new Patient('Ingram', 1).queTo(ed);

console.log(ed.toString());
console.log('patient beeing treated:', ed.dequeue());
console.log('patient beeing treated:', ed.dequeue());
console.log('patient beeing treated:', ed.dequeue());
