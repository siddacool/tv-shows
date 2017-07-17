const placeholder = '-';

export default class {
  constructor(
    name = placeholder,
    genre = placeholder,
    type = placeholder,
    mindf = false,
    runtime = placeholder,
    seasons = placeholder,
    avgepisodes = placeholder,
    network = placeholder,
    status = placeholder,
    imdb = placeholder,
    ) {
    this.name = name;
    this.id = this.name.substring(0, 20).replace(/[^a-z\d]+/gi, '').toLowerCase();
    this.genre = genre;
    this.type = type;
    this.isMindf = mindf;
    this.runtime = runtime;
    this.seasons = seasons;
    this.avgepisodes = avgepisodes;
    this.network = network;
    this.status = status;
    this.imdb = imdb;
  }
}
