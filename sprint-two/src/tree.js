var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  // your code here
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

/*
            undefined 3
        a      b       c    
      1  2     3     4  5  6
            

*/
treeMethods.contains = function(target) {
  //var isFound = false;
  var matches = [];
  /*for (var index = 0; index < this.children.length; index++) {
    if (this.children[index].value === target) {
      isFound = true;
    } else if (this.children[index].children.length > 0) {
      //console.log('grandchildren');
      if (this.children[index].contains(target)) {
        continue;
      }
    } else {
      return false;
    } 
  } */
  
  //return isFound;
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
 */
