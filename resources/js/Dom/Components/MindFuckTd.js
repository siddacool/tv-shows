import TextTd from './TextTd';

export default class extends TextTd {
  constructor(isMindFuck = false) {
    super();
    this.isMindFuck = isMindFuck;
    this.fieldName = 'mindf';
    this.text = `${this.isMindFuck ? '<span class="ui-dot ui-dot--danger"></span>' : ''}`;
  }
}
