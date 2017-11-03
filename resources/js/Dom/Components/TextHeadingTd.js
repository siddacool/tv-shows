import { Component } from 'domr-a';

export default class extends Component {
  constructor(text = '') {
    super();
    this.text = text;
  }

  dom() {
    return `
      <li>${this.text}</li>
    `;
  }
}
