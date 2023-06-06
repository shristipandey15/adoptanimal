const router = require("express").Router();
const userController = require('../controllers/user.controller');

router.post("/signup",userController.signUp);
// router.get("/",petController.pet_all);
// router.get("/:petId",petController.pet_details);
// router.put("/:petId",petController.pet_update);
// router.delete("/:petId",petController.pet_delete);


module.exports = router;