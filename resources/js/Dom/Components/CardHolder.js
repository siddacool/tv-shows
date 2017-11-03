import { ActiveComponent } from 'domr-a';
import Card from './Card';
import loadApi from '../utils/load-api';

const defaultApi = [];

function loopTableRows(obj) {
  const tableJson = document.getElementById('table-from-json');

  obj.forEach((row) => {
    const card = new Card(row);

    card.addTo(tableJson);
  });
}

export default class extends ActiveComponent {
  constructor(api = defaultApi) {
    super('show-table');
    this.api = api;
  }

  dom() {
    return `
      <div class="show-table show-table--view-card" id="show-table">
        <div id="table-from-json" class="show-table-json">
        </div>
      </div>
    `;
  }

  events() {
    loadApi(this.api, loopTableRows);
  }
}
