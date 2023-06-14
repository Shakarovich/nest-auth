import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import {AtGuard} from './common/guards';
import { APP_GUARD } from '@nestjs/core';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [AuthModule, UserModule, PrismaModule, PostsModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard
    }
  ],
})
export class AppModule {}
