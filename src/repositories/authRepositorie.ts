import prisma from '../db';
import { users } from '@prisma/client';

export type TypeUserData = Omit<users, 'id'>;

export async function createUser(user: TypeUserData) {
    await prisma.users.create({ data: user });
}