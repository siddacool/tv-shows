import TextTd from './TextTd';
import genre from './genre';

const defaultGenres = [];

export default class extends TextTd {
  constructor(genres = defaultGenres) {
    super();
    this.genres = genres;
    this.fieldName = 'genre';
    this.text = `${this.genres.map(g => `${genre(g)}`).join('')}`;
  }
}

