const express = require("express");
const { authorization } = require("../middlewares/auth");
const {
    validateGetCarsManufacture,
    validateCreateCarsManufacture,
    validateGetCarsManufacturebyId,
    validateUpdateCarsManufacture,
    validateDeleteCarsManufacturebyId,
} = require("../middlewares/carsManufacture")
const {
    getCarsManufacture,
    createCarsManufacture,
    getCarsManufacturebyId,
    updateCarsManufacture,
    deleteCarsManufacturebyId,
} = require("../controllers/carsManufacture")
const router = express.Router();

router.get("/", authorization(1,2), validateGetCarsManufacture, getCarsManufacture)
router.post("/", authorization(1), validateCreateCarsManufacture, createCarsManufacture);
router.get('/:id', authorization(1,2), validateGetCarsManufacturebyId, getCarsManufacturebyId);
router.put("/:id", authorization(1), validateUpdateCarsManufacture, updateCarsManufacture);
router.delete("/:id", authorization(1), validateDeleteCarsManufacturebyId, deleteCarsManufacturebyId);

module.exports = router;