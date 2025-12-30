import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'JNbxXQpuKuPMQ0db+CpIxH0t0q+i8cGvmoRBrhWX/XA=', // Em produção, use variáveis de ambiente (.env)
      signOptions: { expiresIn: '7d' }, // Token vale por 7 dias
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
