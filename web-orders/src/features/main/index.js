import routes from './main.routes';

export const MAIN_MODULE = angular.module('weborders.main', []);

export default MAIN_MODULE
  .config(routes)
  .name;
