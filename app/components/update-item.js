import Ember from 'ember';

export default Ember.Component.extend({
  updateItemForm: false,
  actions: {
    updateItemForm() {
      this.set('updateItemForm', true);
    },
    update(item) {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        price: this.get('price'),
        condition: this.get('condition'),
        remaining: this.get('remaining'),
        image: this.get('image'),
      };
      this.set('updateItemForm', false);
      this,sendAction('update', item, params);
    }
  }
});
