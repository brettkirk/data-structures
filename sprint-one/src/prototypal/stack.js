var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.index.valueOf()] = value;
  this.index++;  
};

stackMethods.pop = function () {
  var temp = this.storage[this.index.valueOf() - 1];
  delete this.storage[this.index.valueOf() - 1];
  if (this.index > 0) {
    this.index--;
  }
  return temp;
};

stackMethods.size = function() {
  return this.index;
};

stackMethods.storage = {};

stackMethods.index = 0;