$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function (event) {
    var left = 50;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(window.dancers[i], left);
      left += 35;
    }
    // window.dancers.forEach(function(dancer) {
    //   dancer.lineUp(dancer, left);
    //   left += 35;
    // });

  });

  $('.groupButton').on('click', function() {
    var availableDancers = window.dancers.slice();

    var createGroup = function(group) {
      var groupTop = $('body').height() * Math.random();
      var groupLeft = $('body').width() * Math.random();

      for (var j = 0; j < group.length; j++) {
        group[j].setPosition(groupTop, groupLeft);
      }
    };

    var groupDancers = function(availableDancers) {
      if (availableDancers.length < 3) {
        // Group them together,
        createGroup(availableDancers);
        // Return
        return;
      }

      for (var i = 1; i < availableDancers.length; i++) {
        availableDancers[0]['distance'] = 0;
        availableDancers[i]['distance'] = availableDancers[0].getDistance(availableDancers[i]);
      }

      var sorted = _.sortBy(availableDancers, 'distance');
      var group = sorted.splice(0, 3);

      // var createGroup = function(group) {
      //   var groupTop = $('body').height() * Math.random();
      //   var groupLeft = $('body').width() * Math.random();

      //   for (var j = 0; j < group.length; j++) {
      //     group[j].setPosition(groupTop, groupLeft);
      //   }
      // };

      createGroup(group);

      groupDancers(sorted);

    };

    groupDancers(availableDancers);

  });

});

