const adminController = require("../controllers/admin.controller");

var express = require("express");

const { route } = require("express/lib/application");

var router = new express.Router();

const { checkToken } = require("../auth/token_validation"); 

const Authentication = require("../auth/custom_token_validation"); 

const { Route } = require("express");


router.post("/deleteUser", Authentication.ensureRole('admin'), adminController.deleteUser);
/**
 * @swagger
 * /admin/deleteUser:
 *   post:
 *      description: admin delete user
 *      tags:
 *          - Admin
 *      parameters:
 *          - in: body
 *            name: Admin
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - userId
 *              properties:
 *                  userId:
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

router.put("/updateUser", Authentication.ensureRole('admin'), adminController.updateUser);
/**
 * @swagger
 * /admin/updateUser:
 *   put:
 *      description: Used to update user
 *      tags:
 *          - Admin
 *      parameters:
 *          - in: body
 *            name: Admin
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - userId
 *                 - userName
 *                 - password
 *              properties:
 *                  userId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: 1
 *                  userName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: Admin
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Asse$sment
 *      responses:
 *          '200':
 *              description: updated successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;
