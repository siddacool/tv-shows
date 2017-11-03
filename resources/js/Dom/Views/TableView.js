import { utils } from 'domr-a';
import Table from '../Containers/Table';

export default function (data) {
  const table = new Table(data.api);
  const wrapper = document.getElementById('wrapper');
  const loc = utils.hashLocation();

  if (window.innerWidth <= 1253) {
    loc.set('path', '/cards');
  } else {
    table.replaceContentOf(wrapper);
  }
}
