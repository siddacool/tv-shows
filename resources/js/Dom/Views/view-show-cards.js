import showsTableMobile from '../StaticDOM/shows-table-mobile';
import ShowCard from '../Shows/ShowCard';
import renderShow from '../render-show';

function viewShowTable(api) {
  const wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = showsTableMobile();

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
               ${renderShow(ShowCard, props)}
            `).join('')}
          `;
        }
      }
    };
    xmlhttp.send(null);
  });
}

export default viewShowTable;
