const express=require('express');
const { createTodo,updateTodo }=require("./types")
const { todo } = require("./mongo")
const cors= require("cors");
const app=express();

app.use(express.json());

app.use(cors());

app.get('/todos',async function(req,res){
    const todos= await todo.find({});
    res.json(todos);
});

app.post('/todos',async function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.statusCode(411).json({ 
            msg:"you sent the wrong inputs"
        })
        return;
    }

    await todo.create({
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

    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    });

    res.json({
        msg: "Todo marked as complete"
    })

});

app.listen(3000);
