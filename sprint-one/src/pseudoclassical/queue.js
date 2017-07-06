var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.index.valueOf()] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  var temp = this.storage[0];
  for (var key in this.storage) {
    if (this.storage.hasOwnProperty(key)) {
      this.storage[key] = this.storage[+key + 1 ];
    }
  }
  delete this.storage[this.index - 1 ];
  if (this.index > 0) {
    this.index --;
  }
  return temp;
};

Queue.prototype.size = function() {
  return this.index;
};


