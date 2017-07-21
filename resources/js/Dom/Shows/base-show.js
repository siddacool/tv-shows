export default class {
  constructor(
    name,
    genre,
    type,
    mindf = false,
    runtime,
    seasons,
    avgepisodes,
    network,
    status,
    imdb,
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
    this.status = status.toLowerCase();
    this.imdb = imdb;
  }
}
