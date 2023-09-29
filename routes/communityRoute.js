const express = require('express');
const router = express.Router();
const verify = require("../middlewares/jwt");
const controller = require('../controllers/communityController');


router.post('/community',verify, controller.createCommunityQuestion);


router.get('/community',verify, controller.getAllCommunityQuestions);


router.get('/community/:id',verify, controller.getCommunityQuestionById);


router.get('/community/by-crop/:crop',verify, controller.getCommunityQuestionsByCrop);


router.put('/community/:id',verify, controller.modifyCommunityQuestionById);


router.delete('/community/:id',verify, controller.deleteCommunityQuestionById);

module.exports = router;
