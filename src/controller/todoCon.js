const todoSchema=require('../model/td_struc');

const entry=async(req,res)=>{
const {task}=req.body;
let same_task;
try {
    same_task=await todoSchema.findOne({task})
} catch (error) {
    console.log(error);
    res.send(error);    
}
if(same_task){
    return res.send("Same task exist. Enter A New Task");
}
const newTask=new todoSchema({
    task
})
try {
    const NewTask=await newTask.save()
    res.status(201).send(NewTask)
} catch (error) {
    console.log(error)
    res.status(500).send(error)
}
}

const view=async(req,res)=>{
    try {
      const viewToDo=await todoSchema.find();
      res.send(viewToDo)
    } catch (error) {
        console.log(error)
        res.send(error)        
    }
}

const remove=async(req,res)=>{
    id=req.params.id
    let removeToDo
    try {
         removeToDo=await todoSchema.findByIdAndRemove(id);
    } catch (error) {
        console.log(error)        
    }
    if(!removeToDo){
        return res.send('Data not available')
    }
    return res.send('Deleted Succesfully')
}


module.exports={
    entry,
    view,
    remove
};