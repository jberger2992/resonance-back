const express = require("express");
const router = express.Router();
const {Set, Buff} = require("../models");
//--  /api/sets

// Get all Sets
router.get("/",(req,res)=>{
    Set.findAll({
        include:[Buff]
    }).then(sets=>{
        if(locations.length===0){
            return res.status(404).json({msg:"No Sets found."})
        }
        res.json(sets)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get a specific Set by ID
router.get("/:id",(req,res)=>{
    Set.findByPk(req.params.id,{
        include:[Buff]
    }).then(set=>{
        if(!set){
            return res.status(404).json({msg:"No Set with that id exists."})
        }
        res.json(set)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Create a new Set
router.post("/", (req, res) => {
    Set.create({
        name:req.body.name,
        description:req.body.description,
        role:req.body.role,
    }).then(newSet=>{
        res.json(newSet)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Update a Set by ID
router.put("/:id", (req, res) => {
    Set.update({
        name:req.body.name,
        description:req.body.description,
        role:req.body.role,
    },{
        where:{id:req.params.id}
    }).then(editSet=>{
        if(!editSet){
            return res.status(404).json({msg:"No Set with that id exists."})
        }
        res.json(editSet)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Delete a Set by ID
router.delete("/:id",(req,res)=>{
    Set.destroy({
        where:{
            id:req.params.id
        }
    }).then(delSet=>{
        if(!delSet){
            return res.status(404).json({msg:"No Set with this id."})
        }
        res.json(delSet)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;