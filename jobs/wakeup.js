var CronJob = require('cron').CronJob
var http = require('http')

function pingRequest() {
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

var job = new CronJob(
  '* */30 * * * *',
  pingRequest(),
  null,
  true,
  'Europe/Rome'
)

job.start()
