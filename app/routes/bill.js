import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/upcoming_bills?legislative_day=' + params.newDate + '&range=' + params.newRange + '&chamber=' + params.newChamber + '&apikey=0613f3c5dde44d699a1a8c7adb2e6ed7';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     var bills = [];
     responseJSON.results.forEach(function(bill) {
       bills.push(bill);
     });
     return bills;
   });
  }
});
