import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { PrismaService } from 'src/prisma.service';
import { BookModule } from 'src/book/book.module';

@Module({
  controllers: [MemberController],
  providers: [MemberService, PrismaService],
  imports: [BookModule]
})
export class MemberModule {}
