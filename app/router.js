import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('index', {path: '/'});
  this.resource('legislators',  function(){
    this.resource('contact', {path:'contact/:zip'});
  });
  this.resource('bills', function() {
    this.resource('bill', {path: 'bill/:newDate/:newRange/:newChamber'});
  });
});

export default Router;
