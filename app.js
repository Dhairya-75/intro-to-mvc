const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config()

// mongo connection
mongoose.connect(process.env.mongoDBURI, {
	useFindAndModify: false,
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}).then((conn) => {console.log(`connected to ${conn.connection.host}` )})

// const indexRouter = require('./routes/index');
const guestRouter = require('./routes/Guest.route');

const managerRouter = require('./routes/Manager.route');
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', indexRouter);
app.use('/guest', guestRouter);
app.use('/manager', managerRouter);


app.listen(5000, () => console.log("Running on 5000"));