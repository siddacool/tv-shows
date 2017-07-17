import ShowList from './ShowList';
import ShowCard from './ShowCard';

const showsAPI = 'https://raw.githubusercontent.com/siddacool/api-set/master/youshouldbewatching.json';

var table;
const xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', showsAPI, true);
xmlhttp.onreadystatechange = () => {
  if (xmlhttp.readyState === 4) {
    if (xmlhttp.status === 200) {
      const obj = JSON.parse(xmlhttp.responseText);
      table = obj;
    }
  }
};
xmlhttp.send(null);

const showLoop = (catalog, showRenderType) => {
  if (table !== undefined) {
    table.forEach((props) => {
      if (showRenderType === 'list') {
        catalog.add(ShowList, props);
      } else {
        catalog.add(ShowCard, props);
      }
    });
  }
};

export default showLoop;
