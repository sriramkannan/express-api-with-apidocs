var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  model = require('./api/models/usersModel'),
  bodyParser = require('body-parser');

//model.initUsers();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/usersRoutes'); //importing route
routes(app); //register the route

routes = require('./api/routes/rowsRoutes'); //importing route
routes(app); //register the route

app.use('/apidocs', express.static('apidocs'));

app.listen(port);


console.log('Autobotz RESTful API server started on: ' + port);
