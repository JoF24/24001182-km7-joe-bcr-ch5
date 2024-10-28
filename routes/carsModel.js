const express = require("express");
const { authorization } = require("../middlewares/auth");
const {
    validateGetCarsModel,
    validateCreateCarModel,
    validateGetCarModelbyId,
    validateUpdateCarModel,
    validateDeleteCarModelbyId,
} = require("../middlewares/carsModel");
const {
    getCarsModel,
    createCarModel,
    getCarModelbyId,
    updateCarModel,
    deleteCarModelbyId, 
} = require("../controllers/carsModel");
const router = express.Router();

router.get("/", authorization(1,2), validateGetCarsModel, getCarsModel);
router.post("/", authorization(1), validateCreateCarModel, createCarModel);
router.get('/:id', authorization(1,2), validateGetCarModelbyId, getCarModelbyId);
router.put("/:id", authorization(1), validateUpdateCarModel, updateCarModel);
router.delete("/:id", authorization(1), validateDeleteCarModelbyId, deleteCarModelbyId);

module.exports = router;
