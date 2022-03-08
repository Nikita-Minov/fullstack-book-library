import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import {Injectable, Logger, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "./users.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  logger: Logger;
  constructor(private usersService: UsersService) {
    super();
    this.logger = new Logger(LocalStrategy.name);
  }

  async validate(username: string, password: string) {
    this.logger.log(username);
    const user = await this.usersService.validateUser({username, password});
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}