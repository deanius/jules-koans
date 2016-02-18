var Rx = require('rx'),
  Examples = require('../src/jules/examples');


QUnit.module('Basic Sequencing')

test('Single Stroke Roll', () => {
  var $roll = new Examples.AlternatingHands()
  $roll.take(4).then(strokes => {
    deepEqual(strokes, ['R', 'L', 'R', 'L'])
  })
  console.log(['R', 'L', 'R', 'L', 'R', 'L', 'R', 'L'])
})
