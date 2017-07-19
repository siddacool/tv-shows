import icon from '../../custom-methods/load-svg-icon';
import BaseShow from './base-show';

export default class extends BaseShow {
  constructor(name, genre = '', type = '', mindf, runtime = '', seasons = '', avgepisodes = '', network = '', status = '', imdb = '') {
    super(name, genre, type, mindf, runtime, seasons, avgepisodes, network, status, imdb);
  }

  render() {
    return `
      <a data-show-id="${this.id}" class="show-card" href="${this.imdb}" title="${this.name}" target="_blank">
        <div class="show-card-info-basic">
          <div class="show-card-info--name">
          ${this.name}
          ${this.isMindf
            ? '<span class="show-card-info--mindf ui-pill ui-pill--danger">Mind Fuck</span>'
            : ''
          }
          </div>
          <div class="show-card-info--type">
            ${this.type}
          </div>
          <div class="show-card-info--genre">
            ${this.genre.map(genres => `
              <span class="ui-pill ui-pill--default">${genres}</span>
            `).join('')}
          </div>
          <div class="show-card-info--runtime">
            ${icon('time')} <span>${this.runtime} Mins</span>
          </div>
        </div>

        <div class="show-card-info-extended">
          <div class="show-card-info--seasons">
            Total ${this.seasons} Season, with average ${this.avgepisodes} episodes
          </div>
          <div class="show-card-info--network">
            ${this.network}
          </div>
          <div class="show-card-info--status">
            ${this.status}
          </div>
        </div>
      </a>
    `;
  }
}
