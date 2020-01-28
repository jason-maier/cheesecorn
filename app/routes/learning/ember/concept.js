import Prism from 'prismjs';
import Route from '@ember/routing/route';
import { run } from '@ember/runloop'

export default Route.extend({
  buildRouteInfoMetadata() {
    return {
      breadcrumb(model) {
        return model;
      }
    };
  },

  model(params) {
    return params.concept_id;
  },

  renderTemplate(controller, model) {
    this.render(`learning/ember/${model}`);
  },

  actions: {
    activate() {
      this._super(...arguments);
      run.scheduleOnce('afterRender', Prism.highlightAll);
    }
  }
});
