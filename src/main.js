import Strview from './strview';
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
    template: template1,
    means:()=>{
      function outTxt() {
        this.useState().b = 1;
        this.useState().a = 2;
      }
      return{
        outTxt
      }
    }
  });

