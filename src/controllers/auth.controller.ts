import { Response, Request, NextFunction } from "express";
import authService from '../services/auth.service';
import tokenService from '../services/token.service';
import httpStatus from "http-status";

const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userExists = await authService.getUserByEmail(req.body.email);
        if (!userExists) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "Invalid credentials" });
        }
        const isValidated = await authService.validatePassword(req.body.password, userExists.password);
        if (!isValidated) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "Invalid credentials" });
        }
        const token = tokenService.generateAccessToken({ email: userExists.email, _id: userExists._id.toString(), name: userExists.name })
        return res.json({ message: "Logged in", token, userId: userExists._id });
    }
    catch (err) {
        next(err);
    }
}
const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req.body;
        const emailExists = await authService.emailExists(email);
        if (emailExists) {
            return res.status(httpStatus.CONFLICT).json({ message: "Email already exists" });
        }
        await authService.register(req.body);
        return res.status(httpStatus.OK).json({ message: "User created" });
    }
    catch (err) {
        next(err);
    }
}


const apis = { login, register };
export default apis;

