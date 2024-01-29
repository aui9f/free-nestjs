import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
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

    it('POST', ()=>{
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: 'e2e test',
          year: 2024,
          genres: ['test']
        })
        .expect(201)
    })
  })

  
});
