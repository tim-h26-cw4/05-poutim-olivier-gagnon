export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.js-type');

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
    for (let i = 0; i < this.types.length; i++) {
      this.types[i].classList.remove('is-active');
    }
    event.currentTarget.classList.toggle('is-active');
    this.selectedType = event.currentTarget.textContent;
    this.updatePhoto();
  }
  updatePhoto() {
    const image = this.element.querySelector('.js-image');
    console.log(image);
    image.classList.add('is-active');
    image.src = `assets/images/${this.selectedType}.png`;
  }
}
