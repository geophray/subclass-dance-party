var BouncyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncy');
  this.$node.css({ animation: 'bounce ' + timeBetweenSteps + 'ms infinite' });
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);

  // var moused = this;
  // moused.$node.on('mouseover', function () {
  //   var mousedSettings = {
  //     height: 300,
  //     width: 300,
  //     background: url('robin.png'),
  //     backgroundSize: '100%'
  //   };
  //   moused.$node.css(mousedSettings);
  // }).on('mouseout', function() {
  //   var styleSettings = {
  //     height: 0,
  //     width: 0
  //   };
  //   moused.$node.css(styleSettings);
  // });
};