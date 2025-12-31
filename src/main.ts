import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //remove os camos que não estão no DTO
      forbidNonWhitelisted: true, // Retorna erro se enviarem campos extras
      transform: true, // Converte tipos automaticamente
    }),
  );

  //habilitar o CORS para o app mobile
  app.enableCors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        'http://localhost:8081',
        'http://localhost:19000',
        'http://localhost:19006',
        'http://127.0.0.1:8081',
        'http://10.0.0.188:8081', // Seu IP local
        'exp://10.0.0.188:8081', // Expo
      ];
      
      // Permitir requisições sem origin (mobile)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
