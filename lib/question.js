function Question(name,type,value,realValue) {

  this.type = type;
  this.value = value;
  this.realValue = realValue;
}

Question.prototype.getScore = function() {
  var typeStragy = TypeStragy(this.type,this.value,this.realValue);
  return typeStragy.typeGetScore();
};
