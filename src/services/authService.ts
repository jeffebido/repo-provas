import bcrypt from 'bcrypt';
import { users } from '@prisma/client';
import { createUser } from '../repositories/authRepositorie'


export type TypeUserData = Omit<users, 'id'>;

export async function LogIn(){
    
}

export async function SignUp(userData: TypeUserData){

  const encryptedPassword = bcrypt.hashSync(userData.password, 10);

  const newUserData : TypeUserData = {
    email: userData.email,
    password: encryptedPassword
  }

  await createUser(newUserData);
}