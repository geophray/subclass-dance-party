var BouncyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("bouncy");
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.animate({
    top: '20px'
  }, this.timeBetweenSteps/4).animate({
    top: '10px'
  }, this.timeBetweenSteps/4);

};