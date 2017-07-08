var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.children = [];  
  newTree.parent = null;
  newTree.removeFromParent = treeMethods.removeFromParent;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
  this.children[this.children.length - 1].parent = this;
};

treeMethods.contains = function(target) {
  var matches = [];
  
  var matchFinder = function(node, target) {
    if (node['value'] === target) {
      matches.push( node);
    }
    node.children.forEach(function(value) {
      matchFinder(value, target);
    });
  };
  matchFinder(this, target);
  if (matches.length > 0) {
    return true;
  }
  return false;
};

treeMethods.removeFromParent = function () {
  dad = this.parent;
  this.parent = null;
  for (var i = 0; i < dad.children.length; i++) {
    if (dad.children[i] === this) {
      dad.children.splice(i, 1);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?

  addChild: constant

  contains: linear

 */
