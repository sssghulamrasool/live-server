const express = require("express");

const router = express();
const controllers = require("../controllers/userController");

router.get("/users", controllers.getAllUser);
router.post("/postuser", controllers.postUser);
router.delete("/deleteuser/:id", controllers.deleteUser);
router.put("/update/:id", controllers.updateuse);
// router.patch("/update/:id", controllers.updateuse);
module.exports = router;
