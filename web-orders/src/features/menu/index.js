// Import Style
import './menu.scss';

// Menu config
import controller from './menu.controller';
import routes from './menu.routes';

// Module dependencies
import MENU_ITEM_MODULE from 'components/menu-item';

export const MENU_MODULE = angular.module('menu', [
  MENU_ITEM_MODULE,
]);

export default MENU_MODULE
  .config(routes)
  .controller(controller.UID, controller)
  .name;
