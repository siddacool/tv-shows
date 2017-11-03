import { Component } from 'domr-a';
import TextCard from './TextCard';
import GenreCard from './GenreCard';
import mindFuckCard from './mindFuckCard';
import RuntimeCard from './RuntimeCard';
import SeasonCard from './SeasonCard';
import EpisodeCard from './EpisodeCard';
import StatusFinishedCard from './StatusFinishedCard';
import StatusOngoingCard from './StatusOngoingCard';

const defaultObj = {};

export default class extends Component {
  constructor(obj = defaultObj) {
    super();
    this.name = obj.name || '';
    this.genre = obj.genre || '';
    this.type = obj.type || '';
    this.mindfuck = obj.mindf || false;
    this.network = obj.network || '';
    this.runtime = obj.runtime || '';
    this.seasons = obj.seasons || '';
    this.avgepisodes = obj.avgepisodes || '';
    this.status = obj.status.toLowerCase() || '';
    this.imdb = obj.imdb || '';
  }

  dom() {
    const Name = new TextCard(this.name, 'name');
    const Genre = new GenreCard(this.genre);
    const Type = new TextCard(this.type, 'type');
    const Network = new TextCard(this.network, 'network');
    const Runtime = new RuntimeCard(this.runtime);
    const Season = new SeasonCard(this.seasons);
    const Episode = new EpisodeCard(this.avgepisodes);
    const StatusOngoing = new StatusOngoingCard();
    const StatusFinished = new StatusFinishedCard();

    return `
      <a class="show-card" href="${this.imdb}" title="${this.name}" target="_blank">
        <div class="show-card-info-header">
          <div class="show-card-info-title">
            ${Name.render()} ${this.mindfuck ? `${mindFuckCard()}` : ''}
          </div>
          <div class="show-card-info-description">
            ${Type.render()}${this.network ? ',' : ''} ${Network.render()}
          </div>
          ${Genre.render()}
        </div>
        <div class="show-card-info-extended">
          ${Runtime.render()}
          ${Season.render()}
          ${Episode.render()}
          ${this.status === 'ongoing' ? `${StatusOngoing.render()}` : `${StatusFinished.render()}`}
        </div>
      </a>
    `;
  }
}
