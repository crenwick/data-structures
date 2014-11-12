/*jshint node:true*/
'use strict';

var BST = require('./bst');
var text = 'Once upon a midnight dreary, while I pondered, weak and weary Over many a quaint and curious volume of forgotten lore While I nodded, nearly napping, suddenly there came a tapping, As of some one gently rapping, rapping at my chamber door—Tis some visitor, I muttered, tapping at my chamber door Only this and nothing more.';

var expTest = function() {
    var nums = new BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);
    nums.countNode();
    nums.edgeCount(nums.root);
    console.log('edge count is', nums.eCount);

    var wordTree = new BST();

    var textNoP = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    var splitText = textNoP.split(' ');
    var l = splitText.length;
    //console.log(splitText);
    for (var i = 0; i < l; i++) {
        var aWord = wordTree.find(splitText[i]);
        if (aWord === null) {
            wordTree.insert(splitText[i]);
        } else {
            wordTree.update(splitText[i]);
        }
    }
    wordTree.inOrder(wordTree.root);
};

expTest();
