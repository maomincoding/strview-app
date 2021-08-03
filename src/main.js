import { strview, eventListener } from './strview';
import './webComponent/main';
import template1 from './template/template1';
import { use1 } from './methods/index';

new strview({
  el: "#app",
  data: {
    a: "Hello",
    b: 18,
    name: "maomin",
    age: 1,
    msg: 'Strview'
  },
  template: template1
});

eventListener('.color-red', 'click', use1);

