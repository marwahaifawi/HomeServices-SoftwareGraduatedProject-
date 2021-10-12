var express = require('express');
var app  = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
 
    host:'localhost',
    port:'3306',
    user:'root',
    password:'', //empty for window
    database: 'application'

});

var server = app.listen(1342, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("start");

});

con.connect(function(error){
  if(error) console.log(error);
  else console.log("connected");
});

app.get('/application', function(req, res){
  con.query('select * from services', function(error, rows, fields){
        if(error) console.log(error);

        else{
            console.log(rows);
            res.send(rows);

        }

  });
});