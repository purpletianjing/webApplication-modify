describe("MutilChoose test",function() {
  var mutilChoose = new MutilChoose();
  it('get score',function() {
    expect(mutilChoose.getScore(['A','B'],['A','B'])).toBe(3);
    expect(mutilChoose.getScore(['A'],['A','B'])).toBe(2);
    expect(mutilChoose.getScore(['C'],['A','B'])).toBe(0);
  });
});
