import PillCard from './PillCard';

function checkSeason(showSeasons) {
  let seasonText = 'season';

  if (showSeasons > 1) {
    seasonText = 'seasons';
  }

  return seasonText;
}

export default class extends PillCard {
  constructor(season = 0) {
    super();
    this.season = season;
    this.text = `${this.season} ${checkSeason(this.season)}`;
    this.fieldName = 'seasons';
    this.ui = 'warning';
  }
}

