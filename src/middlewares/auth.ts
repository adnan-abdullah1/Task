import passport from "passport";
import httpStatus from "http-status";
import { NextFunction, Response, Request } from "express";

const auth = () => async (req:Request, res:Response, next:NextFunction) => {
    try {
        passport.authenticate('jwt', { session: false })(req, res, (err:any) => {
            if (err) {
                return next(err);
            }
            if (!req.user) {
                return res.status(httpStatus.UNAUTHORIZED).send("Unauthorized");
            }
            next();
        });
    } catch (err) {
        next(err);
    }
};

export default auth;
