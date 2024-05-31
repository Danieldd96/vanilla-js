const name = require('../src/index.js');

test('suma de 1 + 2 es igual a 3',()=>{
    expect(name("+",1,2)).toBe(3);
});
test('suma de 8 - 2 es igual a 6',()=>{
    expect(name("-",8,2)).toBe(6);
});
test('suma de 10 * 2 es igual a 20',()=>{
    expect(name("*",10,2)).toBe(20);
});
test('suma de 6 / 2 es igual a 3',()=>{
    expect(name("/",6,2)).toBe(3);
});