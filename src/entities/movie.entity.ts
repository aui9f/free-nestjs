export class Movie{
    id: number
    title: string
    year: number
    genres: string[]
}
/**
 * 서비스로 보내고 받을 클래스(인터페이스)를 export
 * 강의는 가짜 디비이지만, 
 * 보통은 entities 에 실제로 데이터베이스의 모델을 만들어야함
 */