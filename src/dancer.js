// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;

  // this.onclick = groupDancers();
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  var moused = this;
  moused.$node.on('mouseover', function () {
    var mousedSettings = {
      border: '0px',
      height: '250',
      width: '250'
    };
    moused.$node.css(mousedSettings);
  });
  // moused.$node.on('mouseleave', function() {
  //   var styleSettings = {
  //     background: 'none',
  //     border: '10px'
  //   };
  //   moused.$node.css(styleSettings);
  // });
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(dancer, newLeft) {
  var styleSettings = {
    left: newLeft + 'px',
    top: '65%'
  };
  dancer.$node.css(styleSettings);
};

Dancer.prototype.getDistance = function(other) {
  // Use pythagorean theorem to figure out hypontenuse
  var a = Math.abs(other.$node.position().left - this.$node.position().left);
  var b = Math.abs(other.$node.position().top - this.$node.position().top);
  var cSquared = a * a + b * b;
  var distance = Math.sqrt(cSquared);
  return distance;
};

// Dancer.prototype.groupDancers = function () {
//   var danceGroup = [];
//   var distances = [];
//   for (var i = 0; i < window.dancers.length; i++) {
//     distances.push(this.getDistance(window.dancers[i]));
//   }
// };