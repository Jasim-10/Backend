const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");


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

 
let q = "INSERT INTO person (id,name,age,email,password) VALUES ?";
 let data = [];
 for(let i=1;i<=100;i++ ){
  data.push(getRandomUser());
 }

try{
  connection.query(q,[data],(err,result)=>{
    if(err) throw err;
    console.log(result);
  });
} catch(err){
  console.log(err);
}
connection.end();




