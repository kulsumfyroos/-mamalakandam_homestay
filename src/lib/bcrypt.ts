import { hash } from 'bcrypt';

export const hashPassword = async (password: string) => 
password 
? await hash(password, 10) 
: null;
