const express=require("express");

const router=new express.Router();


const ToDoCon= require("../controller/todoCon");

router.post('/enter',ToDoCon.entry)
router.get('/view',ToDoCon.view)
router.delete('/remove/:id',ToDoCon.remove)

module.exports=router;