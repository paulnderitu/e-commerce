import Ember from 'ember';

export default Ember.Component.extend({
  addNewItem: false,
  actions: {
    itemFormShow() {
      this.set('addNewItem', true);
    },
    saveItem1() {
      var params = {
        name: this.get('name'),
          description: this.get('description'),
            price: this.get('price'),
              condition: this.get('condition'),
                remaining: this.get('remaining'),
                  image: this.get('image'),
      };
      this.set('addNewItem', false);
      this.sendAction('saveItem2', params);
    }
  }
});
