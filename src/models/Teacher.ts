import {
  Sequelize,
  Model,
  DataTypes,

  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToCreateAssociationMixin,
  Association,
} from 'sequelize';

import { User } from './User';

export interface TeacherAttributes {
  id?: number;
  userId: number;
}

export class Teacher extends Model<TeacherAttributes> implements TeacherAttributes {
  public id!: number;
  public userId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getUser!: BelongsToGetAssociationMixin<User>;
  public setUser!: BelongsToSetAssociationMixin<User, number>;
  public createUser!: BelongsToCreateAssociationMixin<User>;

  public readonly user?: User;

  public static associations: {
    user: Association<Teacher, User>;
  };
}

export const initTeacher = (sequelize: Sequelize) => {
  Teacher.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        },
      },
    {
      sequelize,
      tableName: 'teachers',
    },
  );
};