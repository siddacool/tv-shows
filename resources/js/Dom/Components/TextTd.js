import { Component } from 'domr-a';

export default class extends Component {
  constructor(text = '', fieldName = '', classNames = '') {
    super();
    this.text = text;
    this.fieldName = fieldName;
    this.classNames = classNames;
  }

  dom() {
    return `
      <li class="show-list-info--${this.fieldName} ${this.classNames}">${this.text}</li>
    `;
  }
}
