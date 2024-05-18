import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserMapper } from 'src/mappers/user.mapper';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './auth-strategy/jwt-strategy';
import { LocalStrategy } from './auth-strategy/local-strategy';
import * as crypto from 'crypto';

@Module({
  imports: [
    ConfigModule,
    UserModule,
    PassportModule.register({ defaultStrategy: 'bearer' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret:
          configService.get<string>('JWT_SECRET') ||
          crypto.randomBytes(32).toString('hex') ||
          process.env.JWT_SECRET,
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  providers: [AuthService, LocalStrategy, UserMapper, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
