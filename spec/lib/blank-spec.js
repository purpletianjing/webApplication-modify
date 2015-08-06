describe("Blank test",function() {
  var blank = new Blank();

  it("Whether get score is true",function() {
    expect(blank.getScore(['统一建模语言'],['统一建模语言'])).toBe(1);
    expect(blank.getScore(['jing'],['统一建模语言'])).toBe(0);
    expect(blank.getScore(['继承'],['继承','封装','多态'])).toBe(1);
    expect(blank.getScore(['继承','封装','多态'],['继承','封装','多态'])).toBe(3);
    expect(blank.getScore(['继承','多态','多态'],['继承','封装','多态'])).toBe(2);

  });
});
