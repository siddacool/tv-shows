import { ActiveComponent } from 'domr-a';
import Tr from './Tr';
import Th from './Th';
import loadApi from '../utils/load-api';

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

function loopTableRows(obj) {
  const tableJson = document.getElementById('table-from-json');

  obj.forEach((row) => {
    const tr = new Tr(row);

    tr.addTo(tableJson);
  });
}

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
        <div id="table-from-json" class="show-table-json"></div>
      </div>
    `;
  }

  events() {
    loadApi(this.api, loopTableRows);
  }
}
