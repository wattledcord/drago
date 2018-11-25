const express = require('express');
const bodyParser=require('body-parser');
const config=require('./config')
export default class WebServer {
  constructor () {
    this.app = express()
    this.app.use(express.static('dist'));
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }
  start () {
    return new Promise((resolve, reject) => {
      try {
        this.server = this.app.listen(config.serverport, function () {

          resolve()
        })
      } catch (e) {
        console.error(e)
        reject(e)
      }
    })
  }
  stop () {
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => {
          resolve()
        })
      } catch (e) {
        console.error(e.message)
        reject(e)
      }
    })
  }
}