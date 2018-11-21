import WebServer from './config/web.server.js';
var routes=require('./routes/routes.js');
let webServer = new WebServer();
webServer.start()
  .then(() => {
    console.log('Web server started!')
    routes(webServer.app);
  })
  .catch(err => {
    console.error(err)
    console.error('Failed to start web server')
  });


  
  