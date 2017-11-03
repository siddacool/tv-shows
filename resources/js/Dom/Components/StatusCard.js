import PillCard from './PillCard';

export default class extends PillCard {
  constructor(text = '', ui = '') {
    super(text, 'status', ui);
  }
}
