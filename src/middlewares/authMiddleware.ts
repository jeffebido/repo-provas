import { Request, Response, NextFunction } from 'express';

import {authSchema} from "../schemas/authSchema";

export async function authMiddleware(req:Request, res:Response, next:NextFunction) {
    
    const validate = authSchema.validate(req.body);

    if (validate.error) {
        return res.status(422).send(validate.error);
    }   

    next();
}

