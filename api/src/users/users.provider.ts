import { Connection } from 'mongoose';
import { UsersSchema } from '../model/user';
import { USER, USER_MODEL } from './users.constants';
import { DATABASE_CONNECTION } from '../database/database.constants';
export const userProviders = [
  {
    provide: USER_MODEL,
    useFactory: (connection: Connection) => connection.model(USER, UsersSchema),
    inject: [DATABASE_CONNECTION],
  },
];