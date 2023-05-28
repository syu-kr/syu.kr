/**
 *    ____                  __________
 *   / __ \_   _____  _____/ __/ / __ \_      __
 *  / / / / | / / _ \/ ___/ /_/ / / / / | /| / /
 * / /_/ /| |/ /  __/ /  / __/ / /_/ /| |/ |/ /
 * \____/ |___/\___/_/  /_/ /_/\____/ |__/|__/
 *
 * The copyright indication and this authorization indication shall be
 * recorded in all copies or in important parts of the Software.
 *
 * @author 0verfl0w767
 * @link https://github.com/0verfl0w767
 * @license MIT LICENSE
 *
 */
const express = require('express')
const http = require('http')
const app = express()

app.use('/', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/page/index.html')
})

app.get('*', (req, res) => {
  res.status(404).json({statusCode: 404, message: 'unknown request.'})
})

http.createServer(app).listen(1233, '0.0.0.0')
