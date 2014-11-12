/*jshint node:true*/
'use strict';

function Node(data, left, right) {
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;

}
Node.prototype = {
    show: function() {
        return this.data;
    }
};

function BST() {
    this.root = null;
    this.count = 0;
    this.eCount = 0;
}
BST.prototype = {
    insert: function(data) {
        var n = new Node(data, null, null);
        this.count++;
        if (this.root === null) {
            this.root = n;
        }
        else {
            var current = this.root;
            var parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current === null) {
                        parent.left = n;
                        break;
                    }
                }
                else {
                    current = current.right;
                    if (current === null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    },
    inOrder: function(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log('word:', node.show());
            console.log('  count:', node.count);
            this.inOrder(node.right);
        }
    },
    preOrder: function(node) {
        if (node !== null) {
            console.log(node.show() + ' ');
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    },
    getMin: function() {
        var current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    },
    getMax: function() {
        var current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    },
    find: function(data) {
        var current = this.root;
        while (current && current.data != data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return current;
    },
    remove: function(data) {
        this.root = this.removeNode(this.root, data);
    },
    removeNode: function(node, data) {
        if (node === null) {
            return null;
        }
        if (data == node.data) {
            // node has no children
            if (node.left === null && node.right === null) {
                return null;
            }
            // node has no left child
            if (node.left === null) {
                return node.right;
            }
            //node has no right child
            if (node.right === null) {
                return node.left;
            }
            // node has two children
            var tempNode = this.getMin(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        }
        else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }
        else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    },
    countNode: function() {
        // excercise 10.1
        console.log('count is', this.count);
    },
    edgeCount: function(node) {
        // excercise 10.2
        this.eCount++;
        if (node !== null) {
            this.edgeCount(node.left);
            //console.log(node.show() + '');
            //console.log('eCount:', this.eCount);
            this.edgeCount(node.right);
        }
    },
    update: function(data) {
        var word = this.find(data);
        word.count++;
        return word;
    }
};

module.exports = BST;
