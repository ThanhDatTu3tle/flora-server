import express from 'express';
import { getGift, getOneGift, createGift, updateGift, deleteGift } from '../controllers/gift.controller.js';

const router = express.Router()

router.get('/', getGift)
router.get('/:id', getOneGift)
router.post('/', createGift)
router.put('/:id', updateGift)
router.delete('/:id', deleteGift)

export default router;
