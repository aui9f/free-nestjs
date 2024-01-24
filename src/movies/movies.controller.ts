import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from 'src/entities/movie.entity';

@Controller('movies') // URL의 Entry Point (엔트리 포인트) 를 컨드롤
export class MoviesController {
    
    constructor(private readonly movieService: MoviesService){}

    @Get()
    getAll(): Movie[]{
        // return `This will return all movies`;
        return this.movieService.getMovieAll();
    }

    @Get('search')
    getQueryYear(@Query() movieQuery){
        return movieQuery
    }
    
    @Get(':id')
    getOne(@Param('id') movieId: string): Movie{
        // return `This will return one movice with the id: ${movieId}`
        return this.movieService.getMovieOne(movieId)
    }

    @Post()
    postMovie(@Body() movieBody){
        // return movieBody
        return this.movieService.created(movieBody); 
    }

    @Delete(':id')
    deleteMovie(@Param('id') movieId: string): Boolean{
        // return `Delete Movie Id: ${movieId}`
        return this.movieService.deleteMovie(movieId);
    }
    @Patch(':id')
    updateMovie(@Param('id') movieId: string): string{
        return `Update Movie Id: ${movieId}`
    }
}
