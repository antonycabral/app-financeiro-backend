import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // seu usuário do pgAdmin
      password: '7887', // sua senha do pgAdmin
      database: 'wallet_mobile',
      entities: [User], // Adicionaremos a entidade aqui em seguida
      synchronize: true, // "Auto-magic" para criar tabelas sem migrations manuais
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
