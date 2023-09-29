const express = require("express");
const router = express.Router();
const {Class,Skill} = require("../models");
//--  /api/classes

// Get all Classes
router.get("/",(req,res)=>{
    Class.findAll({
        include:[Skill]
    }).then(classes=>{
        if(locations.length===0){
            return res.status(404).json({msg:"No Classes found."})
        }
        res.json(classes)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get a specific Class by ID
router.get("/:id",(req,res)=>{
    Class.findByPk(req.params.id,{
        include:[Skill]
    }).then(rClass=>{
        if(!rClass){
            return res.status(404).json({msg:"No Class with that id exists."})
        }
        res.json(rClass)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Create a new Class
router.post("/", (req, res) => {
    Class.create({
        name:req.body.name,
        description:req.body.description,
    }).then(newClass=>{
        res.json(newClass)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Update a Class by ID
router.put("/:id", (req, res) => {
    Class.update({
        name:req.body.name,
        description:req.body.description,
    },{
        where:{id:req.params.id}
    }).then(editClass=>{
        if(!editClass){
            return res.status(404).json({msg:"No Class with that id exists."})
        }
        res.json(editClass)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Delete a Class by ID
router.delete("/:id",(req,res)=>{
    Class.destroy({
        where:{
            id:req.params.id
        }
    }).then(delClass=>{
        if(!delClass){
            return res.status(404).json({msg:"No Class with this id."})
        }
        res.json(delClass)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;