// Import Style
import './menu.scss';

// Menu config
import controller from './menu.controller';
import routes from './menu.routes';


export const MENU_MODULE = angular.module('menu',[]);

export default MENU_MODULE
  .config(routes)
  .controller(controller.UID, controller)
  .name;
