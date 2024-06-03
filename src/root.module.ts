import { Module } from '@nestjs/common';

import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from '@shared/database/database.module';

@Module({
  imports: [DatabaseModule, UserModule, CompanyModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {}
