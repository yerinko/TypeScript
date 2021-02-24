export default interface IPerson {
    name: string;
    age: number
}

// 인터페이스의 조건을 벗어나는 예
let good: IPerson = { name: 'Jack', age:32}

let bad1: IPerson = { name: 'Jack'} // age 속성이 없으므로 오류
let bad2: IPerson = { age: 32} // name 속성이 없으므로 오류
let bad3: IPerson = {} // name과 age 속성이 없으므로 오류
let bad4: IPerson = { name: 'Jack', age: 32, ect: true} // etc 속성이 있어서 오류