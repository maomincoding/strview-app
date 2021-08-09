import { createView } from 'strview';
import data from './data';
import App from './App';
import methods from './methods';

createView({
  el: "#app",
  template: App,
  data
});

// The event is handled after the createview API
methods();
