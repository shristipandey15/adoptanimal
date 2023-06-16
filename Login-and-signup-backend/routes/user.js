const router = require("express").Router();
const userController = require('../controllers/user.controller');

router.post("/signup",userController.signUp);
router.get("/",userController.allUser);
router.get("/:userId",userController.getUserById);
router.put("/:userId",userController.update);
router.delete("/:userId",userController.deleteUser);


module.exports = router;