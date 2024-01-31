import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({ //우리가 쓰고 싶은 파이플를 nodeJS 어플리케이션으로 넘겨줌
        transform: true , //자동 형변환
      }) 
    )
    await app.init();
  });

  
  describe('APP -- GET TEST', ()=>{
    it('/ (GET)', () => {
      return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect('Hello World!');
    });
  })
  
  describe('Movie Test', ()=>{
    it('/movies', ()=>{
      return request(app.getHttpServer()).get('/movies')
      .expect(200)
      .expect([]);
      //app.getHttpServer() -- http://localhost:3000 같은걸 안쓰기 위해서 사용
    })


    it('[Post] created:', ()=>{
      return request(app.getHttpServer()).post('/movies').send({
        title: 'TEST Title',
        year: 2024,
        genres: ['AAA','BBB','CCC']
      }).expect(201)
    })

    it('[Get] getMovieOne -- 200: ', ()=>{
      /**
       * 상단에 sned를 통해 추가를 하였는데, 검색이 안된 이유는 get
       * service  -- getMovieOne(id: number): Movie 파라미터가 number 인데,
       * .get('/movies/1') -- 여기서 '1'은 문자열
       * 실서버에서는 main.ts에서 파피프 옵션 transform: true 을 해줬기 때문이다.
       * 테스트로직에서도 파이프 추가
      */
      return request(app.getHttpServer())
        .get('/movies/1')
        .expect(200)
    })

    it('[GET] getMovieOne -- 404', ()=>{
      return request(app.getHttpServer()).get('/movies/999').expect(404)
    })
    it.todo('DELETE');
    it.todo('PATCH');

  })

  
});
