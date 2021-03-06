const express = require('express');
const app = express();

var bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(express.static( __dirname + '/public/dist/public'));

require('./backend/models/task.js');

var routes = require('./backend/config/routes.js');

routes(app);

app.listen(8000, () => {console.log("listening on 8000")})