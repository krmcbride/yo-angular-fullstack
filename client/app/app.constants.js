'use strict';

import angular from 'angular';

export default angular.module('yoAngularFullstackApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
