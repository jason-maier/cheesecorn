import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { name: 'Umbrella' },
      { name: 'Pothos' },
    ];
  }
});
