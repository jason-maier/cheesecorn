import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    console.log(params)
    return params.concept_id;
  },

  renderTemplate(controller, model) {
    this.render(`learning/ember/${model}`);
  }
});
