import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '@shared/database/entities/base.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';

import { databaseTables } from '@shared/database/constants';

@Entity({ name: databaseTables?.users })
export class UserEntity extends BaseEntity {
  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToMany(() => CompanyEntity, (company) => company.owners, { nullable: true })
  ownerCompany: CompanyEntity;
}
