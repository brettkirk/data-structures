var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var matches = [];
  
  var matchFinder = function(node, target) {
    if (node['value'] === target) {
      matches.push(node);
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



/*
 * Complexity: What is the time complexity of the above functions?

  addChild: constant

  contains: linear

 */
