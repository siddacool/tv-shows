import BaseShow from './base-show';

export default class extends BaseShow {
  constructor(name, genre, type, mindf, runtime, seasons, avgepisodes, network, status, imdb) {
    super(name, genre, type, mindf, runtime, seasons, avgepisodes, network, status, imdb);
  }

  render() {
    return `
      <ol data-show-id="${this.id}">
        <li>${this.name}</li>
        <li>${this.genre}</li>
        <li>${this.type}</li>
        <li ${this.isMindf ? 'class="show-info--mindf"' : ''}></li>
        <li>${this.runtime}</li>
        <li>${this.seasons}</li>
        <li>${this.avgepisodes}</li>
        <li>${this.network}</li>
        <li>${this.status}</li>
        <li>
          <a href="${this.imdb}" title="${this.name}" target="_blank" class="show-info--imdb">
            link
          </a>
        </li>
      </ol>
    `;
  }
}
