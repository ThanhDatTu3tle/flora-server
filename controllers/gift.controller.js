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
        await GiftModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted successfully!!!")
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};
