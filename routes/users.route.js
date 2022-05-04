const usersController = require("../controllers/users.controller");

var express = require("express");

const { route } = require("express/lib/application");

var router = new express.Router();

const { checkToken } = require("../auth/token_validation");

const Authentication = require("../auth/custom_token_validation"); 

const { Route } = require("express");

router.post("/register", usersController.register);
/**
 * @swagger
 * /users/register:
 *   post:
 *      description: Used to register user
 *      tags:
 *          - Users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - userName
 *                 - password
 *                 - role
 *              properties:
 *                  userName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: user@gmail.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Asse$sment
 *                  role:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: user
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("/login", usersController.login);
/**
 * @swagger
 * /users/login:
 *   post:
 *      description: Used to login user
 *      tags:
 *          - Users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - userName
 *                 - password
 *              properties:
 *                  userName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: admin@gmail.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Asse$sment
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

 router.get("/getProductList", Authentication.ensureRole(['admin','user']), usersController.getProductList);
 /**
  * @swagger
  * /users/getProductList:
  *   get:
  *      description: Used to get product list
  *      tags:
  *          - Product
  *      parameters:
  *          - in: header
  *            name: User
  *            description: Product data
  *            schema:
  *              type: object
  *              required:
  *              properties:
  *      responses:
  *          '200':
  *              description: Resource added successfully
  *          '500':
  *              description: Internal server error
  *          '400':
  *              description: Bad request
  */

  router.post("/createProduct", Authentication.ensureRole(['admin','user']), usersController.createProduct);
  /**
   * @swagger
   * /users/createProduct:
   *   post:
   *      description: Used to create product
   *      tags:
   *          - Product
   *      parameters:
   *          - in: body
   *            name: User
   *            description: User data
   *            schema:
   *              type: object
   *              required:
   *                 - userId
   *                 - productName
   *              properties:
   *                  userId:
   *                      type: string
   *                      minLength: 1
   *                      maxLength: 45
   *                      example: 1
   *                  productName:
   *                      type: string
   *                      minLength: 1
   *                      maxLength: 45
   *                      example: Iphone
   *      responses:
   *          '200':
   *              description: Resource added successfully
   *          '500':
   *              description: Internal server error
   *          '400':
   *              description: Bad request
   */

   router.put("/updateProduct", Authentication.ensureRole(['admin']), usersController.updateProduct);
   /**
    * @swagger
    * /users/updateProduct:
    *   put:
    *      description: Used to update product
    *      tags:
    *          - Product
    *      parameters:
    *          - in: body
    *            name: User
    *            description: User data
    *            schema:
    *              type: object
    *              required:
    *                 - productId
    *                 - productName
    *              properties:
    *                  productId:
    *                      type: string
    *                      minLength: 1
    *                      maxLength: 45
    *                      example: 1
    *                  productName:
    *                      type: string
    *                      minLength: 1
    *                      maxLength: 45
    *                      example: Iphone
    *      responses:
    *          '200':
    *              description: Resource added successfully
    *          '500':
    *              description: Internal server error
    *          '400':
    *              description: Bad request
    */
 
    router.put("/disableEnableProduct", Authentication.ensureRole(['admin']), usersController.disableEnableProduct);
    /**
     * @swagger
     * /users/disableEnableProduct:
     *   put:
     *      description: products can be displayed or not displayed
     *      tags:
     *          - Product
     *      parameters:
     *          - in: body
     *            name: User
     *            description: User data
     *            schema:
     *              type: object
     *              required:
     *                 - productId
     *                 - active
     *              properties:
     *                  productId:
     *                      type: string
     *                      minLength: 1
     *                      maxLength: 45
     *                      example: 1
     *                  active:
     *                      type: string
     *                      minLength: 1
     *                      maxLength: 45
     *                      example: 0
     *      responses:
     *          '200':
     *              description: Resource update successfully
     *          '500':
     *              description: Internal server error
     *          '400':
     *              description: Bad request
     */
 
    
   router.post("/deleteProduct", Authentication.ensureRole(['admin']), usersController.deleteProduct);
   /**
    * @swagger
    * /users/deleteProduct:
    *   post:
    *      description: Delete Product
    *      tags:
    *          - Product
    *      parameters:
    *          - in: body
    *            name: User
    *            description: User data
    *            schema:
    *              type: object
    *              required:
    *                 - productId
    *              properties:
    *                  productId:
    *                      type: string
    *                      minLength: 1
    *                      maxLength: 45
    *                      example: 1
    *      responses:
    *          '200':
    *              description: Resource added successfully
    *          '500':
    *              description: Internal server error
    *          '400':
    *              description: Bad request
    */
 
module.exports = router;

