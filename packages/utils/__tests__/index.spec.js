import { remToPx } from "../src"

describe("helpers", () => {
  describe("when calling remToPx", () => {
    it("returns correct value for 1 rem", () => {
      expect(remToPx(1)).toEqual(12)
    })

    it("returns correct value for 1.5 rem", () => {
      expect(remToPx(1.5)).toEqual(18)
    })

    it("returns correct value for 0.5 rem", () => {
      expect(remToPx(0.5)).toEqual(6)
    })

    it("returns correct value for 0 rem", () => {
      expect(remToPx(0)).toEqual(0)
    })

    it("returns correct value for -1 rem", () => {
      expect(remToPx(-1)).toEqual(-12)
    })

    it("returns NaN when passed a non-integer", () => {
      expect(remToPx("a")).toEqual(NaN)
    })
  })
})
