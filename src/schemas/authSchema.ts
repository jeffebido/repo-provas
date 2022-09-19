import joi from 'joi';

const authSchema = joi.object({
    email: joi.string().max(100).email().required(),
    password: joi.string().max(50).required()
});


export {authSchema};