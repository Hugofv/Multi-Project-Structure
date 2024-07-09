
export const menuFutureState = {
  name: 'main.menu.**',
  url: '/menu',
  lazyLoad: (transition) => {
    // const Spinner = transition.injector().get('Spinner');
    const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
    const $timeout = transition.injector().get('$timeout');

    const LOADER_KEY = 'menu-loading-script';
    // Spinner.show(LOADER_KEY);

    // https://webpack.js.org/api/module-methods/#magic-comments
    return import(/* webpackChunkName: "menu" */'./')
      .then(module => $ocLazyLoad.load(module.MENU_MODULE))
      .finally(() => {
        // $timeout(() => Spinner.hide(LOADER_KEY));
      });
  }
};
