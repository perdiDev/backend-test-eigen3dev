import { Controller, Get, Param, Post } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  findAll() {
    return this.memberService.findAll();
  }

  @Post(':memberId/borrow/:bookCode')
  borrowed(@Param('memberId') memberId: string, @Param('bookCode') bookCode: string) {
    return this.memberService.borrowBook(memberId, bookCode);
  }

  @Post(':memberId/return/:bookCode')
  returning(@Param('memberId') memberId: string, @Param('bookCode') bookCode: string) {
    return this.memberService.returnBook(memberId, bookCode);
  }
}
