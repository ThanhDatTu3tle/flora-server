import { CategoryModel } from "../models/CategoryModel.js";
import { GiftModel } from "../models/GiftModel.js";

export const getGift = async (req, res) => {
    try {
        const product = await GiftModel.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const getOneGift = async (req, res) => {
    try {
        const product = await GiftModel.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const createGift = async (req, res) => {
    try {
        const newProduct = new GiftModel(req.body)
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

export const updateGift = async (req, res) => {
    try {
        const product = await GiftModel.findById(req.params.id)
        await product.updateOne({ $set: req.body })
        res.status(200).json("Updated successfully!!!")
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const deleteGift = async (req, res) => {
    try {
        await CategoryModel.updateMany(
            { products: req.params.id }, 
            { $pull: { products: req.params.id } }
        )
        await GiftModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted successfully!!!")
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};
