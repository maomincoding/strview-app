import { createView, eventListener } from './strview';
import data from './data';
import App from './App';
import { executes } from './methods';

createView({
  el: "#app",
  data,
  template: App
});

eventListener('.color-red', 'click', executes);

