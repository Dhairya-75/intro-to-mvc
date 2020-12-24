const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


app.get('/', (req, res, next) => {
	res.json({message: "Welcome to my server"});
});

app.get('/ip', (req, res, next) => {
	const ip = req.connection.remoteAddress;
	res.json({message: "Your IP address is: " + ip});
})

app.get('/browser', (req, res, next) => {
	const userAgent = req.headers["user-agent"];
	res.json({message: "Your browser is: " + userAgent})
})

app.listen(5000, () => console.log("Running on 5000"));