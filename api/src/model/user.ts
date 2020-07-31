import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UsersSchema = new mongoose.Schema({
  username: {
      type: String,
      required: true,
      unique: [true, "Username already exist"],
      maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    maxlength: 50,
  },
  firstname: {
    type: String,
    required: true,
    maxlength: 50,
  },
  lastname: {
    type: String,
    maxlength: 50,
    required: true,
  },
  phone: {
    type: Number,
    maxlength: 10,
    required: false,
  },
  email: {
    type: String,
    maxlength: 100,
    required: true,
    unique: [true, "Email already exist"],
  },
})




UsersSchema.pre('save', async function(next) {
    try {
        if (!this.isModified('password')) {
          return next();
        }
        const hashed = await bcrypt.hash(this['password'], 10);
        this['password'] = hashed;
        return next();
      } catch (err) {
        return next(err);
      }
});
