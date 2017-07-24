import viewShowTable from './Views/view-show-table';
import viewShowCards from './Views/view-show-cards';

const api = 'https://raw.githubusercontent.com/siddacool/api-set/master/youshouldbewatching.json';

const makeShows = () => {
  if (window.innerWidth <= 1253) {
    if (!document.querySelector('.show-table--view-card')) {
      viewShowCards(api);
    }
  } else {
    if (!document.querySelector('.show-table--view-list')) {
      viewShowTable(api);
    }
  }
};

makeShows();

addEventListener('resize', () => {
  makeShows();
});

