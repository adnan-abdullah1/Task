import User from '../schemas/user.model';
import bcrypt from 'bcrypt';

const register = (data: Object) => {
    try {
        return new User(data).save();
    }
    catch (err) {
        throw new Error(JSON.stringify(err));
    }
}
const emailExists = (email: string) => {
    return User.exists({ email });
}
const getUserByEmail = (email: string) => {
    return User.findOne({ email });
}
const validatePassword = async (userInputPassword: string, dbPassword: string) => {
    return bcrypt.compare(userInputPassword, dbPassword);
}
const profile = (userId: string) => {
    return User.findById(userId, { name: 1, email: 1 }).lean();
}
export default { register, emailExists, getUserByEmail, validatePassword, profile };
