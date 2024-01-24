import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies') // URL의 Entry Point (엔트리 포인트) 를 컨드롤
export class MoviesController {
    @Get()
    getAll(): string{
        return `This will return all movies`;
    }

    @Get('search')
    getQueryYear(@Query() movieQuery){
        return movieQuery
    }
    
    @Get(':id')
    getOne(@Param('id') movieId: string): string{
        return `This will return one movice with the id: ${movieId}`
    }

    @Post()
    postMovie(@Body() movieBody){
        return movieBody
    }

    @Delete(':id')
    deleteMovie(@Param('id') movieId: string): string{
        return `Delete Movie Id: ${movieId}`
    }
    @Patch(':id')
    updateMovie(@Param('id') movieId: string): string{
        return `Update Movie Id: ${movieId}`
    }
}
