import {Injectable, Logger} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from './users.model';
import {CreateUserDto} from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import {LoginUserDto} from './dto/login-user.dto';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(
    @InjectModel(User) private userRepository: typeof User) {
  }
  async createUser(dto: CreateUserDto) {
    const saltRounds = Number(process.env.SALT_ROUNDS);
    const hash = await bcrypt.hash(dto.password, saltRounds);
    const user = await this.userRepository.create({
      email: dto.email,
      password: hash,
      username: dto.username,
    });
    return user;
  }
  async validateUser(dto: LoginUserDto) {
    const user = await this.userRepository.findOne({where: {username: dto.username}});
    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (user && isMatch) {
      return user;
    }
    return null;
  }
}
