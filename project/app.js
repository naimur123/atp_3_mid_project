const express 			= require('express');	
const bodyParser 		= require('body-parser');
const exSession 		= require('express-session');
const cookieParser 		= require('cookie-parser');
const app				= express();
const path              = require('path');



// const adminlogin				= require('./controllers/admin/adminlogin');
const adminhome			= require('./controllers/admin/adminhome');
const user				= require('./controllers/admin/user');
const logout			= require('./controllers/logout');
const login             = require('./controllers/login');
const userhome          = require('./controllers/customer/user');
const registration       = require('./controllers/customer/registration');
const transaction       = require('./controllers/customer/transaction');
const agenthome		    = require('./controllers/agent/agenthome');
const managerhome		= require('./controllers/manager/managerhome');
const user1				= require('./controllers/manager/user1');
const port				= 3000;

//configuration
app.set('view engine', 'ejs');





//middleware
app.use(express.static(path.join(__dirname+'/uploads'))); 

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/abc', express.static('assets'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));



app.use('/adminhome',adminhome);
app.use('/user',user);
app.use('/logout', logout);
app.use('/login',login);
app.use('/registration',registration);
app.use('/userhome',userhome);
app.use('/transaction',transaction);
app.use('/agenthome',agenthome);
app.use('/managerhome',managerhome);
app.use('/user1',user1);





//router
app.get('/', (req, res)=>{
	res.send('Welcome');
});

//server startup
app.listen(port, (error)=>{
	console.log('server strated at '+port);
}); 