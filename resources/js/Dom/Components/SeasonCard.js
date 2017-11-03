import PillCard from './PillCard';

function checkSeason(showSeasons) {
  let seasonText = 'Season';

  if (showSeasons > 1) {
    seasonText = `${seasonText}s`;
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

