import menu from 'data/menu.json';

export default class MenuController {
  static get UID() {
    return 'MenuController';
  }

  /* ngInject */
  constructor($timeout) {
    'ngInject';

    this.$timeout = $timeout;
  }

  $onInit() {
    this.isLoading = true;
    this.getMenu();
  }

  getMenu() {
    const { $timeout } = this;

    $timeout(() => {
      this.menu = menu;
      this.isLoading = false;
    }, 2000);
  }

  getHeaderTitle() {
    if (this.isLoading) {
      return 'Loading menu...';
    }

    return this.menu?.name || 'Menu';
  }
}
