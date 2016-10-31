class AppController {
  constructor($mdSidenav, $mdMedia) {
    'ngInject';
    this.name = 'app';
    this.$mdSidenav = $mdSidenav;
    this.$mdMedia = $mdMedia;
  }

  toggleNavigation() {
    this.$mdSidenav('right').toggle();
  }
}

export default AppController;
