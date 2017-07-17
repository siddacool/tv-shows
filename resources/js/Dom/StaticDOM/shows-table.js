function showsTable() {
  return `
    <div class="show-table show-table--view-list" id="show-table">
      <ul>
        <li>name</li>
        <li>genre</li>
        <li>type</li>
        <li>mindfuck</li>
        <li>runtime</li>
        <li>seasons</li>
        <li>average episodes</li>
        <li>network</li>
        <li>status</li>
        <li>imdb</li>
      </ul>
      <div id="table-from-json">
      </div>
    </div>
  `;
}

export default showsTable;

