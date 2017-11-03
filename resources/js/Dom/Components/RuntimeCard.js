import PillCard from './PillCard';

const clockIcon = `
  <svg role="img" class="icon">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-time"></use>
  </svg>
`;

export default class extends PillCard {
  constructor(text = '') {
    super();
    this.fieldName = 'runtime';
    this.ui = 'info';
    this.text = `${clockIcon} ${text} Mins`;
    this.icon = true;
  }
}

