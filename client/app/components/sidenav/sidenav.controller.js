class SidenavController {
  constructor($mdToast) {
    "ngInject";

    this.name = 'sidenav';
    this.links = [
      { url: '/', text: 'Home', icon: 'home' },
      { url: '/about', text: 'About', icon: 'info_outline' }
    ];

    this.$mdToast = $mdToast
  }

  toast() {
    this.$mdToast.show(
      this.$mdToast.simple()
        .textContent('Simple Toast!')
        .position('top right')
        .hideDelay(3000)
    );
  }
}

export default SidenavController;
