import { PartialType } from "@nestjs/mapped-types"
import { IsNumber, IsString } from "class-validator"
import { CreateMovie } from "./creat-movie.dto"

// create 에 있던 데이터와 동일 차이점은 필수입력이 아닌것 정도이다.
// -> 부분타입 (partial types) 사용 $npm i @nestjs/mapped-types 타입을 변환ㅎ시키고 사용할수 있음
export class UpdateMovie extends PartialType(CreateMovie){}