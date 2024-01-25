import { IsNumber, IsOptional, IsString } from "class-validator"
// readonly get 전용이기때문에 이옵션사용
export class CreateMovie {
    @IsString()
    readonly title: string

    @IsNumber()
    readonly year: number

    @IsString({each: true})
    @IsOptional()
    readonly genres: string[]
    // 옵션에서 each: true 이면, 요소 하나씩 검사한다는 뜻
}