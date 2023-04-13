import { Module } from '@nestjs/common'
import { AppController } from './index.controller'

@Module({
  imports: [],
  controllers: [AppController]
})
export class indexModule {}
