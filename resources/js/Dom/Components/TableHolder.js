import { ActiveComponent } from 'domr-a';
import Th from './Th';
import table from './table';
import makeTableFromJson from './makeTableFromJson';

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

export default class extends ActiveComponent {
  constructor(api = defaultApi) {
    super('show-table');
    this.fields = fields;
    this.api = api;
  }

  dom() {
    const th = new Th(this.fields);
    return `
      <div class="show-table show-table--view-list" id="show-table">
        ${th.render()}
        ${table()}
      </div>
    `;
  }

  events() {
    makeTableFromJson(this.api);
  }
}
