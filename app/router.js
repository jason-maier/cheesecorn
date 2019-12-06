import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('learning', { path: '/learning' }, function(){
    this.route('cs50', {path: '/cs50'})
  });
  this.route('stuff', { path: '/stuff' });
});

export default Router;
