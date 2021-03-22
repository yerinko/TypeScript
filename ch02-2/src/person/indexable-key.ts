export type KeyValueType = {
    [key: string]: string
}
export const makeObject = (key: string, value: string): KeyValueType => ({[key]: value});

console.log(makeObject('name', 'Jack')); // {name: 'Jack}
console.log(makeObject('firstName', 'Jane')); // {firstName: 'Jane}