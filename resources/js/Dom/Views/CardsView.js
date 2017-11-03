import CardContainer from '../Containers/CardContainer';

export default function (data) {
  const cardContainer = new CardContainer(data.api);
  const wrapper = document.getElementById('wrapper');

  cardContainer.replaceContentOf(wrapper);
}
