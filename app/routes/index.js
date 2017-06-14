import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('item');
  },
  actions: {
    saveItem3 (params) {
      var newItem = this.store.createRecord ('item', params);
      newItem.save();
      this.transitionTo('index');
    },

    destroyItem(item) {
      item.destroyRecord();
      this.transitionTo('index');
    }
  }
});
