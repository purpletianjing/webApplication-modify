describe("FormSerilizer Test",function() {
  var testContainer = document.getElementById("test-container");
  var form;
  var correctAnswer = [];
  var scanResult = [];
  beforeEach(function() {
    testContainer.innerHTML = "<form>" +
    "<input type='text' name='1-1' value='多态' />" +
    "<input type='text' name='1-1' value='继承' />" +
    "<input type='text' name='1-1' value='封装' />" +
    "<input type='radio' name='2-1' value='A' checked />" +
    "<input type='radio' name='2-1' value='B'/>" +
    "<input type='radio' name='2-1' value='C'/>" +
    "<input type='radio' name='2-1' value='D'/>" +
    "<input type='checkbox' name='3-1' value='A' checked/>" +
    "<input type='checkbox' name='3-1' value='B' />" +
    "<input type='checkbox' name='3-1' value='C' checked/>" +
    "<input type='checkbox' name='3-1' value='D' checked/>" +
    "</form>";
    form = testContainer.getElementsByTagName("form")[0];
    correctAnswer = [{
      type:'text',
      name: '1-1',
      value: ['多态', '继承', '封装']
    }, {
      type:'radio',
      name: '2-1',
      value: ['A']
    }, {
      type:'checkbox',
      name: '3-1',
      value: ['A','B','D']
    }];
    scanResult = [{
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
  afterEach(function() {
    testContainer.innerHTML = "";
  });
  it("should display result",function() {
    var formSerilizer = new FormSerilizer();
    FormSerilizer.getCorrectAnswer(correctAnswer);
    formSerilizer.formScan(form);
    expect(formSerilizer.result).toEqual(scanResult);
  });
});
