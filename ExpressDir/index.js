const express = require("express");
const app = express();
const port = 3000;

app.use((req, res) => {
  res.send({
    name: "mango",
    color: "yellew",
  });
})

app.get("/fruits",(req,res)=>{
    let code = "<h1>Fruits<h1><ul><li>Apple</li></ul>";
    res.send(code);
})

app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
});