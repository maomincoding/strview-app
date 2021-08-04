import { createView, eventListener } from 'strview';
import './webComponent/main';
import template1 from './template/template1';
import { use1 } from './methods/index';

createView({
  el: "#app",
  data: {
    a: "Hello",
    b: 18,
    name: "maomin",
    age: 9,
    msg: 'Strview'
  },
  template: template1
});

eventListener('.color-red', 'click', use1);

