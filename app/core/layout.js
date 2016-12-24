'use strict'

module.exports = angular.module('app.layout', [])
.directive('lumxNavbar', require('./layouts/nav/nav'))
.directive('content', require('./layouts/content/content'))
