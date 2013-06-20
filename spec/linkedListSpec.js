describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });


  it("should be able to add nodes", function() {
    linkedList.addToTail('bar1');
    expect(linkedList.tail.value).toEqual('bar1');
  });

  it("should be able to add multiple nodes", function() {
    linkedList.addToTail('bar1');
    linkedList.addToTail('bar2');
    linkedList.addToTail('bar3');
    linkedList.addToTail('bar4');
    expect(linkedList.tail.value).toEqual('bar4');
  });

  it("adding multiple nodes shouldn't change the head", function() {
    linkedList.addToTail('bar1');
    linkedList.addToTail('bar2');
    linkedList.addToTail('bar3');
    linkedList.addToTail('bar4');
    expect(linkedList.head.value).toEqual('bar1');
  });

  it("removeHead should return the correct value", function() {
    linkedList.addToTail('bar1');
    linkedList.addToTail('bar2');
    linkedList.addToTail('bar3');
    linkedList.addToTail('bar4');
    expect(linkedList.removeHead()).toEqual('bar1');
  });

  // it("should have a head and tail", function() {
  //   expect(Object.keys(linkedList)).toContain("head");
  //   expect(Object.keys(linkedList)).toContain("tail");
  // });

  // it("should have a head and tail", function() {
  //   expect(Object.keys(linkedList)).toContain("head");
  //   expect(Object.keys(linkedList)).toContain("tail");
  // });

  // add more tests here to test the functionality of linkedList
});