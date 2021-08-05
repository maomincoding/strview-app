import { createView, eventListener } from './strview';
import data from './data';
import App from './App';
import { useFun } from './methods';

createView({
  el: "#app",
  data,
  template: App
});

eventListener('.color-red', 'click', useFun);

