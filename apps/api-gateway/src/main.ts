import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // فعال‌سازی CORS (بسیار مهم چون دامنه‌های فرانت و بک متفاوتند)
  app.enableCors({
    origin: 'http://localhost:3000', // آدرس Next.js
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Smart Agriculture API')
    .setDescription('The Agri API description')
    .setVersion('1.0')
    .addBearerAuth() // برای JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // آدرس: http://localhost:3000/api

  // اختیاری: ذخیره فایل Swagger JSON برای استفاده در فرانت
  // fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
 

  await app.listen(4000);
}
bootstrap();
