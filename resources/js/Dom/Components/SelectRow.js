import { ActiveComponent } from 'domr-a';

const filterActiveLoop = (thisTarget) => {
  const allRowSelectors = document.querySelectorAll('.row-selector--dynamic');
  for (let i = 0; i < allRowSelectors.length; i++) {
    const elm = allRowSelectors[i];
    const parent = elm.parentElement;
    if (elm.getAttribute('data-dom-id') === thisTarget.getAttribute('data-dom-id')) {
      parent.classList.toggle('active');
    } else {
      parent.classList.remove('active');
    }
  }
};

export default class extends ActiveComponent {
  constructor(dynamic = true) {
    super('select-td');
    this.dynamic = dynamic;
  }

  dom() {
    return `
      <a href="#" class="row-selector ${this.dynamic ? 'row-selector--dynamic' : ''}"></a>
    `;
  }

  events() {
    if (this.dynamic) {
      const target = this.target();
      target.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('select-td');
      });
    }
  }
}
