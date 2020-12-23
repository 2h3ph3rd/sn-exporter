var wakeup = require('./wakeup.js')
var cleaner = require('./cleaner.js')

module.exports = {
  /**
   * Start all jobs
   */
  start() {
    wakeup.start()
    cleaner.start()
  },
}
