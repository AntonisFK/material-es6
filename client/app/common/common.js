import angular from 'angular';
import Hero from './hero/hero';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Hero,
  User
])
  
.name;

export default commonModule;
