import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { GoalsModule } from '../goals/goals.module';
import { Transaction } from 'src/entities/transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction]), GoalsModule],
  providers: [TransactionsService],
  controllers: [TransactionsController]
})
export class TransactionsModule {}
