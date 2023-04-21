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
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    ]
}, { timestamps: true })

export const CategoryModel = mongoose.model('Category', schema);
