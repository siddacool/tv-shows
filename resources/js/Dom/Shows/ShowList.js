import BaseShow from './base-show';

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
  }

  render() {
    return `
      <ol data-show-id="${this.id}">
        <li class="show-list-info--name">${this.name}</li>
        <li class="show-list-info--genre">${this.genre.map(genres => `<span>${genres}</span>`).join('')}</li>
        <li class="show-list-info--type">${this.type}</li>
        <li class="show-list-info--isMindf">${this.isMindf ? 'TRUE' : ''}</li>
        <li class="show-list-info--runtime">${this.runtime}</li>
        <li class="show-list-info--seasons">${this.seasons}</li>
        <li class="show-list-info--avgepisodes">${this.avgepisodes}</li>
        <li class="show-list-info--network">${this.network}</li>
        <li class="show-list-info--status">${this.status}</li>
        <li class="show-list-info--imdb">
          <a href="${this.imdb}" title="${this.name}" target="_blank" class="show-info--imdb">
            link
          </a>
        </li>
      </ol>
    `;
  }
}
