import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Sidenav from './sidenav/sidenav';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Sidenav
])
  
.name;

export default componentModule;
