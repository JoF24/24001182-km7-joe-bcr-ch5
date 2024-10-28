const express = require('express');
const { authorization } = require("../middlewares/auth");
const { 
    validateGetAllCars,
    validateGetCarbyId, 
    validateCreateCar, 
    validateUpdateCar, 
    validateDeleteCarbyId
} = require('../middlewares/cars');
const { 
    getAllCars,
    getCarbyId, 
    createCar, 
    updateCar, 
    deleteCarbyId 
} = require('../controllers/cars');
const router = express.Router();

router.get("/", authorization(1,2), validateGetAllCars, getAllCars);
router.post("/", authorization(1), validateCreateCar, createCar);
router.get('/:id', authorization(1,2), validateGetCarbyId, getCarbyId);
router.put("/:id", authorization(1), validateUpdateCar, updateCar);
router.delete("/:id", authorization(1), validateDeleteCarbyId, deleteCarbyId);

module.exports = router;