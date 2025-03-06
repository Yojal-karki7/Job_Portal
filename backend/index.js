import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './utils/db.js';
import userRoute from './routes/userRoutes.js'
import companyRoute from './routes/companyRoutes.js'

dotenv.config({});

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
}
app.use(cors(corsOptions));

// api
app.use('/api/v1/user', userRoute);
app.use('/api/v1/company', companyRoute);

app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server running at port ${PORT}`);
})