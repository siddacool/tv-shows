import { Component } from 'domr-a';

export default class extends Component {
  constructor(text = '', fieldName = '', ui = '', icon = false) {
    super();
    this.text = text;
    this.fieldName = fieldName;
    this.ui = ui;
    this.icon = icon;
  }

  dom() {
    return `
      <span class="show-card-info--${this.fieldName}">
        <span class="ui-tag ui-tag--${this.ui} ${this.icon ? 'ui-tag--icon' : ''}">
          ${this.text}
        </span>
      </span>
    `;
  }
}
