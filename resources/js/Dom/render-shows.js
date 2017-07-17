function renderShows(data) {
  return `
    ${data.map(show => `
      ${show.render()}
    `).join('')}
  `;
}

export default renderShows;

