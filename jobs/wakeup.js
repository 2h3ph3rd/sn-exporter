var CronJob = require('cron').CronJob
var http = require('http')

/**
 * Do a ping request to server to avoid sleep
 */
function ping() {
  const options = {
    hostname: 'sn-exporter.herokuapp.com',
    port: 80,
    path: '/ping',
    method: 'GET',
  }

  const req = http.request(options, (res) => {
    res.on('data', (d) => {
      console.log(new Date(), 'ping', res.statusCode, d.toString())
    })
  })

  req.on('error', (error) => {
    console.error(error)
  })

  req.end()
}

module.exports = new CronJob('* */30 * * * *', ping, null, true, 'Europe/Rome')
