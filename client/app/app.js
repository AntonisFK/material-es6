import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import './index.styl';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

angular.module('app', [
  uiRouter,
  'ngMaterial',
  Common,
  Components
])
  .config(($locationProvider, $mdThemingProvider) => {
    'ngInject';
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    $mdThemingProvider.theme('indigo');
  })
  .run(($rootScope, $mdToast) => {
    'ngInject';
    $rootScope.$on('message',
      (e, message) => {
        $mdToast.show(
          $mdToast.simple()
          .textContent(message.text)
          .position('top right')
          .hideDelay(3000)
        );
      });
  })

  .component('app', AppComponent);
