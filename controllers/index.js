const express = require('express');
const router = express.Router();

const classRoutes = require("./classRoutes");
router.use("/api/classes",classRoutes);
const characterRoutes = require("./characterRoutes");
router.use("/api/characters",characterRoutes);
const setRoutes = require("./setRoutes");
router.use("/api/sets",setRoutes);
const skillRoutes = require("./skillRoutes");
router.use("/api/skills",skillRoutes);
const buffRoutes = require("./buffRoutes");
router.use("/api/buffs",buffRoutes);

module.exports = router;