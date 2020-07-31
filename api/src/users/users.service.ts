import { Injectable, Inject, HttpException, HttpStatus, Catch } from '@nestjs/common';
import { USER_MODEL } from './users.constants';
import { Users } from './interfaces/users.document';
import { Model } from 'mongoose';
import { UserLoginDto } from './dto/loginUser.dto';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from 'src/auth/jwt-payload';
import { UserRegisterDto } from './dto/registerUserdto';

@Injectable()
export class UsersService {

    constructor(@Inject(USER_MODEL) private userModel: Model<Users>) { }

    async findUserByLogin(loginDTO: UserLoginDto) {
        const { username, password } = loginDTO;
        const user = await this.userModel.findOne({ username })

        if (!user) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

        // if the password is correct?
        if (await bcrypt.compare(password, user.password)) {
            return this.sanitizeUser(user);
        } else {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

    }

    async createUser(userDTO: UserRegisterDto): Promise<Users> {
      
        const { username, email } = userDTO;
        const user = await this.userModel.findOne({ username });
        const userEmail = await this.userModel.findOne({ email });
        if (user) {
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
        } 
        if (userEmail) {
            throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
        }
        try {
            const createdUser = new this.userModel(userDTO);
            await createdUser.save();
              
        return this.sanitizeUser(createdUser);   
        } catch(e) {
            throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
        }
   
    }


    async findByPayload(payload: JwtPayload) {
        const { username } = payload;
        return await this.userModel.findOne({ username });

    }


    // to remove the password fields from the payload
    sanitizeUser(user: Users) {
        const sanitized = user.toObject();
        delete sanitized['password'];
        return sanitized;
    }
}
