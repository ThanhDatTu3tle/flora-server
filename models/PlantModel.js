import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
        default: 0,
    },
    favorite: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true })

export const PlantModel = mongoose.model('PlantModel', schema);
