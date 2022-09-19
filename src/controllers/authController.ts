import { Request, Response } from 'express';
import * as authService from '../services/authService';

export async function LogIn(req: Request, res: Response) {
    
    
}

export async function SignUp(req: Request, res: Response) {
    
    await authService.SignUp(req.body);

    res.send( 201 );
}