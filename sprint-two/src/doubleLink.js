var doubleLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.tail === null) {
      this.tail = Node(value);
      if (this.head === null) {
        this.head = this.tail;
        this.head.next = this.tail;
      }
    } else {
      this.tail.next = Node(value, this);
      this.tail = this.tail.next;
    }
  };

  list.addToHead = function (value) {
    if (this.head === null) {
      this.head = Node(value);
      if (this.tail === null) {
        this.tail = this.head;
        this.head.next = this.tail;
      }
    } else {
      this.head.previous = Node(value, this);
      this.head = this.head.previous;
    }
  };

  list.removeHead = function() {
    var oldHead = this.head;
    this.head = this.head.next;
    return oldHead.value;
  };

  list.removeTail = function() {
    var oldTail = this.tail;
    this.tail = this.tail.previous;
    return oldTail.value;
  };

  list.contains = function(target) {
    var isMatch = false;
    for (var key in this) {
      if (this[key]['value'] === target && typeof (this[key]) !== 'function') {
        isMatch = true;
        continue;
      }
    }
    return isMatch;
  };  

  return list;  
};

var Node = function(value, parent) {
  var node = {};

  if (parent === undefined) {
    parent = null;
  }

  node.value = value;
  node.next = null;
  node.previous = parent;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

  addtoTail: constant

  removeHead: constant

  contains : linear 
 */
