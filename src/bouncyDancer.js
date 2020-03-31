var BouncyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncy');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);

  var moused = this;
  $('.bouncy').on('mouseover', function () {
    var styleSettings = {
      height: 300,
      width: 300
    };
    moused.$node.css(styleSettings);
  });
};