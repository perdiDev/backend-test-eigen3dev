import { BadRequestException, Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Member, Member_Borrowed_Book } from '@prisma/client';
import { BookService } from 'src/book/book.service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MemberService {
  constructor(private readonly prisma: PrismaService, private bookService: BookService) {}

  findAll() {
    return this.prisma.member.findMany({
      include: {
        _count: {
          select: {
            Member_Borrowed_Book: true,
          }
        },
      }
    });
  }

  async findOne(id: string): Promise<Member> {
    return this.prisma.member.findUnique({
      where: {
        code: id
      }
    })
  }

  async borrowBook(memberId: string, bookCode: string): Promise<Member_Borrowed_Book> {
    const now = new Date();
    const member = await this.findOne(memberId);
    const book = await this.bookService.findOne(bookCode);

    if(member.penalized) {
      throw new BadRequestException(
        'Member with penalty cannot borrow the book for 3 days'
      );
    }

    if(book.stock == 0) {
      throw new UnprocessableEntityException('book out off stock');
    }

    return await this.prisma.member_Borrowed_Book.create({
      data: {
        borrowedAt: now,
        bookCode,
        memberCode: memberId
      }
    })
  }

  async returnBook(memberId: string = "", bookCode: string = "") {
    const now = new Date();

    const cekBook = await this.prisma.member_Borrowed_Book.findUnique({
      where: {
        bookCode_memberCode:{
          bookCode,
          memberCode: memberId
        }
      }
    })

    if(!cekBook) {
      throw new BadRequestException(
        'Member not borrow that book',
      );
    }

    return await this.prisma.member_Borrowed_Book.delete({
      where: {
        bookCode_memberCode: {
          bookCode,
          memberCode: memberId
        }
      }
    })
  }
}
