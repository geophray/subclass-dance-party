var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('square');
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({
    // left: '-=10px',
    // top: '-=10px',
    height: '20px',
    width: '20px'
  }, this.timeBetweenSteps / 2).animate({
    // left: '+=10px',
    // top: '+=10px',
    height: '0px',
    width: '0px'
  }, this.timeBetweenSteps / 2);
  this.$node.toggleClass('bouncy');

};