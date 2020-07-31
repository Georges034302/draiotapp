import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { DATABASE_CONNECTION } from './database.constants';
dotenv.config();
export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.DB_MONGO_CONNECTION),
  },
];

