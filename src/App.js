import myParagraph from './components/myParagraph';
import card from './components/card';
import helloTemplate from './template/helloTemplate';
import './style/index.css';

const App = `
${helloTemplate}
<div class="content">
    <button class="color-red">点击</button>
    <p class="txt">{a}，{b}，（a和b都改变）</p>
    <ul class="list">
      <li>{age}</li>
      <li>{name}</li>
      <li>{msg}</li>
    </ul>
    <p class="txt">{a}，（a会改变）</p>
    <p class="txt">{b}，（b会改变）</p>
    <input value="{msg}"></input>
    <p>{obj.a.b}</p>
    <p>{arr}</p>
    <p>{ob.name}</p>
</div>
${myParagraph}
${card}<my-card><span slot="my-card-txt">{b}</span></my-card>
`

export default App