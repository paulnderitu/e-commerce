import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  condition: DS.attr(),
  remaining: DS.attr(),
  image: DS.attr()

});
