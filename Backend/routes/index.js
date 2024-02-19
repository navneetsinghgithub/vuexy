var express = require('express');
var router = express.Router();

const controller = require("../controller/userController");
const { auth } = require('../middleware/auth');

router.post("/signup", controller.signup)
router.post("/login", controller.login)

router.get("/findUser", auth, controller.findUser)
router.get("/findSingleUser/:id", controller.findSingleUser)
router.put("/updateUser/:id", controller.updateUser)
router.delete("/deleteUser/:id", controller.deleteUser)
router.post("/logout", auth, controller.logout)





module.exports = router;
