import { Router } from 'domr-a';
import TableView from './Views/TableView';
import CardsView from './Views/CardsView';

const api = 'https://raw.githubusercontent.com/siddacool/api-set/master/youshouldbewatching.json';

const routes = [
  {
    name: 'Desktop Table View',
    path: '/',
    view: TableView,
    isDefault: true,
    api,
  },
  {
    name: 'Cards View',
    path: '/cards',
    view: CardsView,
    api,
  },
];

const router = new Router(routes, {
  redirectDefault: true,
  clearLog: true,
});

router.start();
