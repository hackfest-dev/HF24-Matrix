import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from './Routers/user.js';
import userpost from './Routers/post.js';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "200kb" }));
app.use(express.urlencoded({ extended: true, limit: "200kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', userpost); // Mount the userpost router at /api/v1/posts

export default app;
