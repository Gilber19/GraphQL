import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Servir archivos estáticos desde la carpeta public
  app.useStaticAssets(join(__dirname, '..', 'public'));
  
  // Habilitar CORS para mejor compatibilidad con herramientas GraphQL
  app.enableCors({
    origin: true,
    credentials: true,
  });

  await app.listen(3000);
  console.log(`
  🚀 Servidor corriendo en: http://localhost:3000
  📊 GraphQL Playground: http://localhost:3000/graphql
  🔍 Apollo Studio: https://studio.apollographql.com/sandbox/explorer?endpoint=http://localhost:3000/graphql
  `);
}
bootstrap();
