import myParagraph from './components/myParagraph';
import helloTemplate from './template/helloTemplate';

const App = `
<div class="content">
    <button class="color-red">点击</button>
    <p class="txt">{a}，{b}，（a和b都改变）</p>
    <ul>
      <li>{age}</li>
      <li>{name}</li>
      <li>{msg}</li>
    </ul>
    <p class="txt">{a}，（a会改变）</p>
    <p class="txt">{b}，（b会改变）</p>
    <input value="{msg}"></input>
    <p>{obj.a.b}</p>
    <p>{arr}</p>
    </div>
    ${helloTemplate}
    ${myParagraph}
`

export default App