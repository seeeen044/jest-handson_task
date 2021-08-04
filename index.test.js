import { add, addString, filterOrange, toNumber } from "./index";
describe("add", () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
})

//task1
describe("addString",() => {
  
  test('When a and b are "a" and "b", it becomes "ab"', () => {
    const a = "a";
    const b = "b";
    expect(addString(a,b)).toBe("ab");
  })

  test('When a equal "a",b equal 1, it returns "a1"', () => {
    const a = "a";
    const b = 1;
    expect(addString(a,b)).toBe("a1");
  }) 

  test('When a equal 1,b equal 1, it retuens -1', () => {
    const a = 1;
    const b = 1;
    expect(addString(a,b)).toBe(-1);
  })

})

//task2
describe("toNumber", () => {

  test('Passed a as string,it should be NaN', () => {
    const a = "a";
    expect(toNumber(a)).toBe(NaN);
  })

  test('Passed a is 3kndva as string,it should be 3', () => {
    const a = "3kndva";
    expect(toNumber(a)).toBe(3);
  })

})

//task3
describe("filterOrange", () => {

  test('Passed array does not include orange, it should be empty array', () => {
    const arr = ["banana", "melon","apple"];
    expect(filterOrange(arr)).toEqual([]);
  })

  test('Passed array include orange, it should be ["orange"]', () => {
    const arr = ["orange","peach","apple"];
    expect(filterOrange(arr)).toEqual(["orange"]);
  })

})
