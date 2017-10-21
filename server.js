const express = require('express');
const expressStatic = require('express-static');
let server = express();
server.use(expressStatic('./www'))
server.listen(8080);
