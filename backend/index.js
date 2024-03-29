const express=require('express');
const jwt=require('jsonwebtoken');
const { createTodo,updateTodo }=require("./types")
const { todo } = require("./mongo")
const {signUp_mongo}=require("./mongo");
const {signin} = require("./types")
const {signup} = require("./types")
const cors= require("cors");
const app=express();

app.use(express.json()); 

app.use(cors());


app.post('/signup',async function(req,res){
    const signUpCreden=req.body;
    const parseSignup= signup.safeParse(signUpCreden);

    if(!parseSignup.success){
        res.json({
            "msg":"invalid credentials" 
        })
        return;
    }

    const username=signUpCreden.username;
    const response = await signUp_mongo.find({username:username});
    if(response.length==0) {
        await signUp_mongo.create({
            username: username,
            password: signUpCreden.password
        })

        res.json({
            "msg": "signup successful"
        })
        return;
    }
    res.json({
        "msg":"user already exists"
    }) 
})

app.post('/signin',async function(req,res){
    const loginCreden= req.body;
    const parselogin= signin.safeParse(loginCreden);
    if(!parselogin.success){
        res.json({
            "msg" : "invalid input"
        })
        return;
    } 

    const username=loginCreden.username;
    const password=loginCreden.password;
    const response= await signUp_mongo.find({username:username,password:password});
    if(response.length==0){
        res.json({
            "msg":"invalid login credentials"
        })
        return;
    }

    res.json({
        "msg":"access granted"
    })

})

app.get('/todos',async function(req,res){
    const username=req.headers.username; 
    const todos= await todo.find({username:username});
    res.json(todos);
});

app.post('/todos',async function(req,res){
    const createPayload=req.body;
    // console.log(createPayload.username);
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.send(411).json({ 
            msg:"you sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        username: createPayload.username,
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg:"todo created"
    })

});

app.put('/completed',async function(req,res){
    const updatePayload=req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent wrong inputs"
        })
        return;
    }

    if(req.body.task=="update"){
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    });

    res.json({
        msg: "Todo marked as complete"
    })}
    else if(req.body.task=="delete"){
        await todo.deleteOne({
            _id: req.body.id
        })
    }
    else{
        await todo.deleteMany({
            username: req.body.username,
        })
    }

});



app.listen(8080);
