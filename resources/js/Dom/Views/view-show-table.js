import showsTable from '../StaticDOM/shows-table';
import ShowList from '../Shows/ShowList';
import renderShow from '../render-show';
import stickyTableHeader from '../Events/sticky-table-header';

function viewShowTable(api) {
  const wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = showsTable();
  stickyTableHeader();

  document.addEventListener('DOMContentLoaded', () => {
    const xmlhttp = new XMLHttpRequest();
    const showTable = document.getElementById('table-from-json');
    xmlhttp.open('GET', api, true);
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          const obj = JSON.parse(xmlhttp.responseText);
          showTable.innerHTML = `
            ${obj.map(props => `
               ${renderShow(ShowList, props)}
            `).join('')}
          `;
        }
      }
    };
    xmlhttp.send(null);
  });
}

export default viewShowTable;
