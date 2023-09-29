const express = require('express');
const router = express.Router();
const verify = require("../middlewares/jwt");
const controller = require('../controllers/diseaseController'); 


router.post('/disease',verify, controller.createDisease);


router.get('/disease',verify, controller.getAllDiseases);


router.get('/disease/:id',verify, controller.getDiseaseById);


router.get('/disease/by-crop/:crop',verify, controller.getDiseasesByCrop);


router.get('/disease/by-crop-stage/:crop&:stage',verify, controller.getDiseasesByCropAndStage);


router.put('/disease/:id',verify, controller.modifyDiseaseById);


router.delete('/disease/:id',verify, controller.deleteDiseaseById);

module.exports = router;
