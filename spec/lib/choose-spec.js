describe('Choose test',function() {
  var choose = new Choose();
  it("get score",function() {
    expect(choose.getScore(['A'],['A'])).toBe(2);
    expect(choose.getScore(['A'],['B'])).toBe(0);
  });
});
