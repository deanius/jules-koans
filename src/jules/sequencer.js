Observable = require('rx').Observable

// subscribe and return an array of what this represents into a Promise
Observable.prototype.then = function (success, err) {
  return this
    .toArray()
    .toPromise()
    .then(success, err)
}
