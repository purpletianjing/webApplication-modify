function Question(name,type,value,realValue) {
  this.name = name;
  this.type = type;
  this.value = value;
  this.realValue = realValue;
}

Question.prototype.getScore = function() {
  var typeStragy = TypeStragy(this.name,this.type,this.value,this.realValue);
  return typeStragy.typyGetScore();
};
