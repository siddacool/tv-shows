import TextTd from './TextTd';
import mindFuckDot from './mindFuckDot';

export default class extends TextTd {
  constructor(isMindFuck = false) {
    super();
    this.isMindFuck = isMindFuck;
    this.fieldName = 'mindf';
    this.text = `${this.isMindFuck ? `${mindFuckDot()}` : ''}`;
  }
}
