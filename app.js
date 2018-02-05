var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var d3 = require('d3');
var customers = require('./routes/customers'); 
var app = express();
var connection  = require('express-myconnection'); 
var mysql = require('mysql');

app.set('port',  9000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));


app.use(
    
    connection(mysql,{
        
        host: 'localhost',
        user: 'root',
        password : 'root',
        port : 3306,
        database:'mydb'
    },'request')
);

console.log("connected");

app.get('/', routes.index);
app.get('/customers', customers.list);
app.get('/student_registration', customers.registration);
app.get('/customers', customers.drawChart);
app.get('/customers/add', customers.add);
app.post('/customers/add', customers.save);
app.get('/customers/delete/:id', customers.delete_customer);
app.get('/customers/edit/:id', customers.edit); 
app.post('/customers/edit/:id',customers.save_edit);
app.use(app.router);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
