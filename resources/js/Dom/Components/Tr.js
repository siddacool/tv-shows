import { Component } from 'domr-a';
import TextTd from './TextTd';
import NameTd from './NameTd';
import GenreTd from './GenreTd';
import MindFuckTd from './MindFuckTd';
import RuntimeTd from './RuntimeTd';
import SeasonTd from './SeasonTd';
import EpisodeTd from './EpisodeTd';
import StatusOngoingTd from './StatusOngoingTd';
import StatusFinishedTd from './StatusFinishedTd';
import ImdbTd from './ImdbTd';

const defaultObj = {};

export default class extends Component {
  constructor(obj = defaultObj) {
    super();
    this.name = obj.name || '';
    this.genre = obj.genre || '';
    this.type = obj.type || '';
    this.mindfuck = obj.mindf || false;
    this.network = obj.network || '-';
    this.runtime = obj.runtime || '';
    this.seasons = obj.seasons || '';
    this.avgepisodes = obj.avgepisodes || '';
    this.status = obj.status.toLowerCase() || '';
    this.imdb = obj.imdb || '';
  }

  dom() {
    const Name = new NameTd(this.name);
    const Genre = new GenreTd(this.genre);
    const Type = new TextTd(this.type, 'type');
    const Mindfuck = new MindFuckTd(this.mindfuck);
    const Network = new TextTd(this.network, 'network');
    const Runtime = new RuntimeTd(this.runtime);
    const Season = new SeasonTd(this.seasons);
    const Episode = new EpisodeTd(this.avgepisodes);
    const StatusOngoing = new StatusOngoingTd();
    const StatusFinished = new StatusFinishedTd();
    const Imdb = new ImdbTd(this.name, this.imdb);

    return `
      <ol data-id="${this.name}">
        ${Name.render()}
        ${Genre.render()}
        ${Type.render()}
        ${Mindfuck.render()}
        ${Network.render()}
        ${Runtime.render()}
        ${Season.render()}
        ${Episode.render()}
        ${this.status === 'ongoing' ? `${StatusOngoing.render()}` : `${StatusFinished.render()}`}
        ${Imdb.render()}
      <ol>
    `;
  }
}
