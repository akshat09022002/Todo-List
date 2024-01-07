const mongoose=require('mongoose');

mongoose.connect("enteryoururl/todos")

const todoSchema= mongoose.Schema({
    title: String,
    username: String,
    description: String,
    completed: Boolean
})

const signUpCreden=mongoose.Schema({
    username: String,
    password: String
})

const updateSchema=mongoose.Schema({
    id: String
})

const todo=mongoose.model('todos',todoSchema);
const signUp_mongo=mongoose.model('login_mongo',signUpCreden);

module.exports={
    todo,
    signUp_mongo
}


