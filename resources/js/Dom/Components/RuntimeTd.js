import TextTdColor from './TextTdColor';

export default class extends TextTdColor {
  constructor(text = '') {
    super(text, 'runtime', 'info');
  }
}

