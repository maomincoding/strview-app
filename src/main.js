import { createView, eventListener } from './strview';
import template1 from './template/template1';
import { use1 } from './methods/index';

createView({
  el: "#app",
  data: {
    a: "Hello",
    b: 18,
    name: "maomin",
    age: 9,
    msg: 'Strview',
    arr: ['0'],
    obj: {
      a: {
        b: 1
      }
    }
  },
  template: template1
});

eventListener('.color-red', 'click', use1);

