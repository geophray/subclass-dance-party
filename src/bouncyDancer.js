var BouncyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncy');
  this.$node.css({ animation: 'bounce ' + timeBetweenSteps + 'ms infinite' });
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
};