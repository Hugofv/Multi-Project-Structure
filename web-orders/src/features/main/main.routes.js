
/* @ngInject */
export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('main', {
    url: '/main',
    abstract: true,
    template: require('./main.tpl.html'),
    deepStateRedirect: {
      default: {
        state: 'main.menu',
      },
    },
  });
}
