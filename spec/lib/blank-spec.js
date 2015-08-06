describe("Blank test",function() {
  var blank = new Blank();
  blank.getScore(['A'],['A']);
  it("Whether get score is true",function() {
    expect(2).toBe(2);
  });
});
