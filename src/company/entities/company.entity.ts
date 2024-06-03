import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '@shared/database/entities/base.entity';
import { UserEntity } from 'src/user/entities/user.entity';

import { databaseTables } from '@shared/database/constants';

@Entity({ name: databaseTables?.companies })
export class CompanyEntity extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => UserEntity, (user) => user)
  owners: UserEntity[];
}
