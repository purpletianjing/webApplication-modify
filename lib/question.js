function Question(type,value,realValue) {

  this.type = type;
  this.value = value;
  this.realValue = realValue;
}

Question.prototype.getScore = function() {
  var typeStragy = new TypeStragy();
  return typeStragy.typeGetScore(this.type,this.value,this.realValue);
};
