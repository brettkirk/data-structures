var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {'index': 0, 'storage': {}};
  stack.push = stackMethods.push;
  stack.pop = stackMethods.pop;
  stack.size = stackMethods.size;
  
  return stack;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.index.valueOf()] = value;
    this.index++;
  },
  pop: function () {
    var temp = this.storage[this.index.valueOf() - 1];
    delete this.storage[this.index.valueOf() - 1];
    if (this.index > 0) {
      this.index--;
    }
    return temp;
  },
  size: function () {
    return this.index;
  }
};


