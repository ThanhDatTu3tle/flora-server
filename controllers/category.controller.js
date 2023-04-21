import { CategoryModel } from "../models/CategoryModel.js";
import { ProductModel } from "../models/ProductModel.js";

export const getCategory = async (req, res) => {
    try {
        const category = await CategoryModel.find()
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const getOneCategory = async (req, res) => {
    try {
        const category = await CategoryModel.findById(req.params.id).populate("products")
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const createCategory = async (req, res) => {
    try {
        const newCategory = new CategoryModel(req.body)
        const savedCategory = await newCategory.save()
        res.status(200).json(savedCategory)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const updateCategory = async (req, res) => {
    try {
        const category = await CategoryModel.findById(req.params.id)
        await category.updateOne({ $set: req.body })
        res.status(200).json("Updated successfully!!!")
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const deleteCategory = async (req, res) => {
    try {
        await ProductModel.updateMany(
            { category: req.params.id }, 
            { category: null }
        )
        await CategoryModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted successfully!!!")
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};
