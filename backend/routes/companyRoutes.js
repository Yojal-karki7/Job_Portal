import express from 'express'
import isAuthenticated from '../middlewares/auth.js';
import { getCompany, getCompanyById, registerCompany, updateComapny } from '../controllers/companyController.js';
import { singleUpload } from '../middlewares/multer.js';

const router = express.Router();

router.post('/register',isAuthenticated, registerCompany);
router.get('/get',isAuthenticated, getCompany);
router.get('/get/:id',isAuthenticated, getCompanyById);
router.put('/update/:id',isAuthenticated,singleUpload, updateComapny);


export default router
