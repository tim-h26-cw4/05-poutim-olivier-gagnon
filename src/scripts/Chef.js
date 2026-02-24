import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    this.element = element;
    this.container = document.querySelector('.js-container');
    this.menu = [];
    this.init();
  }
  init() {
    const btnSubmit = this.element.querySelector('.js-submit');
    console.log(btnSubmit);
    btnSubmit.addEventListener('click', this.sendOrder.bind(this));

    const poutines = this.element.querySelectorAll('.js-poutine');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);
      this.menu.push(instance);
      console.log(this.menu);
    }
  }
  sendOrder() {}
}
