import ShowList from '../Shows/ShowList';
import renderShow from '../render-show';

function showsTable(data) {
  return `
    <div class="show-table show-table--view-list" id="show-table">
      <ul>
        <span class="row-selector">
        </span>
        <li>name</li>
        <li>genre</li>
        <li>type</li>
        <li>mindfuck</li>
        <li>network</li>
        <li>runtime</li>
        <li>seasons</li>
        <li>avg ep</li>
        <li>status</li>
        <li>IMDB</li>
      </ul>
      <div id="table-from-json" class="show-table-json">
        ${data.map(props => `
          ${renderShow(ShowList, props)}
        `).join('')}
      </div>
    </div>
  `;
}

export default showsTable;

