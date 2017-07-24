function renderShow(Show, props) {
  const showList = new Show(
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

  return showList.render();
}

export default renderShow;
