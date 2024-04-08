import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "../schemas/user.model";
import config from "./config";

const jwtVerify = async (payload: { sub: string,_id:string }, done: (err: any, user:any) => void) => {
    try {
        const user = await User.findById(payload._id);
        if (!user) {
            done(null, false);
        }
        done(null, user);
    }
    catch (err) {
        done(null, false);
    }
}
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret!,
}
const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

export default jwtStrategy;
