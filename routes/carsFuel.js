const express = require("express");
const { authorization } = require("../middlewares/auth");
const {
    validateGetCarsFuel,
    validateCreateCarsFuel,
    validateGetCarsFuelbyId,
    validateUpdateCarsFuel,
    validateDeleteCarsFuelbyId,
} = require("../middlewares/carsFuel");
const {
    getCarsFuel,
    createCarsFuel,
    getCarsFuelbyId,
    updateCarsFuel,
    deleteCarsFuelbyId,
} = require("../controllers/carsFuel");
const router = express.Router();

router.get("/", authorization(1,2), validateGetCarsFuel, getCarsFuel);
router.post("/", authorization(1), validateCreateCarsFuel, createCarsFuel);
router.get('/:id', authorization(1,2), validateGetCarsFuelbyId, getCarsFuelbyId);
router.put("/:id", authorization(1), validateUpdateCarsFuel, updateCarsFuel);
router.delete("/:id", authorization(1), validateDeleteCarsFuelbyId, deleteCarsFuelbyId);

module.exports = router;
