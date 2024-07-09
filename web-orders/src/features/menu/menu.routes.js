import controller from './menu.controller';

/* @ngInject */
export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('main.menu', {
    url: '/menu',
    template: require('./menu.tpl.html'),
    controller: controller.UID,
    controllerAs: '$menu',
  });
}
