import icon from '../../custom-methods/load-svg-icon';
import BaseShow from './base-show';

function renderMindFuck(target) {
  return `
    ${target
      ? '<span class="show-card-info--mindf"><span class="ui-pill ui-pill--danger">Mind Fuck</span></span>'
      : ''
    }
  `;
}

function renderGenre(target) {
  return `
    <div class="show-card-info--genre">
      ${target.map(genres => `
        <span class="ui-pill ui-pill--info">${genres}</span>
      `).join('')}
    </div>
  `;
}

function renderSeason(target) {
  return `
    <span class="show-card-info--seasons">
      <span class="ui-tag ui-tag--warning">
        ${target}
        ${target <= 1
          ? 'Season'
          : 'Seasons'
        }
      </span>
    </span>
  `;
}

function renderStatus(target) {
  return `
    <span class="show-card-info--status">
      <span class="ui-tag ${target === 'ongoing' ? 'ui-tag--safe' : 'ui-tag--danger'}">
        ${target}
      </span>
    </span>
  `;
}

export default class extends BaseShow {
  constructor(name, genre = '', type = '', mindf, runtime = '', seasons = '', avgepisodes = '', network = '', status = '', imdb = '') {
    super(name, genre, type, mindf, runtime, seasons, avgepisodes, network, status, imdb);
  }

  header() {
    return `
      <div class="show-card-info-header">
        <div class="show-card-info-title">
          <span class="show-card-info--name">
            ${this.name}
          </span>
          ${renderMindFuck(this.isMindf)}
        </div>
        <div class="show-card-info-description">
          <span class="show-card-info--type">${this.type}</span>${this.network ? `, <span class="show-card-info--network">${this.network}</span>` : ''}
        </div>
        ${renderGenre(this.genre)}
      </div>
    `;
  }

  extended() {
    return `
      <div class="show-card-info-extended">
        <span class="show-card-info--runtime">
          <span class="ui-tag ui-tag--info ui-tag--icon">
            ${icon('time')} ${this.runtime} Mins 
          </span> 
        </span>
        ${renderSeason(this.seasons)}
        <span class="show-card-info--avgepisodes">
          <span class="ui-tag ui-tag--new">
            ${this.avgepisodes} Episodes
          </span> 
        </span>
        ${renderStatus(this.status)}
      </div>
    `;
  }

  render() {
    return `
      <a data-show-id="${this.id}" 
      class="show-card" href="${this.imdb}" 
      title="${this.name}" target="_blank">
        ${this.header()}
        ${this.extended()}
      </a>
    `;
  }
}
