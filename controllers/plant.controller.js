import { CategoryModel } from "../models/CategoryModel.js";
import { PlantModel } from "../models/PlantModel.js";

export const getPlant = async (req, res) => {
    try {
        const product = await PlantModel.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const getOnePlant  = async (req, res) => {
    try {
        const product = await PlantModel.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const createPlant  = async (req, res) => {
    try {
        const newProduct = new PlantModel(req.body)
        const savedProduct = await newProduct.save()
        if (req.body.category) {
            const category = CategoryModel.findById(req.body.category)
            await category.updateOne({ $push: { products: savedProduct._id } })
        }
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const updatePlant  = async (req, res) => {
    try {
        const product = await PlantModel.findById(req.params.id)
        await product.updateOne({ $set: req.body })
        res.status(200).json("Updated successfully!!!")
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const deletePlant  = async (req, res) => {
    try {
        await CategoryModel.updateMany(
            { products: req.params.id }, 
            { $pull: { products: req.params.id } }
        )
        await PlantModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted successfully!!!")
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};
