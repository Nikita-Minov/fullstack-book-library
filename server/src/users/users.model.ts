import {Column, DataType, Model, Table} from 'sequelize-typescript';

interface UserCreationAttrs {
  email: string;
  password: string;
  username: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING})
  username: string;

  @Column({type: DataType.STRING, unique: true, allowNull: false, validate: {
    isEmail: true
    }})
  email: string;

  @Column({type: DataType.STRING, allowNull: false})
  password: string;

}