import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import envVars from '../config/config';

interface IUser {
  name: string;
  email: string;
  password:string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true,unique:true },
  password:{type:String}
});

userSchema.pre('save',async function(next){
    const user = this;
    this.password =  await bcrypt.hash(this.password,+envVars.salt!);
})

const User = model<IUser>('User', userSchema);
export default User;
