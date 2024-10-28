const express = require("express");
const { authorization } = require("../middlewares/auth");
const {
    validateGetCarsType,
    validateCreateCarsType,
    validateGetCarsTypebyId,
    validateUpdateCarsType,
    validateDeleteCarsTypebyId,
} = require("../middlewares/carsType")
const {
    getCarsType,
    createCarsType,
    getCarsTypebyId,
    updateCarsType,
    deleteCarsTypebyId,
} = require("../controllers/carsType")
const router = express.Router();

router.get("/", authorization(1,2), validateGetCarsType, getCarsType);
router.post("/", authorization(1), validateCreateCarsType, createCarsType);
router.get('/:id', authorization(1,2), validateGetCarsTypebyId, getCarsTypebyId);
router.put("/:id", authorization(1), validateUpdateCarsType, updateCarsType);
router.delete("/:id", authorization(1), validateDeleteCarsTypebyId, deleteCarsTypebyId);

module.exports = router;