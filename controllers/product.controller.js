import { CategoryModel } from "../models/CategoryModel.js";
import { ProductModel } from "../models/ProductModel.js";

export const getProduct = async (req, res) => {
    try {
        const product = await ProductModel.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const getOneProduct = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const createProduct = async (req, res) => {
    try {
        const newProduct = new ProductModel(req.body)
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

export const updateProduct = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id)
        await product.updateOne({ $set: req.body })
        res.status(200).json("Updated successfully!!!")
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const deleteProduct = async (req, res) => {
    try {
        await CategoryModel.updateMany(
            { products: req.params.id }, 
            { $pull: { products: req.params.id } }
        )
        await ProductModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted successfully!!!")
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};
