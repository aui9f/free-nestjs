import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { Movie } from 'src/entities/movie.entity';
import { UpdateMovie } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {

    private movies: Movie[] = []; //강의를 위한 가짜 디비 데이터

    getMovieAll(): Movie[]{
        return this.movies;
    }

    getMovieOne(id: number): Movie{
        // return this.movies.find(x=>x.id === +id);
        const movie = this.movies.find(x=>x.id === id);;
        if(!movie){
            throw new NotFoundException(`movie with Not ${id}`)
        }
        return movie
    }

    deleteMovie(id: number): Boolean{
        this.getMovieOne(id);
        this.movies = this.movies.filter(x=>x.id !== id);
        return true;
    }
    
    created(movieData):void {
        this.movies.push({
            id: this.movies.length+1,
            ...movieData
        })
    }

    updateMovie(id: number, updateData: UpdateMovie){
        const movie = this.getMovieOne(id)//수정할것
        this.deleteMovie(id); //기존데이터삭제
        this.movies.push({...movie, ...updateData})
    }
    /**
     * DTO (Data Transfer Object, 데이터 전송 객체) 생성  -- 코드를 더 간결
     * 쿼리에 대해 유효성 검사
     * 
     * export class ~~~ {
     *  readonly (변수명): (type);
     * }
     * 
     * main.ts 에서 파이프(pipe)를 생성
     * 미들웨어같은 개념 app.useGlobalPipe( ... )
     */
}
