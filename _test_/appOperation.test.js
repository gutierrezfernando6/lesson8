const appOperations = require('../src/appOperations');

test("multiplication property of zero", ()=> {
    expect(appOperations.multiply(5, 0)).toBe(0); 
});

test("addition of two numbers", () => {
    expect(appOperations.add(5,5)).toBe(10);
});

test("test substraction", () => {
    expect(appOperations.subtract(15,5)).toBe(10);
});
