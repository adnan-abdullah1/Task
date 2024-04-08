import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export default {
    secret: process.env.SECRET,
    port: process.env.PORT,
    salt: process.env.SALT,
    url: process.env.MONGOOSE_URL,
    tokenExpiry: process.env.EXPIRY
}

