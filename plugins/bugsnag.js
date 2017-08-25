import Vue from 'vue'
import Bugsnag from 'bugsnag-js'

Bugsnag.apiKey = '2c059ac3645b25fca9a7800ab6d98919'
Vue.config.errorHandler = function (err, vm) {
  let errorData = {
    error: err,
    vm: vm
  }
  Bugsnag.notifyException(errorData, "Vue error")
}