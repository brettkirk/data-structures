// Instantiate a new graph
var Graph = function() {
  this.edges = [];
  this.nodes = [];
  return graph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      this.nodes.splice(i, 1);
    } 
  }
  this.removeEdge(node, node);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (!this.edges.includes([fromNode, toNode].toString())) {
    return this.edges.includes([toNode, fromNode].toString());
  } else {
    return true;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode].toString());
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (fromNode === toNode) {
    for (var i = 0; i < this.edges.length; i++) {
      var temp = this.edges[i].split(',');
      if (temp.includes(fromNode.toString())) {
        this.edges.splice(i, 1);
      }
    }
    
  } else {
    for (var i = 0; i < this.edges.length; i++) {
      if (this.edges[i] === [fromNode, toNode].toString() || this.edges[i] === [toNode, fromNode].toString() ) {
        this.edges.splice(i, 1);
      }
    }
  }
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(cb);
};

var graph = new Graph();

/*
 * Complexity: What is the time complexity of the above functions?
  addNode: constant

  contains : linear
  
  removeNode: linear

  hasedge: linear

  addEdge: constant

  removeEdge: linear

 */


