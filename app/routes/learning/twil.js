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
        description: 'Some helpful helpers and route info metadata',
        name: 'TWIL #1',
        number: 1,
        week: 'January 25th, 2020',
      },
      {
        description: 'System fonts, Headers and Links, and reactivity',
        name: 'TWIL #2',
        number: 2,
        week: 'February 19th, 2020',
      },
    ];
  },
});
