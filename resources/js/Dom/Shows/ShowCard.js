import icon from '../../custom-methods/load-svg-icon';
import BaseShow from './base-show';

export default class extends BaseShow {
  constructor(name, genre = '', type = '', mindf, runtime = '', seasons = '', avgepisodes = '', network = '', status = '', imdb = '') {
    super(name, genre, type, mindf, runtime, seasons, avgepisodes, network, status, imdb);
  }

  render() {
    return `
      <a data-show-id="${this.id}" class="show-card" href="${this.imdb}" title="${this.name}" target="_blank">
        <div class="show-card-info--name">
        ${this.name}
        ${this.isMindf
          ? '<span class="show-card-info--mindf ui-pill ui-pill--danger">Mind Fuck</span>'
          : ''
        }
        </div>
        <div class="show-card-info--type">
          ${this.type}${this.network ? `, <span class="show-card-info--network">${this.network}</span>` : ''}
        </div>
        <div class="show-card-info--genre">
          ${this.genre.map(genres => `
            <span class="ui-pill ui-pill--info">${genres}</span>
          `).join('')}
        </div>
        <div class="show-card-info--runtime">
          <span class="ui-tag ui-tag--info ui-tag--icon">
            ${icon('time')} ${this.runtime} Mins 
          </span> 
          <span class="show-card-info--seasons">
            <span class="ui-tag ui-tag--warning">
              ${this.seasons}
              ${this.seasons <= 1
                ? 'Season'
                : 'Seasons'
              }
            </span> 
          </span>
          <span class="show-card-info--avgepisodes">
            <span class="ui-tag ui-tag--new">
              ${this.avgepisodes} Episodes
            </span> 
          </span>
          <span class="show-card-info--status">
            <span class="ui-tag ${this.status === 'Ongoing' ? 'ui-tag--safe' : 'ui-tag--danger'}">
              ${this.status}
            </span> 
          </span>
        </div>
      </a>
    `;
  }
}
