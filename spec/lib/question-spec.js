describe("Question test",function() {
  var answer;
  var serilizeResult = [];
  var question;
  beforeEach(function() {
    question = new Question('radio',['A'],['A']);
    serilizeResult = [{
      type:'text',
      name: '1-1',
      value: ['多态', '继承', '封装'],
      realValue: ['多态','继承','封装']
    }, {
      type:'radio',
      name: '2-1',
      value: ['A'],
      realValue: ['A']
    }, {
      type:'checkbox',
      name: '3-1',
      value: ['A','C','D'],
      realValue: ['A','B','D']
    }];
  });

  it("check his name,type and value",function() {
    expect(question.type).toBe('radio');
    expect(question.value).toEqual(['A']);
    expect(question.realValue).toEqual(['A']);
  });
  // it("get score",function(){
  //   expect(question.getScore()).toBe(5);
  // });
});
