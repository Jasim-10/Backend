const express = require("express");
const app= express();
const port = 8080;
const path = require("path")
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const methodOverride = require("method-override");



app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'JasimAns123@'
});


let getRandomUser = () =>{
  return [
    faker.number.int({ min: 100, max: 999999 }),
    faker.internet.username(),
    faker.number.int({ min: 1, max: 60 }),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//Home Page
app.get("/",(req,res)=>{
  let q = `SELECT count(*) FROM person`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs",{count});
    });
  } catch(err){
    console.log(err);
    res.send("some error");
  }
});


//Show route
app.get("/user",(req,res)=>{
  let q = `Select * From person`;
   try{
    connection.query(q,(err,users)=>{
      if(err) throw err;
      res.render("showuser.ejs",{users});
    });
  } catch(err){
    console.log(err);
    res.send("some error");
  }
});



//Edit route
app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q = `Select * FROM person WHERE id=${id}`;
  try{
    connection.query(q,(err,result)=>{
      if(err) throw err;
      let user = result[0];
      res.render("edit.ejs",{user});
    });
  } catch(err){
    console.log(err);
    res.send("some error");
  }
});

//update route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, name: newName } = req.body;
  let q = `SELECT * FROM person WHERE id = ${id}`;
  try{
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass !== user.password) {
        res.send("Wrong Password");
      }else{
        let q2 = `UPDATE person SET name = '${newName}' WHERE id = '${id}'`;
        connection.query(q2, (err, updateResult) => {
          if (err) throw err;
          res.redirect("/user");
        });
      };
    });
  } catch(err){
    console.log(err);
    res.send("error")
  }
})

app.listen(port,()=>{
  console.log(`Server is listening to port ${port}`)
})




// try{
//   connection.query(q,[data],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
//   });
// } catch(err){
//   console.log(err);
// }
// connection.end();