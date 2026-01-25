const express = require("express");
const app = express();
let port = 8080;


app.get("/",(req,res)=>{
    res.send("root path....")
})

// app.get("/fruits",(req,res)=>{
//     let fruits = "<h1>Fruits</h1><ul><li>Apple</li><li>Banana</li></ul>";
//     res.send(fruits);
// });

// app.post("/",(req,res)=>{
//     res.send("you send a request");
// });


// app.get("/:username/:id",(req,res)=>{
//     res.send("hello i am root");
//     console.log(req.params);
// });


// app.get("/:username/:id",(req,res)=>{
//     let {username,id} = req.params;
//     res.send(`Welcome to my page @${username}. and my id is ${id} `);
// });

// app.get("/search",(req,res)=>{
//     let {q} = req.query;
//     if(!q){
//         res.send("<h1>Nothing search</h1>")
//     }
//     res.send(`<h1>Your search result is: ${q}</h1>`);
// })


// app.use((req,res)=>{
//     res.status(404).send("this path does not exist");
// });



app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
});