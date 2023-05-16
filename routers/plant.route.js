import express from 'express';
import { getPlant, getOnePlant, createPlant, updatePlant, deletePlant } from '../controllers/plant.controller.js';

const router = express.Router()

router.get('/', getPlant)
router.get('/:id', getOnePlant)
router.post('/', createPlant)
router.put('/:id', updatePlant)
router.delete('/:id', deletePlant)

export default router;
