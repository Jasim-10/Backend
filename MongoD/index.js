const mongoose = require('mongoose');

main().then((res)=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User = mongoose.model("User",userSchema);

// const user1 = new User({name: "Adam",email:"adam123@yahoo.in",age:48});
// const user2 = new User({ name: "Brian", email: "brian45@gmail.com", age: 32 });
// user1.save();
// user2.save().then((res)=>{
//     console.log("successful")
// }).catch((err)=>{
//     console.log(err)
// })


// User.insertMany([
//     { name: "Catherine", email: "cathy.dev@outlook.com", age: 27 },
//     { name: "David", email: "david_khan@gmail.com", age: 41 },
//     { name: "Emily", email: "emily99@yahoo.com", age: 35 },
// ]).then((res)=>{
//     console.log(res);
// })


// User.find({_id:"697cc88f472b212a47f7a7b6"})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err)
//     });


// User.findById("697cc88f472b212a47f7a7b6")
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err)
//     });



// User.updateOne({name:"David"},{age:44}).then((res)=>{
//     console.log(res);
// }).catch(err =>{
//     console.log(err);
// })


// User.updateMany({age:{$gt:20}},{age:55}).then((res)=>{
//     console.log(res);
// }).catch(err =>{
//     console.log(err);
// })



// User.findOneAndUpdate({name:"David"},{age:45}).then((res)=>{
//     console.log(res);
// }).catch(err =>{
//     console.log(err);
// })



User.findOneAndUpdate({name:"Emily"},{age:42},{new:true}).then((res)=>{
    console.log(res);
}).catch(err =>{
    console.log(err);
})
