import Ember from 'ember';

var items = [{
  name:"Kabambe",
  description: "64Gb, 2gb Ram, color: space-gray, 1 yr warranty",
  price: 67000,
  condition: "Brand New!",
  remaining: "Remaining 3",
  image: "https://www.quikset.cz/163-large_default/apple-iphone-6-64gb-gold-kategorie-a.jpg"
}, {
  name:"Huawei",
  description: "64Gb, 2gb Ram, color: space-gray, 1 yr warranty",
  price: 67000,
  condition: "Brand New!",
  remaining: "Remaining 6",
  image: "http://drop.ndtv.com/TECH/product_database/images/910201410301AM_635_apple_iphone_6.jpeg"
}, {
  name:"iPhone 6",
  description: "64Gb, 2gb Ram, color: space-gray, 1 yr warranty",
  price: 67000,
  condition: "Brand New!",
  remaining: "Remaining 12",
  image: "https://media.carphonewarehouse.com/is/image/cpw2/iphone-6GREY?$xl-standard$"
}];

export default Ember.Route.extend({
  model() {
    return items;
  },
});
