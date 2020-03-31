var PopDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
}

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
    transform: rotateY(180deg);
  });
};