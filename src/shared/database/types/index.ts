import { CompanyEntity } from 'src/company/entities/company.entity';
import { UserEntity } from 'src/user/entities/user.entity';

import { DatabaseRepository } from '../repositories/database.repository';

export const DatabaseEntities = {
  users: UserEntity,
  companies: CompanyEntity,
};

export type DatabaseEntitiesType = typeof DatabaseEntities;

export type DatabaseRepositories = {
  [table in keyof DatabaseEntitiesType]: DatabaseRepository<DatabaseEntitiesType[table]>;
};
