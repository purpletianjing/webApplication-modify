describe("Question test",function() {
  var answer;
  var serilizeResult = [];
  beforeEach(function() {
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
  val.name,val.type,val.value,val.realValue
  it("check his name,type and value",function() {
    var question = new Question('2-1','radio',['A'],['A']);
    expect(question.name).toBe('2-1');
    expect(question.type).toBe('radio');
    expect(question.value).toEqual(['A']);
    expect(question.realValue).toEqual(['A']);
  });
  it("get score",function(){
    MutilFill.getCorrectAnswer(answer);
    expect(mutilFill.getScore()).toBe(1);
  });
});
