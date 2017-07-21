import BaseShow from './base-show';
import icon from '../../custom-methods/load-svg-icon';
import RowSelector from '../DynamicDOM/RowSelector';

const placeholder = '-';

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
        <li class="show-list-info--genre">
          ${this.genre.map(genres => `
            <span class="ui-pill ui-pill--info">${genres}</span>
          `).join('')}
        </li>
        <li class="show-list-info--type">${this.type}</li>
        <li class="show-list-info--mindf">${this.isMindf ? '<span class="ui-dot ui-dot--danger"></span>' : ''}</li>
        <li class="show-list-info--runtime">${this.runtime}</li>
        <li class="show-list-info--seasons">${this.seasons}</li>
        <li class="show-list-info--avgepisodes">${this.avgepisodes}</li>
        <li class="show-list-info--network">${this.network}</li>
        <li class="show-list-info--status">${this.status}</li>
        <li class="show-list-info--imdb">
          <a href="${this.imdb}" title="${this.name}" target="_blank" class="show-info--imdb">
            ${icon('new-window')}
          </a>
        </li>
      </ol>
    `;
  }
}
