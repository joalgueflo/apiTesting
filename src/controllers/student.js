const studentService = require('../services/student');

exports.getAllStudents = (req, res) => {
    res.status(200).json({ message: 'List of students' });
};
exports.addStudent = (req, res) => {
    const newStudent = req.body;
    const addedStudent = studentService.addStudent(newStudent);
    res.status(201).json(addedStudent);
};