import TextTdColor from './TextTdColor';

export default class extends TextTdColor {
  constructor(name = '', ui = '') {
    super(name, 'status', ui);
  }
}

