function Blank() {

}

Blank.reduceRepeat = function(result,value) {
  var resultObject = {};
  value.forEach(function(val) {
    if(resultObject[val] !== 1) {
      resultObject[val] = 1;
      result.push(val);
    }
  });
};

Blank.everyBlank = function(value,realValue) {
  var score = 0;
    if(realValue.indexOf(value) !== -1) {
      score++;
      return score;
    }
};

Blank.prototype.getScore = function(value,realValue) {
  var score = 0;
  Blank.reduceRepeat(value,realValue);
  value.forEach(function(val) {
    score = Blank.everyBlank(val,realValue);
  });
  return score;
};
