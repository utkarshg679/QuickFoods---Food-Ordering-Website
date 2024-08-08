import {sum} from "../sum"

test("Sum function should return the sum of two numbers" , () => {
    const result = sum(2,8)

    expect(result).toBe(10)
})