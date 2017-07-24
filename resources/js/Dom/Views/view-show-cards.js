import showsTableMobile from '../StaticDOM/shows-table-mobile';

function viewShowTable(api) {
  const wrapper = document.getElementById('wrapper');

  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', api, true);
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        const obj = JSON.parse(xmlhttp.responseText);
        wrapper.innerHTML = showsTableMobile(obj);
      }
    }
  };
  xmlhttp.send(null);
}

export default viewShowTable;
