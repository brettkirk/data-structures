var BinarySearchTree = function(value) {
  var binaryTree = {};
  binaryTree.value = value;
  binaryTree.left = undefined;
  binaryTree.right = undefined;
  binaryTree.insert = binaryTreeMethods.insert;
  binaryTree.contains = binaryTreeMethods.contains;
  binaryTree.depthFirstLog = binaryTreeMethods.depthFirstLog;
  binaryTree.breadthFirstLog = binaryTreeMethods.breadthFirstLog;
  return binaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function (value) {
  //var depth = 0;
  //var buildTree = function (value, depth) {
  if (this.value === undefined) {
    this.value = value;
    //this.depth = depth
  }
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      //depth++
      this.left.insert(value);
    }
  }
  if (value > this.value) {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      //depth++
      this.right.insert(value);
    }
  }
  return;
};

binaryTreeMethods.contains = function (value) {
  var result = false;

  var matchFinder = function(tree, value) {
    if (tree.value === value) {
      result = true;
      return;
    }
    if (value < tree.value) {
      if (tree.left === undefined) {
        return;
      } else {
        matchFinder(tree.left, value);
      }
    }
    if (value > tree.value) {
      if (tree.right === undefined) {
        return;
      } else {
        matchFinder(tree.right, value);
      }
    }
  };
  
  matchFinder(this, value);
  return result;
};

binaryTreeMethods.depthFirstLog = function (callback) {
  callback(this.value);
  
  if (this.left !== undefined) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(callback);
  } else {
    return;
  }
  
  
};

binaryTreeMethods.breadthFirstLog = function () {
  results = [];
  results.push(this);
  counter = 0;
  var breadthTraversal = function (node) {
    if (typeof(node) === 'object') {
      if (node.left !== undefined) {
        results.push(node.left);
      }
      if (node.right !== undefined) {
        results.push(node.right);
      }
      counter++;
      breadthTraversal(results[counter]);
    } else {
      return;
    }
    
  };
  
  breadthTraversal(this);
  results = results.map(function(element) {
    return element.value;
  });
  
  return results;
};

/*
 * Complexity: What is the time complexity of the above functions?

  insert : logarithmic

  contains: logarithmic

  depthFirst: linear

 */
