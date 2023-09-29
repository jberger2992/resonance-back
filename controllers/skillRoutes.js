const express = require("express");
const router = express.Router();
const {Skill, Buff} = require("../models");
//--  /api/skills

// Get all Skills
router.get("/",(req,res)=>{
    Skill.findAll({
        include:[Buff]
    }).then(skills=>{
        if(skills.length===0){
            return res.status(404).json({msg:"No Skills found."})
        }
        res.json(skills)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get Skills by Class
router.get("/class/:id",(req,res)=>{
    Skill.findAll({
        include:[Buff],
        where:{ClassId:req.params.id}
    }).then(skills=>{
        if(skills.length===0){
            return res.status(404).json({msg:"No Skills found."})
        }
        res.json(skills)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Get a specific Skill by ID
router.get("/:id",(req,res)=>{
    Skill.findByPk(req.params.id,{
        include:[Buff]
    }).then(skill=>{
        if(!skill){
            return res.status(404).json({msg:"No Skill with that id exists."})
        }
        res.json(skill)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Create a new Skill
router.post("/", (req, res) => {
    Skill.create({
        name:req.body.name,
        description:req.body.description,
        ClassId:req.body.ClassId,
        // BuffId:req.body.BuffId,
    }).then(newSkill=>{
        res.json(newSkill)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Update a Skill by ID
router.put("/:id", (req, res) => {
    Skill.update({
        name:req.body.name,
        description:req.body.description,
        ClassId:req.body.ClassId,
        // BuffId:req.body.BuffId,
    },{
        where:{id:req.params.id}
    }).then(editSkill=>{
        if(!editSkill){
            return res.status(404).json({msg:"No Skill with that id exists."})
        }
        res.json(editSkill)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

// Delete a Skill by ID
router.delete("/:id",(req,res)=>{
    Skill.destroy({
        where:{
            id:req.params.id
        }
    }).then(delSkill=>{
        if(!delSkill){
            return res.status(404).json({msg:"No Skill with this id."})
        }
        res.json(delSkill)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"ERROR",err})
    })
});

module.exports = router;