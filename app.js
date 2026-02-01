import express from 'express';
import cookieParser from 'cookie-parser';

import usersRouter from './src/routes/users.router.js';
import petsRouter from './src/routes/pets.router.js';
import adoptionsRouter from './src/routes/adoption.router.js';
import sessionsRouter from './src/routes/sessions.router.js';
import mocksRouter from './src/routes/mocks.router.js'
import variables_env from './src/utils/variables_env.js';
import { initMongoDB } from './src/utils/connect-mongo.js';

const app = express();
const PORT = variables_env.PORT||8080;

initMongoDB()
    .then(()=> console.log('Connected to MongoDB'))
    .catch((err) => console.log(err))

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter);


app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
