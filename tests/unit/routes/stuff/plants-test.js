import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | stuff/plants', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:stuff/plants');
    assert.ok(route);
  });
});
