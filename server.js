var express = require("express");
const cors = require("cors");
var app = express();
var mysql = require("mysql");
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: "home.services.10102@gmail.com",
    pass: "123456789*+",
  },
});
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
const hostname = "192.168.1.109";
const port = "1321";
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

con.connect(function (error) {
  if (error) console.log(error);
  else console.log("connected");
});
//----------------------------------------------------SignUp
app.post("/signup", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  console.log(email,password,name);
  if (
    email &&
    name &&
    password
  )  {
    bcrypt.hash(password, 10, function (error, hash) {
      con.query(
        "SELECT * FROM users where email=?",
        [email],
        function (error, row) {
          if (row.length > 0) {
            res.send({ message: "This email already exists" });
          } else {
            con.query(
              "SELECT * FROM users where name=?",
              [name],
              function (error, row) {
                if (row.length > 0) {
                  res.send({ message: "This username already exists" });
                } else {
                  var sql =
                    "INSERT INTO users (name,password,email) VALUES ?";
                  var values = [
                    [
                      name,
                      hash,
                      email,
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
//------------------------------------------------------get services
app.get("/getservices", function (req, res) {
  con.query("SELECT * FROM services", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});
//------------------------------------------------------get products
app.get("/getproducts", function (req, res) {
  con.query("SELECT * FROM products", function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});
//----------------------------------------------------Login
app.post("/login", function (req, res) {
  var email = req.body.email; //value from textfield
  var password = req.body.password; //value from textfield
  console.log(email);
  if (email && password) {
    // if user fill all text input
    con.query(
      "SELECT * FROM users where email=?", //update
      [email],
      function (error, row) {
        console.log(row[0].password);
        if (row.length < 1) {
          res.send({
            success: false,
            message: "Incorrect Email and/or Password!",
          });
        } 
        else if (bcrypt.compareSync(password, row[0].password)) {
            res.send({
              success: true,
              name: row[0].name,
              email:row[0].email,
              password:row[0].password
            });
            console.log(res.name)
          }
        else {
          res.send({
            success: false,
            message: "Incorrect Email and/or Password!",
          });
        }
      }
    );
  } else {
    res.send({ message: "Please enter Username and Password!" });
    res.end();
  }
});
//------------------------------------------resert password
app.post("/resetpass", function (req, res) {
  const email = req.body.email;
  const code = req.body.code;
  let mailOptions = {
    from: "Home Services",
    to: email,
    subject: "Reset Password ",
    text:
      "You are receiving this because you (or someone else) have requested the reset of the password for your account in HomeServices application.\n\n" +
      "Please use this code to reset your password \n\n" +
      "If you did not request this, please ignore this email and your password will remain unchanged.\n\n" +
      "Code:" +
      code,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send({message: error+" "});
    } 
    else {
      var sql = "INSERT INTO resetpass (email,code) VALUES ?";
      var values = [[email, code]];
      con.query(sql, [values], function (error, row) {
        if (error) throw error;
        res.send({
          success: true,
          message: "Thank you. We will answer your request as soon as possible",
        });
      });
    }
  });
});
//----------------------------------------------------------check email FOR resetPass in Passreset screen
app.post("/checkemailFORresetPass", function (req, res) {
  var email = req.body.email; //value from textfield

  // if user fill all text input
  con.query(
    "SELECT * FROM users where email=?", //update
    [email],
    function (error, row) {
      if (row.length < 1) {
        res.send({
          success: false,
          message: "Incorrect Email",
        });
      } else {
        res.send({
          success: true,
          message: "yes",
        });
      }
    }
  );
});
//--------------------------------------- reset pass verify

app.post("/resetpassverify", function (req, res) {
  var email = req.body.email; //value from textfield
  var codeuser = req.body.codeuser;
  // if user fill all text input
  con.query(
    "SELECT * FROM resetpass where email=?", //update
    [email],
    function (error, row) {
      if (row[0].code == codeuser) {
        res.send({
          success: true,
          message: "yes",
        });
      } else {
        res.send({
          success: false,
          message: "Incorrect Code",
        });
      }
    }
  );
});
//--------------------------------------------------------reset pass delete
app.delete("/resetpassdelete", function (req, res) {
  con.query(
    "DELETE  FROM resetpass where email=? ",
    [req.body.email],
    function (error, results, fields) {
      if (error) throw error;
      else
        res.send({
          success: true,
          message: "Deleted Successfuly",
        });
    }
  );
});
//---------------------------------------------------------update resetpass

app.put("/updateresetpass", function (req, res) {
  var email = req.body.email;
  var passwordsign = req.body.password;

  bcrypt.hash(passwordsign, 10, function (error, hash) {
    var sql = "UPDATE users set password=? where email=?";
    con.query(sql, [hash, email], function (error, row) {
      if (error) throw error;
      else
        res.send({
          success: true,
          message: "Updated Successfuly now you can go and login again",
        });
    });
  });
});

//------------------------------------------virefy pass in profile screen------------------------------------
app.post("/verify", function (req, res) {
  var name = req.body.name; //value from textfield
  var password = req.body.password; //value from textfield

  // if user fill all text input
  con.query(
    "SELECT * FROM users where name=? ", //update
    [user],
    function (error, row) {
      if (bcrypt.compareSync(password, row[0].password)) {
        res.send({
          success: true,
        });
      } else {
        res.send({
          success: false,
          message: "Wrong password.Try again",
        });
      }
    }
  );
});
//-------------------------------------------------save changed pass in profile screen
app.put("/savepass", function (req, res) {
  var name = req.body.name;
  var passwordsign = req.body.password;

  bcrypt.hash(passwordsign, 10, function (error, hash) {
    var sql = "UPDATE users set password=? where name=?";
    con.query(sql, [hash, name], function (error, row) {
      if (error) throw error;
      else
        res.send({
          success: true,
          message: "Updated Successfuly",
        });
    });
  });
});
//---------------------------------------favourite in fav screen
app.get("/Fav", function (req, res) {
  con.query(
    "SELECT * FROM favourite where email=?",
    [req.query.email],
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});
//------------------------------------ Add to favourites
app.post("/favouritesAdd", function (req, res) {
  var email = req.body.email;
  var id = req.body.id;
  var name= req.body.name;
  var price= req.body.price;
  var image= req.body.image;
  var liked= req.body.liked;
  var sql = "INSERT INTO favourite (email,id , price , name , image , liked) VALUES ?";
  var values = [[email, id , price , name , image , liked]];
  con.query(sql, [values], function (error, row) {
    if (error) throw error;
    res.send({
      success: true,
      message: "Added successfully to favourites",
      data: row,
    });
  });
});
//----------------------------------------------delete from fav in fav screen
app.delete("/deleteFav", function (req, res) {
  con.query(
    "DELETE  FROM favourite where id=? ",
    [req.body.id],
    function (error, results, fields) {
      if (error) throw error;
      else
        res.send({
          success: true,
          message: "Deleted Successfuly",
        });
    }
  );
});
//----------------------------------------------- get favorite products
app.get("/getFavproducts", function (req, res) {
  con.query(
    "SELECT * FROM products where id=?",
    [req.query.id],
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});
//------------------------------------ Add to Cart
app.post("/shoppinglistAdd", function (req, res) {
  var email = req.body.email;
  var id = req.body.id;
  var name= req.body.name;
  var price= req.body.price;
  var image= req.body.image;
  var sql = "INSERT INTO shoppinglist (email,id , price , name , image ) VALUES ?";
  var values = [[email, id , price , name , image ]];
  con.query(sql, [values], function (error, row) {
    if (error) throw error;
    res.send({
      success: true,
      message: "Added successfully to Shoppings",
      data: row,
    });
  });
});
//----------------------------------------------shopping list in shopping screen
app.get("/shoppinglistScreen", function (req, res) {
  con.query(
    "SELECT * FROM shoppinglist where email=?",
    [req.query.email],
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});
//----------------------------------------------delete from shopping list in shopping screen
app.delete("/deleteshoppinglist", function (req, res) {
  con.query(
    "DELETE  FROM shoppinglist where email=? AND id=?",
    [req.body.email],[req.body.id],
    function (error, results, fields) {
      if (error) throw error;
      else
        res.send({
          success: true,
          message: "Deleted From Shoppinglist",
        });
    }
  );
});