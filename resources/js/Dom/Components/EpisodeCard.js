import PillCard from './PillCard';

function checkEpisode(showEpisodes) {
  let epText = 'episode';

  if (showEpisodes > 1) {
    epText = 'episodes';
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
