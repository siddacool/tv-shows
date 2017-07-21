import BaseShow from './base-show';
import icon from '../../custom-methods/load-svg-icon';
import RowSelector from '../DynamicDOM/RowSelector';

const placeholder = '-';

function renderGenre(target) {
  return `
    ${target.map(genres => `
      <span class="ui-pill ui-pill--info">${genres}</span>
    `).join('')}
  `;
}

function renderMindFuck(target) {
  return `
    ${target ? '<span class="ui-dot ui-dot--danger"></span>' : ''}
  `;
}

function renderStatus(target) {
  return `
    <li class="show-list-info--status 
      ui-backdrop ${target === 'ongoing' ? 'ui-backdrop--safe' : 'ui-backdrop--danger'}">
      ${target}
    </li>
  `;
}

export default class extends BaseShow {
  constructor(
    name = placeholder,
    genre = placeholder,
    type = placeholder,
    mindf,
    runtime = placeholder,
    seasons = placeholder,
    avgepisodes = placeholder,
    network = placeholder,
    status = placeholder,
    imdb = placeholder,
    ) {
    super(name, genre, type, mindf, runtime, seasons, avgepisodes, network, status, imdb);
    this.rowSelector = new RowSelector(`row-select-${this.id}`);
  }

  render() {
    return `
      <ol data-show-id="${this.id}">
        ${this.rowSelector.render()}
        <li class="show-list-info--name">${this.name}</li>
        <li class="show-list-info--genre">${renderGenre(this.genre)}</li>
        <li class="show-list-info--type">${this.type}</li>
        <li class="show-list-info--mindf">${renderMindFuck(this.isMindf)}</li>
        <li class="show-list-info--network">${this.network}</li>
        <li class="show-list-info--runtime ui-backdrop ui-backdrop--info">${this.runtime}</li>
        <li class="show-list-info--seasons ui-backdrop ui-backdrop--warning">${this.seasons}</li>
        <li class="show-list-info--avgepisodes ui-backdrop ui-backdrop--new">${this.avgepisodes}</li>
        ${renderStatus(this.status)}
        <li class="show-list-info--imdb">
          <a href="${this.imdb}" title="${this.name}" target="_blank" class="show-info--imdb">
            ${icon('new-window')}
          </a>
        </li>
      </ol>
    `;
  }
}
