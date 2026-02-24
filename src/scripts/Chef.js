import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    this.element = element;
    this.container = this.element.querySelector('.js-container');
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
  sendOrder() {
    this.container.innerText = '';
    let total = 0;
    for (let i = 0; i < this.menu.length; i++) {
      if (this.menu[i].selectedType != '') {
        total++;
      }
    }
    const p = document.createElement('p');
    p.textContent = `Nombre total de poutine(s) : ${total}`;
    this.container.appendChild(p);
  }
}
