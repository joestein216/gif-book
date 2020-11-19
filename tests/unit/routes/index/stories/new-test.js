import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/stories/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index/stories/new');
    assert.ok(route);
  });
});
