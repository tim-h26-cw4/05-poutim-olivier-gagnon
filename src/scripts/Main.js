import Icons from './utils/Icons.js';
import Chef from './Chef.js';
// La ligne suivante devrait être au TOUT début du init() du Main

class main {
  constructor() {
    this.init();
  }
  init() {
    Icons.load();
    const chefs = document.querySelectorAll("[data-component='Chef']");

    for (let i = 0; i < chefs.length; i++) {
      const chef = chefs[i];
      new Chef(chef);
    }
  }
}

new main();
