import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Book[] | null> 
  {
    return this.prisma.book.findMany({
      where: {
        stock: {
          not: 0,
        }
      }
    })
  }

  async findOne(id: string): Promise<Book> 
  {
    return this.prisma.book.findUnique({
      where: {
        code: id,
      }
    })
  }
}
