import Controller from "@ember/controller";
import { inject } from "@ember/service";
import { computed } from "@ember/object";
import { capitalize } from '@ember/string'

function parents(route) {
  return route.name === "application" ? [route] : [...parents(route.parent), route];
}

export default Controller.extend({
  router: inject(),

  breadcrumbs: computed("router.currentRoute", function() {
    let activeRoutes = parents(this.router.currentRoute);

    if(activeRoutes.length <= 2) return

    return activeRoutes
      .filter(route => route.localName !== "index")
      .map(route => ({
        label: route.metadata && route.metadata.breadcrumb
        ? capitalize(route.metadata.breadcrumb(route.attributes))
        : capitalize(route.localName),
        route: route.name,
        isCurrentPage:
          this.router.currentRoute.name === route.name ||
          route.child.localName === "index"
      }));
  })
});
