import Tr from './Tr';


function loopTableRows(obj) {
  const tableJson = document.getElementById('table-from-json');

  obj.forEach((row) => {
    const tr = new Tr(row);

    tr.addTo(tableJson);
  });
}

export default function (showsAPI) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', showsAPI, true);
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        const obj = JSON.parse(xmlhttp.responseText);
        loopTableRows(obj);
      }
    }
  };
  xmlhttp.send(null);
}
