import showsTable from './StaticDOM/shows-table';
import initTable from './init-table';
import stickyTableHeader from './Events/sticky-table-header';

const wrapper = document.getElementById('wrapper');
const renderTableData = () => {
  const showsTableHolder = document.getElementById('show-table');
  if (window.innerWidth <= 1253) {
    initTable('card');
    showsTableHolder.classList.remove('show-table--view-list');
    showsTableHolder.classList.add('show-table--view-card');
  } else {
    initTable('list');
    showsTableHolder.classList.remove('show-table--view-card');
    showsTableHolder.classList.add('show-table--view-list');
    stickyTableHeader();
    document.getElementById('table-header').style.display = '';
  }
};

wrapper.innerHTML = `
  ${showsTable()}
`;

setTimeout(() => {
  renderTableData();
}, 300);

addEventListener('resize', () => {
  renderTableData();
});

