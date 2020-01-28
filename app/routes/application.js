import Route from '@ember/routing/route';

export default Route.extend({
  buildRouteInfoMetadata() {
    return {
      breadcrumb() {
        return 'Cheesecorn';
      }
    };
  },
});
