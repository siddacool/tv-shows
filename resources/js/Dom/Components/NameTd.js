import { ActiveComponent } from 'domr-a';

function activateTr(target) {
  const table = document.getElementById('table-from-json');
  const tr = table.querySelectorAll('ol');

  for (let i = 0; i < tr.length; i++) {
    if (tr[i] === target) {
      tr[i].classList.add('active');
    } else {
      tr[i].classList.remove('active');
    }
  }
}

export default class extends ActiveComponent {
  constructor(text = '') {
    super();
    this.text = text;
  }

  dom() {
    return `
      <li class="show-list-info--name">${this.text}</li>
    `;
  }

  events() {
    const target = this.target();

    target.addEventListener('click', () => {
      activateTr(target.parentElement);
    });
  }
}
