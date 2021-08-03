import Strview from './strview';
import './webComponent/main';
// import template1 from './template/template1';

new Strview({
    el: "#app",
    data: {
      a: "Hello",
      b: 18,
      name: "maomin",
      age: 1,
      msg: 'Strview'
    },
    template: `<div class="content">
    <button onclick="outTxt()" class="color-red">点击</button>
    <p class="txt">{a}，{b}，（a和b都改变）</p>
    <ul>
      <li>{age}</li>
      <li>{name}</li>
      <li>{msg}</li>
    </ul>
    <p class="txt">{a}，（a会改变）</p>
    <p class="txt">{b}，（b会改变）</p>
    </div>
    
    <template id="my-paragraph">
    <style>
        p {
            color: white;
            background-color: #666;
            padding: 5px;
        }
    </style>
    <p>
        <slot name="my-text">My default text</slot>
    </p>
    </template>
    
    <my-paragraph>
    <span slot="my-text">Let's have some different text!</span>
    </my-paragraph>
    
    <my-paragraph>
    <ul slot="my-text">
        <li>Let's have some different text!</li>
        <li>In a list!</li>
    </ul>
    </my-paragraph>`,
    // means(){
    //   return{
    //     outTxt
    //   }
    // }
  });

  // function outTxt(){
  //   console.log(this);
  //   // this.useState().a = 1;
  //   // this.useState().b = 2;
  // }