import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function() {
      var newDate = this.get('date');
      var newRange = this.get('range');
      var newChamber = this.get('chamber');
      this.transitionToRoute('bill', newDate, newRange , newChamber);
      alert(newRange);
    }
  }
});
