const express=require('express')
const app=express();
const port=process.env.PORT || 3000;

require('../src/db/conn')

app.use(express.json())

const router=require('./route/todorouter')
app.use('/api/todo',router)


app.get('/',(req,res)=>{
    res.send('Welcome');
})

app.listen(port,()=>{
    console.log(`Connected to the PORT ${port}`)
})
