import {Injectable} from "@nestjs/common";
import {PrismaService} from "nestjs-prisma";
import type {User} from "prisma-client";

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  getHello(): string {
    return "Hello World!";
  }

  getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
