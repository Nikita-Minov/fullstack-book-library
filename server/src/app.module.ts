import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {ConfigModule} from '@nestjs/config';
import {SequelizeModule} from '@nestjs/sequelize';
import {User} from "./users/users.model";

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'library-book',
      models: [User],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {}
