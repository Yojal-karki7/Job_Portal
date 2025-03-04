import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors'

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
}
app.use(cors(corsOptions));

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`);
})