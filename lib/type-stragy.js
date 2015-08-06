function TypeStragy() {

}

TypeStragy.prototype.typeGetScore = function(type, value, realValue) {
  if (type === 'text') {
    var blank = new Blank();
    return blank.getScore(value, realValue);
  } else if (type === 'radio') {
    var singleScore = new SingleChoose();
    return singleScore.getScore(value, realValue);
  } else if (type === 'checkbox') {
    var mutilChoose = new MutilChoose();
    return mutilChoose.getScore(value, realValue);
  }
};
