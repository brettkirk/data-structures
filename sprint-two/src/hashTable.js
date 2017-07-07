

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    this._storage[index] = [];
  } else {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i] = [k, v];
      }
    }
  }
  this._storage[index].push([k, v]);
  this._size++;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i].splice(i, 1, []);
    }
  }
  this._size--;
};

HashTable.prototype.resize = function() {
  var storage = this;
  //compare size to limit
  //if size < 25%, create limited array with limit /2
  //if size > 75%, create lim arr with limit * 2
  //delete all vals in current table
  //reassign values by looping through storage var and storage[index]
  //for (i= 0; i < this._storage.length; i++) {this._storage[i] = undefined;}
  
  
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


