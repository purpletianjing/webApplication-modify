describe("Question test",function() {
  var typeStragy;
  beforeEach(function() {
    typeStragy = new TypeStragy('radio',['A'],['A']);
  });

  it("get score",function(){
    expect(typeStragy.typeGetScore()).toBe(5);
  });
});
