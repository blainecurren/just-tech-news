const router = require("express").Router();

const UserRoutes = require("./user-routes.js");

router.use("/users", userRoutes);

module.exports = router;
