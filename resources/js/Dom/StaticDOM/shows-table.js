function showsTable() {
  return `
    <div class="show-table show-table--view-list" id="show-table">
      <ul style="display: none;" id="table-header">
        <span class="row-selector">
        </span>
        <li>name</li>
        <li>genre</li>
        <li>type</li>
        <li>mindfuck</li>
        <li>runtime</li>
        <li>seasons</li>
        <li>avg episodes</li>
        <li>network</li>
        <li>status</li>
        <li>IMDB</li>
      </ul>
      <div id="table-from-json" class="show-table-json">
      </div>
    </div>
  `;
}

export default showsTable;

