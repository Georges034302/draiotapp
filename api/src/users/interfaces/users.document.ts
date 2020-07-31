import { Document } from 'mongoose';

export interface Users extends Document {
  username: string;
  readonly password: string;
  firstname: string;
  lastname: string;
  phone?: number;
  email: string;
}
