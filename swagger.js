const swaggerJSDoc = require('swagger-jsdoc');

// Define the Swagger definition
const swaggerDefinition = {
  info: {
    title: 'Agrishop API Documentation',
    version: '1.0.0',
    description: 'API documentation for Agrishop which includes products, community questions, diseases and more',
  },
  basePath: '/', 
};

// Options for swagger-jsdoc
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], 
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
