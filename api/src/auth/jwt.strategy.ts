import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { jwtConstants } from './auth.constants';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });


  }

  async validate(payload: any, done: VerifiedCallback): Promise<any> {
    const user = await this.authService.validateUser(payload);
    if (!user) {
      return done(
        new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED),
        false,
      );
    }
    return done(null, user, payload.iat);
  }
}
