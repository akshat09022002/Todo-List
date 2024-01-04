const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://akshatkindle:Aisehi%401234@akbase.zt293q8.mongodb.net/todos")

const todoSchema= mongoose.Schema({
    title: String,
    // username: String,
    description: String,
    completed: Boolean
})

const updateSchema=mongoose.Schema({
    id: String
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo,
}


