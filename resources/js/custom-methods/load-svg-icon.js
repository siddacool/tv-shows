function icon(name) {
  return `
    <svg role="img" class="icon">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-${name}"></use>
    </svg>
  `;
}

export default icon;
