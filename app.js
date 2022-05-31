const express = require('express');

const userRoutes = require('./routes/users')

const app = express();

app.use('/users', userRoutes)

app.listen(8080);