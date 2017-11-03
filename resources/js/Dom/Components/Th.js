import { Component } from 'domr-a';
import TextHeadingTd from './TextHeadingTd';

const defaultFields = [];

function makeFields(field) {
  const textHeadingTd = new TextHeadingTd(field);

  return `${textHeadingTd.render()}`;
}

export default class extends Component {
  constructor(fields = defaultFields) {
    super();
    this.fields = fields;
  }

  dom() {
    return `
      <ul>
        ${this.fields.map(field => `${makeFields(field)}`).join('')}
      </ul>
    `;
  }
}

