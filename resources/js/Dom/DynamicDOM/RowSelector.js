import BaseDynamicDom from './base-dynamic-dom-class';

const filterActiveLoop = (thisTarget) => {
  const allRowSelectors = document.querySelectorAll('.row-selector--dynamic');
  for (let i = 0; i < allRowSelectors.length; i++) {
    const elm = allRowSelectors[i];
    const parent = elm.parentElement;
    if (elm.getAttribute('data-dom-id') === thisTarget.getAttribute('data-dom-id')) {
      parent.classList.add('active');
    } else {
      parent.classList.remove('active');
    }
  }
};

const onClickEvent = (target) => {
  target.addEventListener('click', (event) => {
    event.preventDefault();
    filterActiveLoop(target);
  });
};

export default class extends BaseDynamicDom {
  constructor(id = 'nota') {
    super(id);
  }

  dom() {
    return `
      <a href="#" data-dom-id="${this.id}" class="row-selector row-selector--dynamic"></a>
    `;
  }

  events() {
    const target = document.querySelector(`[data-dom-id="${this.id}"]`);
    onClickEvent(target);
  }
}
