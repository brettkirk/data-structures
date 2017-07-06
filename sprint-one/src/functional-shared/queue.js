var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {'index': 0, 'storage': {}};
  queue.enqueue = queueMethods.enqueue;
  queue.dequeue = queueMethods.dequeue;
  queue.size = queueMethods.size;
  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.index.valueOf()] = value;
    this.index++;
  },
  dequeue: function() {
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
  },
  size: function() {
    return this.index;
  }
};


