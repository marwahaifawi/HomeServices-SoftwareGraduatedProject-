var express = require("express");
const cors = require("cors");
var app = express();
var mysql = require("mysql");
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" , extended:'true' }));
app.use(cors());
var bcrypt = require("bcrypt");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "",
  database: "application",
});
const hostname = "192.168.1.104";
const port = "1321";
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

con.connect(function (error) {
  if (error) console.log(error);
  else console.log("connected");
});
app.get("/users", function (req, res) {
  // Connecting to the database.
  // Executing the MySQL query (select all data from the 'users' table).
  con.query(
    "SELECT * FROM users",
    function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;
      // Getting the 'response' from the database and sending it to our route. This is were the data is.

      res.send(results);
      console.log(results);
    }
  );
});

//----------------------------------------------------SignUp
app.post("/signup", function (req, res) {
  var userName = req.body.userName.value;
  var emailAdd = req.body.emailAdd.value;
  var passwordFirst = req.body.passwordFirst.value;
  if (
    emailAdd &&
    userName &&
    passwordFirst
  )  {
    bcrypt.hash(passwordFirst, 10, function (error, hash) {
      con.query(
        "SELECT * FROM users where email=?",
        [emailAdd],
        function (error, row) {
          if (row.length > 0) {
            res.send({ message: "This email already exists" });
          } else {
            con.query(
              "SELECT * FROM users where name=?",
              [userName],
              function (error, row) {
                if (row.length > 0) {
                  res.send({ message: "This username already exists" });
                } else {
                  var sql =
                    "INSERT INTO users (name,password,email) VALUES ?";
                  var values = [
                    [
                      userName,
                      hash,
                      emailAdd,
                    ],
                  ];
                }
                  con.query(sql, [values], function (error, row) {
                    if (error) throw error;
                    res.send({
                      success: true,
                      message: "Welcome to Application",
                    });
                  });
                }
            );
          }
        }
      );
    });
  } else {
    res.send({
      message: "Please fill all the fields",
    });
  }
});