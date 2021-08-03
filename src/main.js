import Strview from 'strview';
import './webComponent/main';
import template1 from './template/template1';

const strview = new Strview({
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

function outTxt() {
    strview.useState().b = 1;
    strview.useState().a = 2;
}