const mongoose = require('mongoose');

// Definirea schemă a utilizatorului
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },  
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
    }
}, { timestamps: true });

// Crearea modelului
const User = mongoose.model("User", userSchema);

module.exports = User;
