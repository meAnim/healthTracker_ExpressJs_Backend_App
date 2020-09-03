const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
}, {
    timestamps: true,
});
const Admin = mongoose.model("Admin", adminSchema);