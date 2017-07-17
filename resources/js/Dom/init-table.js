import showLoop from './Shows/load-table';
import Catalog from './Catalog';
import renderShows from './render-shows';

function initTable(showRenderType) {
  const catalog = new Catalog();
  const table = document.getElementById('table-from-json');
  showLoop(catalog, showRenderType);

  const demand = catalog.demand();
  table.innerHTML = `
    ${renderShows(demand)}
  `;
}

export default initTable;
