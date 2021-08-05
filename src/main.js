import { createView, eventListener } from './strview';
import data from './data';
import App from './App';
import { executes } from './methods';

createView({
  el: "#app",
  template: App,
  data
});

// The event is handled after the createview API
eventListener('.color-red', 'click', executes);

