export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-type');
    console.log(this.types);
    this.selectedType = '';
    this.init();
  }
  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }
  selectType(event) {
    console.log('test');
    for (let i = 0; i < this.types.length; i++) {
      this.types[i].classList.remove('is-active');
    }
    event.currentTarget.classList.toggle('is-active');
  }
}
