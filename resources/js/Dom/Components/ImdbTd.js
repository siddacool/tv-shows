import TextTd from './TextTd';

function ImdbDom(nameOfShow, link) {
  return `
    <a href="${link}" title="${nameOfShow}" target="_blank" class="show-info--imdb">
      <svg role="img" class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-new-window"></use></svg>
    </a>
  `;
}

export default class extends TextTd {
  constructor(nameOfShow = '', link = '') {
    super();
    this.nameOfShow = nameOfShow;
    this.link = link;
    this.fieldName = 'imdb';
    this.text = ImdbDom(this.nameOfShow, this.link);
  }
}

