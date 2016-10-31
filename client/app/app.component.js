import template from './app.html';
import './app.styl';

let appComponent = {
  template,
  controller,
  controllerAs: '$ctrl',
  restrict: 'E'
};

const controller = ($mdSidenav) => {
  'ngInject';
  this.toggle = () => $mdSidenav('right').toggle();
}

export default appComponent;
