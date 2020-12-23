var CronJob = require('cron').CronJob
var http = require('http')

function cleanRequest() {
  const options = {
    hostname: 'sn-exporter.herokuapp.com',
    port: 80,
    path: '/clean',
    method: 'GET',
  }

  const req = http.request(options, (res) => {
    res.on('data', (d) => {
      console.log(new Date(), 'clean', res.statusCode, d.toString())
    })
  })

  req.on('error', (error) => {
    console.error(error)
  })

  req.end()
}

module.exports = new CronJob(
  '* */15 * * * *',
  cleanRequest(),
  null,
  true,
  'Europe/Rome'
)
