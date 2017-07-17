import { showsTable } from './StaticDOM';
import initTable from './init-table';

const wrapper = document.getElementById('wrapper');
const renderTableData = () => {
  const showsTableHolder = document.getElementById('show-table');
  if (window.innerWidth <= 1024) {
    initTable('card');
    showsTableHolder.classList.remove('show-table--view-list');
    showsTableHolder.classList.add('show-table--view-card');
  } else {
    initTable('list');
    showsTableHolder.classList.remove('show-table--view-card');
    showsTableHolder.classList.add('show-table--view-list');
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

