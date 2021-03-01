// 비구조화
import { IPerson} from "./IPerson_IConpany";

let jack: IPerson = {name: 'Jack', age: 32};
let {name, age} = jack;
console.log(name, age); // Jack 32