// 함수 시그니처 활용 ( type 키워드로 타입 별칭 만들기 )
type stringNumberFunc = (string, number) => void;
let f:stringNumberFunc = function(a:string, b:number): void {};
let g:stringNumberFunc = function(c:string, d:number): void {};