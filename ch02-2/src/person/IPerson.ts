export default interface IPerson {
    name: string; // 필수 속성
    age: number // 필수 속성
    etc?: boolean // 선택 속성
}

// 인터페이스의 조건을 벗어나는 예
let good1: IPerson = { name: 'Jack', age:32};
let good2: IPerson = { name: 'Jack', age: 32, etc: true}; // etc 속성이 있어서 오류
