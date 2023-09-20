import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { PrismaService } from './prisma.service';
import { MemberModule } from './member/member.module';
import { BookService } from './book/book.service';

@Module({
  imports: [BookModule, MemberModule],
  controllers: [],
  providers: [PrismaService, BookService],
})
export class AppModule {}
