import { Component } from 'domr-a';
import TableJson from './TableJson';
import Th from './Th';

const fields = [
  'name',
  'genre',
  'type',
  'mindfuck',
  'network',
  'runtime',
  'seasons',
  'avg ep',
  'status',
  'IMDB',
];

const defaultApi = [];

export default class extends Component {
  constructor(api = defaultApi) {
    super();
    this.fields = fields;
    this.api = api;
  }

  dom() {
    const th = new Th(this.fields);
    const tableJson = new TableJson(this.api);
    return `
      <div class="show-table show-table--view-list" id="show-table">
        ${th.render()}
        ${tableJson.render()}
      </div>
    `;
  }
}
