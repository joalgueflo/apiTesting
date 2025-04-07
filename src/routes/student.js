

const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/student');


// Ruta para obtener todos los estudiantes
router.get('/', studentsController.getAllStudents);

module.exports = router;