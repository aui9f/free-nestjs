import { Injectable } from '@nestjs/common';
import { Movie } from 'src/entities/movie.entity';

@Injectable()
export class MoviesService {

    private movies: Movie[] = []; //강의를 위한 가짜 디비 데이터

    getMovieAll(): Movie[]{
        return this.movies;
    }

    getMovieOne(id: string): Movie{
        return this.movies.find(x=>x.id === +id);
    }

    deleteMovie(id: string): Boolean{
        this.movies.filter(x=>x.id !== +id);
        return true;
    }
    
    created(movieData):void {
        this.movies.push({
            id: this.movies.length+1,
            ...movieData
        })
    }
}
