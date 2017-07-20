export default class {
  constructor(id) {
    this.id = id;
  }

  dom() {
    return `
      <div data-dom-id="${this.id}">
        sdafea
      </div>
    `;
  }

  events() {
    const target = document.querySelector(`[data-dom-id="${this.id}"]`);
    target.addEventListener('click', () => {
      console.log('Default Event');
    });
  }

  render() {
    const dom = this.dom();
    setTimeout(() => {
      if (document.querySelector(`[data-dom-id="${this.id}"]`)) {
        this.events();
      }
    }, 50);
    return dom;
  }
}
