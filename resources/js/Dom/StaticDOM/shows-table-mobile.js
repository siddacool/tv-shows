import ShowCard from '../Shows/ShowCard';
import renderShow from '../render-show';

function showsTableMobile(data) {
  return `
    <div class="show-table show-table--view-card" id="show-table">
      <div id="table-from-json" class="show-table-json">
        ${data.map(props => `
          ${renderShow(ShowCard, props)}
        `).join('')}
      </div>
    </div>
  `;
}

export default showsTableMobile;
