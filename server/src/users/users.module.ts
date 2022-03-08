import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from '@nestjs/sequelize';
import {User} from './users.model';
import {PassportModule} from '@nestjs/passport';
import {LocalStrategy} from './local.strategy';

@Module({
  imports: [SequelizeModule.forFeature([User]), PassportModule],
  controllers: [UsersController],
  providers: [UsersService, LocalStrategy]
})
export class UsersModule {}
