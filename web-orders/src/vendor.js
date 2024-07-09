import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import ocLazyLoad from 'oclazyload';
import '../../webComponents/dist/web-components';

export default angular.module('weborders.vendor', [uirouter, ocLazyLoad]);
