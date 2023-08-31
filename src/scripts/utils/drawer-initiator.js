const DrawerInitiator = {
  init({
    button, drawer, content, link,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });

    link.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });
  },

  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.toggle('navbar__open');
    button.classList.toggle('navbar__open');
  },

  _closeDrawer(event, drawer, button) {
    event.stopPropagation();
    drawer.classList.remove('navbar__open');
    button.classList.remove('navbar__open');
  },
};

export default DrawerInitiator;
