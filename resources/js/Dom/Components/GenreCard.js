import { Component } from 'domr-a';
import genre from './genre';

const defaultGenres = [];

export default class extends Component {
  constructor(genres = defaultGenres) {
    super();
    this.genres = genres;
  }

  dom() {
    return `
      <div class="show-card-info--genre">
        ${this.genres.map(g => `${genre(g)}`).join('')}
      </div>
    `;
  }
}
