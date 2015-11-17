import angular from 'angular';
import 'angular-ui-router';

// Config Block
import config from './config';

// Controllers
import HomeController from './controllers/home.controller';
import AddController from './controllers/add.controller';

angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
;
