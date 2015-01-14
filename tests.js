'use strict';

var testUtils = require('react/addons').addons.TestUtils;
var test = require('tape');
var scrollView = require('./');

test('Default', function (assert) {
  assert.plan(1);

  var component = testUtils.renderIntoDocument(scrollView());

  assert.deepEqual(component.props.style, {
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch'
  }, 'default style');
});

test('Custom style', function (assert) {
  assert.plan(1);

  var component = testUtils.renderIntoDocument(scrollView({
    style: {
      overflow: 'scroll'
    }
  }));

  assert.deepEqual(component.props.style, {
    overflow: 'scroll'
  }, 'custom style');
});
