import express from 'express'
import isAuthenticated from '../middlewares/auth.js';
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from '../controllers/applicationController.js';

const router = express.Router();

router.get("/getappliedjobs", isAuthenticated, getAppliedJobs)
router.get('/apply/:id', isAuthenticated, applyJob)
router.get('/:id/applicants', isAuthenticated, getApplicants)
router.post('/status/:id/update', isAuthenticated, updateStatus)

export default router
