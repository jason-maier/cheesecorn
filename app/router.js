import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('learning', function(){
    this.route('cs50')
    this.route('ember')
  });
  this.route('stuff');
  this.route('plants', {path: '/plants'}, function(){
    this.route('index', { path: '/' });
    this.route('plant', { path: '/:plant_id' });
  })
});

export default Router;
