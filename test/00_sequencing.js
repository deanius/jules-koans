var Rx = require('rx'),
  Sequencer = Rx.Observable
require('../src/jules/sequencer')


QUnit.module('Basic Sequencing')

// QUnit.test( "assert.async() test", function( assert ) {
//   var done = assert.async();
//   var input = $( "#test-input" ).focus();
//   setTimeout(function() {
//     assert.equal( document.activeElement, input[0], "Input was focused" );
//     done();
//   });
// });

seqTest = (name, testFn) => {
  test(name, (assert) => {
    var done = assert.async()
    testFn.call({}, done)
  })
}

asyncTest('simple repeat', () => {
  var hands = ['R', 'L']
  var $hands = Sequencer.from(hands).repeat()
  $hands.take(4).then((seq) => {
    start()
    deepEqual(['R', 'L', 'R', 'L'], seq)
  })
})
