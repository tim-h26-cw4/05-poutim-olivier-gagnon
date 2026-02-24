export default class Chef {
  constructor(element) {
    this.element = element;
    this.container = document.querySelector('.js-container');
    this.menu = [];
  }
  init() {
    const btnSubmit = this.element.querySelectorAll('js-submit');
    const poutines = document.querySelectorAll('.js-poutine');
    btnSubmit.addEventListener('click', this.sendOrder.bind(this));
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      this.menu.push(poutine);
    }
  }
}
