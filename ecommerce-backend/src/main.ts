import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
   app.setGlobalPrefix('api');
  // Enable CORS (needed for React frontend)
  app.enableCors({
    origin: 'http://localhost:5173', // Vite default
    credentials: true,
  });

  // Global validation for DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            
      forbidNonWhitelisted: true, 
      transform: true,            
    }),
  );

  const PORT = process.env.PORT || 5000;
  await app.listen(PORT);

  console.log(`🚀 Server running on http://localhost:${PORT}`);
}

bootstrap();
