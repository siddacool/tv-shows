function loadApi(api, view) {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', api, true);
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        const obj = JSON.parse(xmlhttp.responseText);
        view(obj);
      }
    }
  };
  xmlhttp.send(null);
}

export default loadApi;

