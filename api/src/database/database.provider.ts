import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { DATABASE_CONNECTION } from './database.constants';
dotenv.config();

const uri = "mongodb+srv://admin:superuser@dra-clusters.bc9m0.mongodb.net/iotdb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        replicaSet: "LMDEV"
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Successful");
        }
    })
  },
];

