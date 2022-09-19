import { Request, Response, NextFunction } from 'express';

import {testsSchema} from "../schemas/testsSchema";

export async function testsMiddleware(req:Request, res:Response, next:NextFunction) {
    
    const validate = testsSchema.validate(req.body);

    if (validate.error) {
        return res.status(422).send(validate.error);
    }   

    next();
}


