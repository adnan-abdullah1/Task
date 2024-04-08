import Joi from "joi";

const registerValidation = Joi.object()
    .keys({
        name: Joi.string()
            .min(3)
            .max(40)
            .required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(6).max(10).required()
    })

const loginValidation = Joi.object()
    .keys({
        email:Joi.string().required().email(),
        password : Joi.string().required()
    })

export default { registerValidation,loginValidation };
