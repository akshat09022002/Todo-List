const zod=require('zod');

const createTodo= zod.object({
    title: zod.string(),
    description: zod.string()
});

const signin=zod.object({
    username: zod.string().email(),
    password: zod.string()
})

const signup=zod.object({
    username: zod.string().email(),
    password: zod.string()
})

const updateTodo=zod.object({
    id:zod.string(),
    username: zod.string(),
    task: zod.string()
});

module.exports={
    updateTodo : updateTodo,
    createTodo : createTodo,
    signin : signin,
    signup: signup
};