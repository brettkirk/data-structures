var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.index.valueOf()] = value;
  this.index++;
};
Stack.prototype.pop = function() {
  var temp = this.storage[this.index.valueOf() - 1];
  delete this.storage[this.index.valueOf() - 1];
  if (this.index > 0) {
    this.index--;
  }
  return temp;
};
Stack.prototype.size = function() {
  return this.index;
};


