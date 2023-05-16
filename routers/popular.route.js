import express from 'express';
import { getPopular, getOnePopular, createPopular, updatePopular, deletePopular } from '../controllers/popular.controller.js';

const router = express.Router()

router.get('/', getPopular)
router.get('/:id', getOnePopular)
router.post('/', createPopular)
router.put('/:id', updatePopular)
router.delete('/:id', deletePopular)

export default router;
