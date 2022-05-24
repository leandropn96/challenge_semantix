import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1')

  const config = new DocumentBuilder()
    .setTitle('Desafo Técnico')
    .setDescription('Automação de users LinkApi e Storage GoFile')
    .setVersion('1.0')
    .addTag('Leandro Pereira Nunes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(process.env.APP_PORT);
}
bootstrap();
