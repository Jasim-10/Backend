const express = require("express");
const app = express();
const port = 3000;

// app.use("/",(req, res) => {
//   res.send({
//     name: "mango",
//     color: "yellew",
//   });
// })

// app.get("/fruits",(req,res)=>{
//     let code = "<h1>Fruits<h1><ul><li>Apple</li></ul>";
//     res.send(code);
// })


// app.get("/",(req,res)=>{
//   res.send("you contacted at root path");
// })

// app.get("/help",(req,res)=>{
//   res.send("you contacted at help path");
// })


// app.get("/about",(req,res)=>{
//   res.send("you contacted at about path");
// })

// app.post("/",(req,res)=>{
//   res.send("you send a post request to root")
// })




// app.get("/",(req,res)=>{
//   res.send("hello i am root");
// });


// app.get("/:username/:id",(req,res)=>{
//   let {username,id} = req.params;
//   res.send(`welcome to the page of @${username} ${id}.`);
// })


// app.get("/:username/:id",(req,res)=>{
//   let {username,id} = req.params;
//   let htmlStr = `<h1>Welcome to the page of @${username} ${id} </h1>`;
//   res.send(htmlStr);
// })


app.get("/search",(req,res)=>{
  let {q} = req.query;
  if(!q) {
    res.send("No search query");
  }
  res.send(`These are the result for ${q}`)
})




app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
});