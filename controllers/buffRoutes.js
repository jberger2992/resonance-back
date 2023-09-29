const express = require("express");
const router = express.Router();
const {Buff} = require("../models");
//--  /api/buffs

// Get all Buffs
router.get("/",(req,res)=>{
    Buff.findAll({
    }).then(buffs=>{
        if(locations.length===0){
            return res.status(404).json({msg:"No Buffs found."})
        }
        res.json(buffs)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get a specific Buff by ID
router.get("/:id",(req,res)=>{
    Buff.findByPk(req.params.id,{
    }).then(buff=>{
        if(!buff){
            return res.status(404).json({msg:"No Buff with that id exists."})
        }
        res.json(buff)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Create a new Buff
router.post("/", (req, res) => {
    Buff.create({
        name:req.body.name,
        description:req.body.description,
    }).then(newBuff=>{
        res.json(newBuff)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Update a Buff by ID
router.put("/:id", (req, res) => {
    Buff.update({
        name:req.body.name,
        description:req.body.description,
    },{
        where:{id:req.params.id}
    }).then(editBuff=>{
        if(!editBuff){
            return res.status(404).json({msg:"No Buff with that id exists."})
        }
        res.json(editBuff)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Delete a Buff by ID
router.delete("/:id",(req,res)=>{
    Buff.destroy({
        where:{
            id:req.params.id
        }
    }).then(delBuff=>{
        if(!delBuff){
            return res.status(404).json({msg:"No Buff with this id."})
        }
        res.json(delBuff)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;