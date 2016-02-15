var Rx = require('rx'),
  Sequencer = require('./sequencer')(Rx.Observable);

// will enhance
module.exports = {
  AlternatingHands: function () {
    return Sequencer
            .from(['R', 'L'])
            .repeat()
  }
}
