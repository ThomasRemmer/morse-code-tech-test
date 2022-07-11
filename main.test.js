import {expect,it} from "@jest/globals"
import {translate} from "./main"

it("should translate ABC to '.- -... -.-.'" , () => {
    const result = translate("ABC")
    expect(result).toBe(".- -... -.-.")
}) 

it("should translate A%C to 'Invalid Input'" , () => {
    const result = translate("A%C")
    expect(result).toBe("Invalid Input")
})

it("should translate ABC EF to '.- -... -.-.'" , () => {
    const result = translate("ABC")
    expect(result).toBe(".- -... -.-.  . ..-.")
})