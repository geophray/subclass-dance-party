var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pop');
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
    left: '-=20px',
    top: '-=20px',
    height: '20px',
    width: '20px'
  }, this.timeBetweenSteps / 2).animate({
    height: '0px',
    width: '0px'
  }, this.timeBetweenSteps / 2);
  this.$node.toggleClass('bouncy');

};