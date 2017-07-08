

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._originalLimit = this._limit;
  this._size = 0;
  this._functions = 3;
  this._resizing = false;
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
  this._size++;
  this._storage[index].push([k, v]);
  if (this._size / this._limit >= 0.75 && this._resizing === false) {
    this.resize('grow');
  }
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
  if (this._storage[index] !== undefined) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i].splice(i, 1, []);
      }
    }
    this._size--;
  }
  if (this._size / this._limit <= 0.25 && this._limit > this._originalLimit && this._resizing === false) {
    this.resize('shrink');
  }
};

HashTable.prototype.resize = function(instruction) {
  var storage = [];
  this._resizing = true;
  for (var key in this._storage) {
    if (Array.isArray(this._storage[key])) {
      storage.push(this._storage[key]);
      this.remove(key);
    }
  }

  this._storage = LimitedArray(this._limit);
  if (instruction === 'grow') {
    this._limit = this._limit * 2;
    for (var i = 0; i < storage.length; i++) {
      for (var j = 0; j < storage[i].length; j++) {
        this.insert (storage[i][j][0], storage[i][j][1]);
      }
    }
  } else {
    this._limit = this._limit / 2;
    for (var i = 0; i < storage.length; i++) {
      for (var j = 0; j < storage[i].length; j++) {
        this.insert (storage[i][j][0], storage[i][j][1]);
      }
    }
  }
  
  this._resizing = false;
  //compare size to limit
  //if size < 25%, create limited array with limit /2
  //if size > 75%, create lim arr with limit * 2
  //delete all vals in current table
  //reassign values by looping through storage var and storage[index]
  //for (i= 0; i < this._storage.length; i++) {this._storage[i] = undefined;}
};


/*
 * Complexity: What is the time complexity of the above functions?

  insert: constant

  retrieve: constant

  remove:  constant


 */


