// Module dependencies
import TAG_MODULE from 'components/tag';

// Component
import MenuItemComponent from './menu-item.component';

// Styles
import './menu-item.scss';

export default angular.module('weborders.components.menuItem', [
  TAG_MODULE
])
  .component('menuItem', MenuItemComponent)
  .name;
