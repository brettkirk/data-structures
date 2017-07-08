var LinkedList = function() {
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
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    var oldHead = this.head;
    this.head = this.head.next;
    return oldHead.value;
  };

  list.contains = function(target) {
    var isMatch = false;
    for (var key in this) {
      if (this[key]['value'] === target && typeof (this[key]) !== 'function') {
        console.log(this[key]);
        isMatch = true;
        continue;
      }
    }
    return isMatch;
  };  

  return list;  
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

  addtoTail: constant

  removeHead: constant

  contains : linear 
 */
