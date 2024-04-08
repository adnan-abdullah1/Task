import express, { Express, Request, Response, NextFunction } from 'express';
import envVars from './config/config';
import routes from './routes/index.route';
import httpStatus from 'http-status';
import mongoose from 'mongoose';
import passport from 'passport';
import jwtStrategy from '../src/config/passport';
const app: Express = express();
const PORT = 3005;

app.use(express.json());
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

mongoose.connect(envVars.url!)
    .then(() => console.log('Mongoose connection established'))
    .catch(err => {
        console.log(err)
    });

app.use('/v1', routes);
app.use('*', (req: Request, res: Response) => {
    return res.status(httpStatus.NOT_FOUND).send("No api matched");
})

const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: err.message || 'Internal Server Error' });
};
app.use(errorHandlerMiddleware);

app.listen(envVars.port, () => console.log('listening at port', envVars.port));
