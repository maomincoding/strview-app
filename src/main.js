import Strview from './strview';
import './webComponent/main';
import template1 from './template/template1';

const sv = new Strview({
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

document.querySelector('.color-red').onclick = function () {
  sv.useState().a = 1;
  sv.useState().b = 9;
}