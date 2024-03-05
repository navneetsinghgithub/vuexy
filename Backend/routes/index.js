var express = require('express');
var router = express.Router();
const controller = require("../controller/userController");
const controllers = require("../controller/categoryControler")
const controllerss = require("../controller/subcategoryCont")
const { auth } = require('../middleware/auth');
const controllercms = require('../controller/cmscontroller');


router.post("/signup", controller.signup)
router.post("/login", controller.login)
router.get("/getAdminProfile/:id", controller.getAdminProfile)
router.put("/updateAdminProfile/:id", controller.updateAdminProfile)


router.get("/findUser", controller.findUser)
router.get("/findSingleUser/:id", controller.findSingleUser)
router.put("/updateUser/:id", controller.updateUser)
router.delete("/deleteUser/:id", controller.deleteUser)
router.put("/logout/:id",controller.logout)
router.put("/changePassword/:id", controller.changePassword)

///////////category controller//////
router.post("/createCategory", controllers.createCategory)
router.get("/findCategory", controllers.findCategory)
router.get("/findSingleCategory/:id", controllers.findSingleCategory)
router.put("/updateCategory/:id", controllers.updateCategory)
router.delete("/deleteCategory/:id", controllers.deleteCategory)



///////////subCategory controller//////
router.post("/addSubCategory", controllerss.addSubCategory)
router.get("/findSubCategory", controllerss.findSubCategory)
router.get("/findSingleSubCategory/:id", controllerss.findSingleSubCategory)
router.put("/updateSubCategory/:id", controllerss.updateSubCategory)
router.delete("/deleteSubCategory/:id", controllerss.deleteSubCategory)


///////Cms //////
router.post("/createCms", controllercms.createCms)
router.get("/TermC", controllercms.TermC)
router.get("/privacyP", controllercms.privacyP)
router.get("/aboutUs", controllercms.aboutUs)
router.put("/updateTermCms", controllercms.updateTermCms)
router.put("/updatePrivacyCms", controllercms.updatePrivacyCms)
router.put("/updateAboutCms", controllercms.updateAboutCms)







module.exports = router;
