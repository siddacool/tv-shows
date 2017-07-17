export default class {
  constructor() {
    this.list = [];
  }

  demand() {
    return this.list;
  }

  add(Show, props) {
    const a = new Show(
        props.name,
        props.genre,
        props.type,
        props.mindf,
        props.runtime,
        props.seasons,
        props.avgepisodes,
        props.network,
        props.status,
        props.imdb,
      );
    this.list.push(a);
  }
}
