# STUDY

💻 노마드코더 인강

✍️ 노션 강의 정리

🔗 결과 URL


### 🖥 배우면서 구현
![NestJS](https://img.shields.io/badge/nestjs-fb99b7?style=for-the-badge&logo=nestjs&logoColor=f4004a) ![ts](https://img.shields.io/badge/typescript-eeeeee?style=for-the-badge&logo=typescript&logoColor=blue) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

---

## **#0 INTRODUCTION**

설치: node.js, VSCode, insomnia

프로젝트 생성

```bash
$ npm i -g @nestjs/cli
$ nest new (project-name)
$ npm run start:dev # watch mode
```

## ** #1 ARCHITECTURE OF NESTJ S**
**데코레이터(@~~):** 클래스에 함수 기능을 추가 ex — `@Module` (데코레이터모듈)

**모듈** 하나의 모듈은 하나의 controllers, providers

**컨트롤러:** 기본적으로 URL을 가져오고 함수를 실행 *(express의 라우터 같은 존재)*

**서비스:** 비지니스직

- ***EX) Hello World를 출력한 파일 추적하기***
    1. **app.module.ts ⇒** controllers: [AppController]
    2. **app.controller.ts ⇒** getHello(): string { return this.appService.getHello(); }
    3. **app.service.ts ⇒** getHello(): string { return 'Hello World!'; }


## ** #2 REST API **

🖍 설치 → 자동으로 셋팅까지 해줌
```bash
$ nest ## 조회하면 사용할수 있는 키워드가 나온다.
$ jest g mo ## movies (모듈이름)
$ nest g co ## g (generate) , co (controller)
$ nest g s ## g (generate) , s (service)
```

__에러발생시키기__ throw new NotFoundException()

__entities__ 
데이터베이스의 모델을 만들어야함
```ts
export class Movie{
    id: number
    title: string
    year: number
    genres: string[]
}
```


__DTO__ (Data Transfer Object, 데이터 전송 객체) 
사용자가 보낼수 있는 데이터를 작성
```ts
import { IsNumber, IsOptional, IsString } from "class-validator"
export class CreateMovie {
    @IsString()
    readonly title: string
    @IsNumber()
    readonly year: number
    @IsString({each: true}) //j 옵션에서 each: true 이면, 요소 하나씩 검사한다는 뜻
    @IsOptional()
    readonly genres: string[]
}
```

웹 애플리케이션으로 전송되는 데이터의 검증
```bash
npm i --save class-validator class-transformer
```



<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
