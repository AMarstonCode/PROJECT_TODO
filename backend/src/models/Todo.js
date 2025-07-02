const mongoose= require("mongoose")
const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: { type: String, default:"" },
    completed: {type: Boolean, default: false},
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
        required: true
    }]
}, {
    timestamps: true
})
module.exports =mongoose.model('Todo',todoSchema)