import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | stuff/plants/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:stuff/plants/index');
    assert.ok(route);
  });
});
