const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect('mongodb://robineaudbuser:123@ds241065.mlab.com:41065/robineau',{},(err)=>{
		if (err)
		{
			console.log(err);
		}
	else
	{
		console.log('Connection ok');
	}
});

app.get('*', (req, res) =>{
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;
