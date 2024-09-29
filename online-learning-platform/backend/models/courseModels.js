const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    videoUrl: { type: String },
    studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
module.exports = mongoose.model('Course', courseSchema);
