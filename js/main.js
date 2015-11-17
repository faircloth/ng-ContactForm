import angular from 'angular';
import 'angular-ui-router';

// Config Block
import config from './config';

// Controllers
import HomeController from './controllers/home.controller';
import AddController from './controllers/add.controller';

// Services
import ContactService from './services/contact.service';


angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .service('ContactService', ContactService)
;
