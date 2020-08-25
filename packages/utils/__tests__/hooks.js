import { renderHook } from "@testing-library/react-hooks"
import { useIntersection, useResize, usePortal } from "../src"

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
  const [target, size] = current
  test("It returns null if no window.", () => {
    expect(target.current).toBeNull()
  })
  test("It returns null if no target", () => {
    expect(size).toBeNull()
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
