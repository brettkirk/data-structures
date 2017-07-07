var BinarySearchTree = function(value) {
  var binaryTree = {};
  binaryTree.value = value;
  binaryTree.left = undefined;
  binaryTree.right = undefined;
  binaryTree.insert = binaryTreeMethods.insert;
  binaryTree.contains = binaryTreeMethods.contains;
  binaryTree.depthFirstLog = binaryTreeMethods.depthFirstLog;

  return binaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function (value) {
  if (this.value === undefined) {
    this.value = value;
  }
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  if (value > this.value) {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
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


/*
 * Complexity: What is the time complexity of the above functions?
 */
