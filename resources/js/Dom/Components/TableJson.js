import { ActiveComponent } from 'domr-a';
import Tr from './Tr';
import loadApi from '../utils/load-api';

const defaultApi = [];

function loopTableRows(obj, target) {
  const tableJson = target;

  obj.forEach((row) => {
    const tr = new Tr(row);

    tr.addTo(tableJson);
  });
}

export default class extends ActiveComponent {
  constructor(api = defaultApi) {
    super('table-json');
    this.api = api;
  }

  dom() {
    return `
      <div id="table-from-json" class="show-table-json">
      </div>
    `;
  }

  events() {
    const target = this.target();
    loadApi(this.api, target, loopTableRows);
  }
}
