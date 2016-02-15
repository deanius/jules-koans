var Rx = require('rx'),
  Examples = require('../src/jules/examples'),
  Diddles = require('../src/jules/diddles');

QUnit.module('Stream Diddling')

test('simple diddle', () => {
  var roll = new Examples.AlternatingHands()
  roll.jules(Diddles.paradiddle).take(2).then(strokes => {
    deepEqual(strokes, ['R', 'L', 'R', 'R', 'L', 'R', 'R', 'L'])
  })
  console.log(['R', 'L', 'R', 'R', 'L', 'R', 'R', 'L'])
})