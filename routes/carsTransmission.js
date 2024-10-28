const express = require("express");
const { authorization } = require("../middlewares/auth");
const {
    validateGetCarsTransmission,
    validateCreateCarsTransmission,
    validateGetCarsTransmissionbyId,
    validateUpdateCarsTransmission,
    validateDeleteCarsTransmissionbyId,
} = require("../middlewares/carsTransmission");
const {
    getCarsTransmission,
    createCarsTransmission,
    getCarsTransmissionbyId,
    updateCarsTransmission,
    deleteCarsTransmissionbyId,
} = require("../controllers/carsTransmission");
const router = express.Router();

router.get("/", authorization(1,2), validateGetCarsTransmission, getCarsTransmission);
router.post("/", authorization(1), validateCreateCarsTransmission, createCarsTransmission);
router.get('/:id', authorization(1,2), validateGetCarsTransmissionbyId, getCarsTransmissionbyId);
router.put("/:id", authorization(1), validateUpdateCarsTransmission, updateCarsTransmission);
router.delete("/:id", authorization(1), validateDeleteCarsTransmissionbyId, deleteCarsTransmissionbyId);

module.exports = router;
