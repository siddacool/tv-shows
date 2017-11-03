import { Component } from 'domr-a';
import TableHolder from '../Components/TableHolder';

export default class extends Component {
  constructor(api = '') {
    super();
    this.api = api;
  }

  dom() {
    const tableHolder = new TableHolder(this.api);

    return `
      ${tableHolder.render()}
    `;
  }
}
