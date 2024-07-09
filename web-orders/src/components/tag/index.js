// Component
import {
  LabelTagComponent,
  OutOfStockTagComponent,
  PopularTagComponent,
} from './tag.component';
import angular from 'angular';

// Styles
import './tag.scss';

export default angular.module('weborders.components.tag', [])
  .component('labelTag', LabelTagComponent)
  .component('outOfStockTag', OutOfStockTagComponent)
  .component('popularTag', PopularTagComponent)
  .name;
