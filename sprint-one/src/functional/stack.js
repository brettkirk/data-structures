var Stack = function() {
  var someInstance = {};
  var index = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[index] = value;
    index++;
  };

  someInstance.pop = function() {
    var temp = someInstance[ index - 1];
    delete someInstance[index - 1 ];
    if (index > 0) {
      index --;
    }
    return temp;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
