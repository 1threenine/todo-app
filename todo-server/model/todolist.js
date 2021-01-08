const mongoose = require('mongoose')
const todolist=mongoose.model("todolist",{
    order:Number,
    content:String

});

module.exports={
    todolist
};