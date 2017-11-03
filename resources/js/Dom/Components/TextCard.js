import { Component } from 'domr-a';

export default class extends Component {
  constructor(text = '', fieldName = '') {
    super();
    this.text = text;
    this.fieldName = fieldName;
  }

  dom() {
    return `
      <span class="show-card-info--${this.fieldName}">${this.text}</span>
    `;
  }
}
