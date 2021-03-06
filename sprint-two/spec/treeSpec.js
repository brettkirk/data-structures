describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild", "contains", "removeFromParent", and "traverse", and properties named "value", and "parent"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('parent')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('child should have parent', function() {
    tree.addChild(5);
    tree.children[0].addChild(42);
    expect(tree.children[0].children[0].value).to.equal(42);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly apply a callback to every node of the tree', function() {
    var func = function (obj) { obj.value++; };
    tree.addChild(5);
    tree.addChild(7);
    tree.children[0].addChild(9);
    tree.children[1].addChild(11);
    tree.traverse(func);
    expect(tree.contains(6)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
    expect(tree.contains(10)).to.equal(true);
    expect(tree.contains(12)).to.equal(true);
  });

  it('should correctly detect the head node', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(undefined)).to.equal(true);
    expect(tree.contains()).to.equal(true);
  });

  it('if removeFromParent is called, parent should not have child', function() {
    tree.addChild(5);
    tree.children[0].addChild(42);
    tree.children[0].addChild(7);
    expect(tree.children[0].children[0].value).to.equal(42);
    tree.children[0].children[0].removeFromParent();
    expect(tree.children[0].children[0].value).to.equal(7);
  });

});
