const express = require("express");
const router = express.Router();
const {Character, Class} = require("../models");
//--  /api/characters

// Get all Characters
router.get("/",(req,res)=>{
    Character.findAll({
        include:[Class]
    }).then(chars=>{
        if(locations.length===0){
            return res.status(404).json({msg:"No Characters found."})
        }
        res.json(chars)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get a specific Character by ID
router.get("/:id",(req,res)=>{
    Character.findByPk(req.params.id,{
        include:[Class]
    }).then(char=>{
        if(!char){
            return res.status(404).json({msg:"No Character with that id exists."})
        }
        res.json(char)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Create a new Character
router.post("/", (req, res) => {
    Character.create({
        name:req.body.name,
        role:req.body.role,
        ClassId:req.body.ClassId,
    }).then(newChar=>{
        res.json(newChar)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Update a Character by ID
router.put("/:id", (req, res) => {
    Character.update({
        name:req.body.name,
        role:req.body.role,
        ClassId:req.body.ClassId,
    },{
        where:{id:req.params.id}
    }).then(editChar=>{
        if(!editChar){
            return res.status(404).json({msg:"No Character with that id exists."})
        }
        res.json(editChar)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Delete a Character by ID
router.delete("/:id",(req,res)=>{
    Character.destroy({
        where:{
            id:req.params.id
        }
    }).then(delChar=>{
        if(!delChar){
            return res.status(404).json({msg:"No Character with this id."})
        }
        res.json(delChar)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;