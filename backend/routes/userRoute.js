const express = require("express");
const { getAllUser, createUser, selectById, updateUser, deleteUser, insertMany } = require("../controller/userController");

const router = express.Router();

router.route("/all").get(getAllUser);
router.route("/all").post(createUser);
router.route("/:id")
    .get(selectById)
    .patch(updateUser)
    .delete(deleteUser);

router.route("/many").post(insertMany);


module.exports = router;