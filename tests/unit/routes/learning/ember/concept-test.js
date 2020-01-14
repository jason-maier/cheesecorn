import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | learning/ember/concept', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:learning/ember/concept');
    assert.ok(route);
  });
});
