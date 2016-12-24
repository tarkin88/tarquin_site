/*  jshint browser true */
'use strict'

let angular = require('angular')
require('./vendor')()


let appModule = require('../index')

angular.element(document).ready(function () {
  angular.bootstrap(document, [appModule.name], {
    //  strictDi: true
  })
})
