import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function() {
      var newChamber = this.get('chamber');
      this.transitionToRoute('committee', newChamber);

    }
  }
});
