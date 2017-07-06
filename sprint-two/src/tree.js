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
  for (var index = 0; index < this.children.length; index++) {
    if (this.children[index].value === target) {
      return true;
    } else if (this.children[index].children.length > 0) {
      //console.log('grandchildren');
      return this.children[index].contains(target);
    } else {
      return false;
    }
  }
  
  
  
  
  //return this.children.includes(target);
  /*if (flag === undefined) {
    flag = false;
  }
  if (this.value === target) {
    flag = true;
    console.log(flag);
    return flag;
  }
  if (this.value !== target && this.children.length > 0) {
    //this.children.forEach(this.contains(target, flag));
    for (var i = 0; i < this['children'].length; i++) {
      console.log(flag);
      this.children[i].contains(target, flag);
    }
    console.log('for each');
    console.log(flag);
    return flag;
  }
  if (this.value !== target && this.children.length === 0) {
    console.log('not found');
    console.log(flag);
    return flag;
  } */
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
