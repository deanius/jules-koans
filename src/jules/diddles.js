var Rx = require('rx'),
  Sequencer = require('./sequencer')(Rx.Observable);

module.exports = {
  // take 3, double the last one, turning RLRL RLRL into RLRR LRLL
  paradiddle: $roll => {
    return $roll
      .windowWithCount(3)
      .map(group => {
        group.push(group[group.length-1]);
        return group;
      });
  }
}
