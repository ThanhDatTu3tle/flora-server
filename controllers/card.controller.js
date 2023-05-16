import { CardModel } from "../models/CardModel.js";

export const getCard = async (req, res) => {
    try {
        const product = await CardModel.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const getOneCard = async (req, res) => {
    try {
        const product = await CardModel.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const createCard = async (req, res) => {
    try {
        const newProduct = new CardModel(req.body)
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const updateCard = async (req, res) => {
    try {
        const product = await CardModel.findById(req.params.id)
        await product.updateOne({ $set: req.body })
        res.status(200).json("Updated successfully!!!")
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const deleteCard = async (req, res) => {
    try {
        await CardModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted successfully!!!")
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};
