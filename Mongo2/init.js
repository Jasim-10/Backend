const mongoose = require("mongoose");
const Chat = require("./models/chat.js");



main()
    .then(()=>{
        console.log("connection Successful")
    })
    .catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "Send me your exam sheets",
        created_at: new Date()
    },
    {
        from: "rahul",
        to: "amit",
        msg: "Can you share yesterday's notes?",
        created_at: new Date()
    },
    {
        from: "priya",
        to: "neha",
        msg: "I will send them in the evening",
        created_at: new Date()
    },
    {
        from: "ankit",
        to: "sneha",
        msg: "Have you completed the assignment?",
        created_at: new Date()
    },
    {
        from: "sneha",
        to: "ankit",
        msg: "Yes, submitted it today",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "kajal",
        msg: "Exam syllabus is updated, check once",
        created_at: new Date()
    }

]


Chat.insertMany(allChats);