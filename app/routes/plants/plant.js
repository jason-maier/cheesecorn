import Route from '@ember/routing/route';

export default Route.extend({
  buildRouteInfoMetadata() {
    return {
      breadcrumb(model) {
        return model;
      }
    };
  },

  model(params) {
    return params.plant_id;
  },

  renderTemplate(controller, model) {
    this.render(`plants/${model}`);
  }
});
