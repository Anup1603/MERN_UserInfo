const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
    },
    age: {
        type: Number,
        required: [true, "Date is required"],
    },
    city: {
        type: String,
        required: [true, "City is required"],
    }
}, { timestamps: true });

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;