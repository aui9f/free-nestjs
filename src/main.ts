import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({ //우리가 쓰고 싶은 파이플를 nodeJS 어플리케이션으로 넘겨줌
      whitelist: true, // decorator도 없는 어떠한 property의 Object를 거른다.
      forbidNonWhitelisted: true, //보안, dtd에 없는 정보를 보내면 리퀘스트 자체에서 막을수 있음
      transform: true , //자동 형변환
    }) 
  )

  await app.listen(3000);
}
bootstrap();
