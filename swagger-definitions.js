/**
 * @swagger
 * definitions:
 *   Product:
 *     type: object
 *     required:
 *       - name
 *       - imageUrl
 *       - price
 *       - category
 *     properties:
 *       name:
 *         type: string
 *       imageUrl:
 *         type: string
 *       price:
 *         type: number
 *       category:
 *         type: string
 *         enum:
 *           - Fertilizers
 *           - Crop Protection
 *           - Seeds
 *           - Agrishop Equipments
 *           - Fish Farming
 *           - Agri Mandi
 *
 *   Disease:
 *     type: object
 *     required:
 *       - name
 *       - type
 *       - crop
 *       - stage
 *     properties:
 *       name:
 *         type: string
 *       type:
 *         type: string
 *       crop:
 *         type: string
 *         enum:
 *           - Apple
 *           - Banana
 *           - Beans
 *           - Black-Green-Gram
 *           - Brinjal
 *           - Cabbage
 *           - Capsicum-Chilli
 *           - Chickpeas-Gram
 *           - Citrus
 *           - Cotton
 *           - Cucumber
 *           - Ginger
 *           - Grapes
 *           - Corn
 *           - Mango
 *           - Watermelon
 *           - Millet
 *           - Okra
 *           - Onion
 *           - Papaya
 *           - Peanuts
 *           - Peas
 *           - Pomegranate
 *           - Potato
 *           - Rice
 *           - Sorghum
 *           - Soybean
 *           - Sugarcane
 *           - Tomato
 *           - Turmeric
 *           - Wheat
 *       stage:
 *         type: string
 *         enum:
 *           - Seeding
 *           - Vegetative
 *           - Flowering
 *           - Fruiting
 *           - Harvesting
 *
 *   CommunityQuestion:
 *     type: object
 *     required:
 *       - question
 *       - crop
 *     properties:
 *       question:
 *         type: string
 *       answer:
 *         type: string
 *       thumbnail:
 *         type: string
 *       crop:
 *         type: string
 *         enum:
 *           - Apple
 *           - Banana
 *           - Beans
 *           - Black-Green-Gram
 *           - Brinjal
 *           - Cabbage
 *           - Capsicum-Chilli
 *           - Chickpeas-Gram
 *           - Citrus
 *           - Cotton
 *           - Cucumber
 *           - Ginger
 *           - Grapes
 *           - Corn
 *           - Mango
 *           - Watermelon
 *           - Millet
 *           - Okra
 *           - Onion
 *           - Papaya
 *           - Peanuts
 *           - Peas
 *           - Pomegranate
 *           - Potato
 *           - Rice
 *           - Sorghum
 *           - Soybean
 *           - Sugarcane
 *           - Tomato
 *           - Turmeric
 *           - Wheat
 */
