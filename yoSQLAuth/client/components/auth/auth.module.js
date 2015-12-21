'use strict';

angular.module('yoSqlauthApp.auth', [
  'yoSqlauthApp.constants',
  'yoSqlauthApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
