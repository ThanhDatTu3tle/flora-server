import express from 'express';
import { getCategory, getOneCategory, createCategory, updateCategory, deleteCategory } from '../controllers/category.controller.js';

const router = express.Router()

router.get('/', getCategory)
router.get('/:id', getOneCategory)
router.post('/', createCategory)
router.get('/:id', updateCategory)
router.delete('/:id', deleteCategory)

export default router;
