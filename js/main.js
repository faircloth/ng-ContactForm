import angular from 'angular';
import 'angular-ui-router';

// Config Block
import config from './config';

angular
  .module('app', ['ui.router'])
  .config(config)
;
