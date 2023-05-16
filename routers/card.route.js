import express from 'express';
import { getCard, getOneCard, createCard, updateCard, deleteCard } from '../controllers/card.controller.js';

const router = express.Router()

router.get('/', getCard)
router.get('/:id', getOneCard)
router.post('/', createCard)
router.put('/:id', updateCard)
router.delete('/:id', deleteCard)

export default router;
