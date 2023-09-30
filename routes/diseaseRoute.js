const express = require('express');
const router = express.Router();
const verify = require("../middlewares/jwt");
const controller = require('../controllers/diseaseController'); 


/**
 * @swagger
 * /disease:
 *   post:
 *     summary: Create a new disease
 *     tags:
 *       - Diseases
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Disease object that needs to be created
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Disease'
 *     responses:
 *       201:
 *         description: Successfully created a disease
 *         schema:
 *           $ref: '#/definitions/Disease'
 *       400:
 *         description: Bad request, validation error, or missing data
 */
router.post('/disease', verify, controller.createDisease);

/**
 * @swagger
 * /disease:
 *   get:
 *     summary: Get all diseases
 *     tags:
 *       - Diseases
 *     responses:
 *       200:
 *         description: Successfully retrieved diseases
 *         schema:
 *           $ref: '#/definitions/Disease'
 *       404:
 *         description: No diseases available
 */
router.get('/disease', verify, controller.getAllDiseases);

/**
 * @swagger
 * /disease/{id}:
 *   get:
 *     summary: Get a disease by ID
 *     tags:
 *       - Diseases
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Disease ID
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the disease
 *         schema:
 *           $ref: '#/definitions/Disease'
 *       404:
 *         description: Disease not found
 */
router.get('/disease/:id', verify, controller.getDiseaseById);

/**
 * @swagger
 * /disease/by-crop/{crop}:
 *   get:
 *     summary: Get diseases by crop
 *     tags:
 *       - Diseases
 *     parameters:
 *       - name: crop
 *         in: path
 *         description: Crop name
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved diseases by crop
 *         schema:
 *           $ref: '#/definitions/Disease'
 *       404:
 *         description: Crop not found or no diseases available for the specified crop
 */
router.get('/disease/by-crop/:crop', verify, controller.getDiseasesByCrop);

/**
 * @swagger
 * /disease/by-crop-stage/{crop}/{stage}:
 *   get:
 *     summary: Get diseases by crop and stage
 *     tags:
 *       - Diseases
 *     parameters:
 *       - name: crop
 *         in: path
 *         description: Crop name
 *         required: true
 *         type: string
 *       - name: stage
 *         in: path
 *         description: Disease stage
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved diseases by crop and stage
 *         schema:
 *           $ref: '#/definitions/Disease'
 *       404:
 *         description: Crop or stage not found or no diseases available for the specified crop and stage
 */
router.get('/disease/by-crop-stage/:crop/:stage', verify, controller.getDiseasesByCropAndStage);

/**
 * @swagger
 * /disease/{id}:
 *   put:
 *     summary: Modify (update) a disease by ID
 *     tags:
 *       - Diseases
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Disease ID
 *         required: true
 *         type: string
 *       - name: body
 *         in: body
 *         description: Updated disease data
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Disease'
 *     responses:
 *       200:
 *         description: Successfully updated the disease
 *         schema:
 *           $ref: '#/definitions/Disease'
 *       404:
 *         description: Disease not found
 *       400:
 *         description: Bad request or validation error
 */
router.put('/disease/:id', verify, controller.modifyDiseaseById);

/**
 * @swagger
 * /disease/{id}:
 *   delete:
 *     summary: Delete a disease by ID
 *     tags:
 *       - Diseases
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Disease ID
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Disease deleted successfully
 *       404:
 *         description: Disease not found
 */
router.delete('/disease/:id', verify, controller.deleteDiseaseById);

module.exports = router;

module.exports = router;
