import { JwtPayload } from './jwt-payload';
import { UsersService } from '../users/users.service';
import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from '../users/dto/loginUser.dto';
import { UserRegisterDto } from '../users/dto/registerUserdto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() userDTO: UserLoginDto) {
    const user = await this.userService.findUserByLogin(userDTO);
    const payload: JwtPayload = {
      ...user,
    };
    const token = await this.authService.signPayload(payload);

    return { payload: token };
  }

  @Post('register')
  async register(@Body() userDTO: UserRegisterDto) {
    const user = await this.userService.createUser(userDTO);

    const payload: JwtPayload = {
      ...user,
    };

    const token = await this.authService.signPayload(payload);
    return { payload: token };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('verify')
  async verify() {
    return { payload: 'verified' }
  }
}
