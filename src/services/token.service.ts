import jsonwebtoken from 'jsonwebtoken';
import envVars from '../config/config';

interface IPayload{
    name:string,
    email:string,
    _id:string
}
const generateAccessToken=(payload:IPayload)=>{
    return jsonwebtoken.sign(payload,envVars.secret!,{
        expiresIn:`${envVars.tokenExpiry}d`
    });
}

export default {generateAccessToken};
