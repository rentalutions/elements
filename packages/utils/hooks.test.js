import { renderHook } from "@testing-library/react-hooks"
import { useIntersection, useResize, usePortal } from "./src"

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

describe("useResize", () => {
  const {
    result: { current },
  } = renderHook(() => useResize())
  const [target, bounds] = current
  test("It returns null if no window.", () => {
    expect(target.current).toBeNull()
  })
  test("It returns width of 0 if no target", () => {
    expect(bounds.width).toEqual(0)
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
