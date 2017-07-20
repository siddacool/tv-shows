const stickyTableHeader = () => {
  const target = document.getElementById('show-table');
  const header = target.querySelector('ul');

  target.addEventListener('scroll', () => {
    if (target.scrollTop >= header.offsetTop + 20) {
      if (!target.classList.contains('sticky')) {
        target.classList.add('sticky');
      }
    } else {
      target.classList.remove('sticky');
    }
  });
};

export default stickyTableHeader;
