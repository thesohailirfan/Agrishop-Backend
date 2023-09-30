const express = require('express');
const router = express.Router();
const verify = require("../middlewares/jwt");
const controller = require('../controllers/communityController');


/**
 * @swagger
 * /community:
 *   post:
 *     summary: Create a new community question
 *     tags:
 *       - Community
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Community question object that needs to be created
 *         required: true
 *         schema:
 *           $ref: '#/definitions/CommunityQuestion'
 *     responses:
 *       201:
 *         description: Successfully created a community question
 *         schema:
 *           $ref: '#/definitions/CommunityQuestion'
 *       400:
 *         description: Bad request, validation error, or missing data
 */
router.post('/community', verify, controller.createCommunityQuestion);

/**
 * @swagger
 * /community:
 *   get:
 *     summary: Get all community questions
 *     tags:
 *       - Community
 *     responses:
 *       200:
 *         description: Successfully retrieved community questions
 *         schema:
 *           $ref: '#/definitions/CommunityQuestion'
 *       404:
 *         description: No community questions available
 */
router.get('/community', verify, controller.getAllCommunityQuestions);

/**
 * @swagger
 * /community/{id}:
 *   get:
 *     summary: Get a community question by ID
 *     tags:
 *       - Community
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Community question ID
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the community question
 *         schema:
 *           $ref: '#/definitions/CommunityQuestion'
 *       404:
 *         description: Community question not found
 */
router.get('/community/:id', verify, controller.getCommunityQuestionById);

/**
 * @swagger
 * /community/by-crop/{crop}:
 *   get:
 *     summary: Get community questions by crop
 *     tags:
 *       - Community
 *     parameters:
 *       - name: crop
 *         in: path
 *         description: Crop name
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved community questions by crop
 *         schema:
 *           $ref: '#/definitions/CommunityQuestion'
 *       404:
 *         description: Crop not found or no community questions available for the specified crop
 */
router.get('/community/by-crop/:crop', verify, controller.getCommunityQuestionsByCrop);

/**
 * @swagger
 * /community/{id}:
 *   put:
 *     summary: Modify (update) a community question by ID
 *     tags:
 *       - Community
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Community question ID
 *         required: true
 *         type: string
 *       - name: body
 *         in: body
 *         description: Updated community question data
 *         required: true
 *         schema:
 *           $ref: '#/definitions/CommunityQuestion'
 *     responses:
 *       200:
 *         description: Successfully updated the community question
 *         schema:
 *           $ref: '#/definitions/CommunityQuestion'
 *       404:
 *         description: Community question not found
 *       400:
 *         description: Bad request or validation error
 */
router.put('/community/:id', verify, controller.modifyCommunityQuestionById);

/**
 * @swagger
 * /community/{id}:
 *   delete:
 *     summary: Delete a community question by ID
 *     tags:
 *       - Community
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Community question ID
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Community question deleted successfully
 *       404:
 *         description: Community question not found
 */
router.delete('/community/:id', verify, controller.deleteCommunityQuestionById);

module.exports = router;

