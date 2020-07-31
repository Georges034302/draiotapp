import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
// import { sign, verify } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { JwtPayload } from './jwt-payload';
import { JwtService } from '@nestjs/jwt';
dotenv.config();

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async signPayload(payload: JwtPayload) {
        const token = this.jwtService.sign({
            exp: Math.floor(Date.now() / 1000) + (100000000000000000000),
            ...payload,
        });
        const ver: object | string = this.jwtService.verify(token);
 
        return { token, ver };
    } 

    async validateUser(payload: JwtPayload) {
        return await this.usersService.findByPayload(payload);
    }


}
