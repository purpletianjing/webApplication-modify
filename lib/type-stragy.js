function TypeStragy() {

}

TypeStragy.prototype.typeGetScore = function(type, value, realValue) {
  if (type === 'text') {
    var blank = new Blank();
    return blank.getScore(value, realValue);
  } else if (type === 'radio') {
    var choose = new Choose();
    return choose.getScore(value, realValue);
  } else if (type === 'checkbox') {
    var mutilChoose = new MutilChoose();
    return mutilChoose.getScore(value, realValue);
  }
};
