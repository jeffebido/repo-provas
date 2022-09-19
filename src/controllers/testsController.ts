import { Request, Response } from 'express';
import * as testsService from '../services/testsService';


export async function Insert(req: Request, res: Response) {
    
    await testsService.CreateTest(req.body);

    res.send( 201 );
}