import showsTable from './StaticDOM/shows-table';
import showsTableMobile from './StaticDOM/shows-table-mobile';
import initTable from './init-table';
import stickyTableHeader from './Events/sticky-table-header';

const wrapper = document.getElementById('wrapper');
const renderTableData = () => {
  if (window.innerWidth <= 1253) {
    if (!document.querySelector('.show-table--view-card')) {
      wrapper.innerHTML = `
        ${showsTableMobile()}
      `;
      initTable('card');
    }
  } else {
    if (!document.querySelector('.show-table--view-list')) {
      wrapper.innerHTML = `
        ${showsTable()}
      `;
      initTable('list');
      stickyTableHeader();
    }
  }
};

setTimeout(() => {
  const makeTable = setInterval(() => {
    retry();
  }, 300);

  function retry() {
    if (!document.querySelector('[data-show-id]')) {
      renderTableData();
      console.log('called');
    } else {
      clearInterval(makeTable);
    }
  }
}, 300);

addEventListener('resize', () => {
  renderTableData();
});

