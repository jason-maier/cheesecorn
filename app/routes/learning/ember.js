import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        name: 'Templates',
        description: 'The building blocks of Ember. Spoiler alert: it ends up being a bunch of HTML at the end.',
      },
      { name: 'Components' },
    ];
  }
});
