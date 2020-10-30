import { renderHook } from "@testing-library/react-hooks"
import { useIntersection, useSize, usePortal } from "../src"

describe("useIntersection", () => {
  const {
    result: {
      current: [target],
    },
  } = renderHook(() => useIntersection())
  test("It returns null if no window.", () => {
    expect(target.current).toBeUndefined()
  })
})

describe("useSize", () => {
  const {
    result: { current },
  } = renderHook(() => useSize())
  const [target, rect] = current
  test("It returns null if no window.", () => {
    expect(target.current).toBeNull()
  })
  test("It returns width of 0 if no target", () => {
    expect(rect.width).toEqual(0)
  })
})

describe("usePortal", () => {
  const {
    result: { current },
  } = renderHook(() => usePortal())
  test("It returns a target element.", () => {
    expect(current).toBeInstanceOf(HTMLElement)
  })
})
