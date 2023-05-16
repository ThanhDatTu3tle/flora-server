import { PopularModel } from "../models/PopularModel.js";

export const getPopular = async (req, res) => {
    try {
        const product = await PopularModel.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const getOnePopular = async (req, res) => {
    try {
        const product = await PopularModel.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const createPopular = async (req, res) => {
    try {
        const newProduct = new PopularModel(req.body)
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const updatePopular = async (req, res) => {
    try {
        const product = await PopularModel.findById(req.params.id)
        await product.updateOne({ $set: req.body })
        res.status(200).json("Updated successfully!!!")
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const deletePopular = async (req, res) => {
    try {
        await PopularModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted successfully!!!")
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};
