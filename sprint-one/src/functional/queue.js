var Queue = function() {
  var someInstance = {};
  var index = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    var temp = storage[0];
    for (var key in storage) {
      if (storage.hasOwnProperty(key)) {
        storage[key] = storage[+key + 1];
      }
    }
    delete storage[index - 1];
    if (index > 0) {
      index--;
    }
    return temp;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
