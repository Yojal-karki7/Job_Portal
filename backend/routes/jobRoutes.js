import express from 'express'
import isAuthenticated from '../middlewares/auth.js';
import { getAdminJobs, getAllJobs, getJobById, postJob } from '../controllers/jobController.js';

const router = express.Router();

router.post('/post', isAuthenticated, postJob);
router.get('/getall', isAuthenticated, getAllJobs);
router.get('/getadminjobs', isAuthenticated, getAdminJobs);
router.get('/get/:id', isAuthenticated, getJobById);

export default router
