import Route from '@ember/routing/route';


export default Route.extend({
  buildRouteInfoMetadata() {
    return {
      breadcrumb() {
        return 'TWIL';
      }
    };
  },

  model() {
    return [
      {
        description: 'Placeholder',
        name: 'TWIL #1',
        number: 1,
        week: 'January 25th, 2020',
      },
    ];
  },
});
