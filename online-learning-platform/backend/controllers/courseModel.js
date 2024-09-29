const Course = require('../models/courseModel');

exports.createCourse = async (req, res) => {
    const { title, description, videoUrl } = req.body;
    try {
        const course = new Course({ title, description, instructor: req.user.id, videoUrl });
        await course.save();
        res.status(201).json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
