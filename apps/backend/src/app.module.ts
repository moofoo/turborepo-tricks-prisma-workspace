import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {PrismaModule} from "nestjs-prisma";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
