class NavCtrl {
  constructor () {
    this.app = require('index.json')
  }
}

module.exports = () => {
  require('./nav.scss')
  return {
    controller: NavCtrl,
    controllerAs: 'nav',
    template: require('./nav.html')
  }
}
