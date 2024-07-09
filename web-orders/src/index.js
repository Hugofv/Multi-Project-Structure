// App base styles
import './index.scss';

// App base config
import routes from './routes';

// App module dependencies
import MAIN_MODULE from 'features/main';

angular.module('weborders', [
  'weborders.vendor',
  MAIN_MODULE,
])
.config(routes)
.name;

// Bootstrap AngularJS application
(() => {
  const root = document.getElementById('root');
  root.innerHTML = '<ui-view></ui-view>';

  angular.bootstrap(root, ['weborders']);
})();
