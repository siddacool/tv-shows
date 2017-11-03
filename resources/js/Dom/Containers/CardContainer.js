import { Component } from 'domr-a';
import CardHolder from '../Components/CardHolder';

export default class extends Component {
  constructor(api = '') {
    super();
    this.api = api;
  }

  dom() {
    const cardHolder = new CardHolder(this.api);

    return `
      ${cardHolder.render()}
    `;
  }
}
