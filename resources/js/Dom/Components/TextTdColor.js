import TextTd from './TextTd';

export default class extends TextTd {
  constructor(text = '', fieldName = '', ui = '') {
    super(text, fieldName);
    this.ui = ui;
    this.classNames = `ui-backdrop ui-backdrop--${this.ui}`;
  }
}

