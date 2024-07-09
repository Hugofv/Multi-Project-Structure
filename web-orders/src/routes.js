import {
  menuFutureState,
} from './features/menu/menu.routes.future';

/* @ngInject */
export default function routes($locationProvider, $uiRouterProvider, $urlRouterProvider) {
  'ngInject';

  const $stateRegistry = $uiRouterProvider.stateRegistry;

  // Register routes
  $stateRegistry.register(menuFutureState);

  // Default route
  $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise('/main/menu');
}
