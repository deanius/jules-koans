var Rx = require('rx'),
    subject = require('../src/jules/diddler').diddle

QUnit.module('Stream Diddling');

test('simple diddle', () => {
  equal(subject, true)
});