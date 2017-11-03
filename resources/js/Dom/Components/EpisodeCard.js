import PillCard from './PillCard';

function checkEpisode(showEpisodes) {
  let epText = 'Episode';

  if (showEpisodes > 1) {
    epText = `${epText}s`;
  }

  return epText;
}

export default class extends PillCard {
  constructor(episode = 0) {
    super();
    this.episode = episode;
    this.text = `${this.episode} ${checkEpisode(this.episode)}`;
    this.fieldName = 'avgepisodes';
    this.ui = 'new';
  }
}
