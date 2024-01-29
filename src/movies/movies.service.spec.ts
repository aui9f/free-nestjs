import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  //getMovieAll()테스트
  describe('Test getMovieAll() : ', () => {

    //배열리턴테스트
    it('shold return an array (테스트내용)', () => {
      const result = service.getMovieAll(); 
      expect(result).toBeInstanceOf(Array); 
    })
    
  })

  describe('Test: getOne(): ', () => {


    it('shold return a movie', ()=>{
      //getOne을 테스트 할때  데이터가 없으면 원하는 결과를 엊지 못할수 있다.
      //getOne으 위한 데이터를 먼저 만든다.
      service.created({
        title: 'Test Movie',
        genres: ['Test'],
        year: 999
      });
      const movie =service.getMovieOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    })


    it('should throw 404 error', () => {
      const idNumber = 999;
      try{
        service.getMovieOne(idNumber); ///999거 없음 
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`movie with Not ${idNumber}`)
      }
    })


  })

  describe('deleteone', ()=>{
    //하나지우기 [생성 하고 숫자확인, 삭제하고 숫자확인]
    it('하나지우기',()=>{
      service.created({
        title: 'DeleteMovie',
        genres: [],
        year: 2023
      });
      const beforeData=service.getMovieAll().length;
      service.deleteMovie(1)
      const afterData=service.getMovieAll().length;
      console.log('>>', beforeData, afterData)
      expect(afterData).toBeLessThan(beforeData);
      
    })
    //지우려는데, 주우려는 영화못찾을때
    it('지우려는데, 주우려는 영화못찾을때', ()=>{
      try {
        service.deleteMovie(999)
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`movie with Not 999`)
      }
    })
  });

  describe('Test: Update ', ()=>{
    it('업데이트 아이템이 없을경우', ()=>{
      service.created({
        title: 'Test Movie',
        genres: ['Test'],
        year: 999
      });
      service.updateMovie(1, {title: 'Update Test'});
      const movie = service.getMovieOne(1);
      expect(movie.title).toEqual('Update Test')

    });
    it('404에러 (업데이트 아이템이 없을경우) ', ()=>{
      try {
        service.updateMovie(999,{})
      } catch (e) {
        expect(e.message).toEqual('movie with Not 999')
      }
    })
  })
});
