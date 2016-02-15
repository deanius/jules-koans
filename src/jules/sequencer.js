// constructs a sequencer, which adds props to Observable and cretes
// some new methods
module.exports = function(Observable) {
  //start with a direct reference
  var Sequencer = Observable;

  // subscribe and return an array of what this represents into a Promise
  Sequencer.prototype.then = function (success, err) {
    return this
      .toArray()
      .toPromise()
      .then(success, err)
  }

  // allows
  Sequencer.prototype.jules = function(xformer) {
    return xformer(this);
  }

  return Sequencer
}