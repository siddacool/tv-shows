import ShowList from './ShowList';
import ShowCard from './ShowCard';

//const backupAPI = './offline-api.json';
const API = 'https://raw.githubusercontent.com/siddacool/api-set/master/youshouldbewatching.json';
const showsAPI = API;

var loadedAPI;
const xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', showsAPI, true);
xmlhttp.onreadystatechange = () => {
  if (xmlhttp.readyState === 4) {
    if (xmlhttp.status === 200) {
      const obj = JSON.parse(xmlhttp.responseText);
      loadedAPI = obj;
    }
  }
};
xmlhttp.send(null);

const showLoop = (catalog, showRenderType) => {
  if (loadedAPI !== undefined) {
    loadedAPI.forEach((props) => {
      if (showRenderType === 'list') {
        catalog.add(ShowList, props);
      } else {
        catalog.add(ShowCard, props);
      }
    });
  }
};

export default showLoop;
