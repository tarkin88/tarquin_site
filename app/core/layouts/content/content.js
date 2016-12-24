class ContentCtrl {
  constructor () {
    this.app = require('index.json')
  }
}

module.exports = () => {
  require('./content.scss')
  return {
    controller: ContentCtrl,
    controllerAs: 'cont',
    template: require('./content.html')
  }
}
