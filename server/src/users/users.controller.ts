import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {AuthGuard} from '@nestjs/passport';
import {LocalStrategy} from "./local.strategy";
import {LoginUserDto} from "./dto/login-user.dto";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService, private localStrategy: LocalStrategy) {
  }
  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req) {
    return req.user;
  }

  @Get('/me')
  async me(@Request() req) {
    return req.user;
  }
}
