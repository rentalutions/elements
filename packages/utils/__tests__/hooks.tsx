import React from "react"
import { ThemeProvider } from "styled-components"
import { render } from "@testing-library/react"
import { renderHook } from "@testing-library/react-hooks"
import { baseTheme, ElementsProvider } from "@rent_avail/core"
import { useIntersection, usePortal, useRemToPx } from "../src"

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

describe("usePortal", () => {
  const {
    result: { current },
  } = renderHook(() => usePortal())
  test("It returns a target element.", () => {
    expect(current).toBeInstanceOf(HTMLElement)
  })
})

describe("useRemToPx", () => {
  describe("when no parent theme provider", () => {
    it("throws error", () => {
      const TestUi = () : null => {
        useRemToPx(1)
        return null
      }
      expect(() => render(<TestUi/>)).toThrow("Theme provider not defined.")
    })
  })

  describe("when parent theme provider returns correct value", () => {
    // @ts-ignore
    const ThemeProviderWrapper = ({children}) => (
      <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>
    )

    it("for 1 rem", () => {
      const { result: { current }} = renderHook(() => useRemToPx(1), { wrapper: ThemeProviderWrapper })
      expect(current).toEqual(12)
    })

    it("for 1.5 rem", () => {
      const { result: { current }} = renderHook(() => useRemToPx(1.5), { wrapper: ThemeProviderWrapper })
      expect(current).toEqual(18)
    })

    it("for 0.5 rem", () => {
      const { result: { current }} = renderHook(() => useRemToPx(0.5), { wrapper: ThemeProviderWrapper })
      expect(current).toEqual(6)
    })

    it("for 0 rem", () => {
      const { result: { current }} = renderHook(() => useRemToPx(0), { wrapper: ThemeProviderWrapper })
      expect(current).toEqual(0)
    })

    it("for -1 rem", () => {
      const { result: { current }} = renderHook(() => useRemToPx(-1), { wrapper: ThemeProviderWrapper })
      expect(current).toEqual(-12)
    })

    it("returns NaN when passed a non-integer", () => {
      const { result: { current }} = renderHook(() => useRemToPx("a"), { wrapper: ThemeProviderWrapper })
      expect(current).toEqual(NaN)
    })
  })

  describe("when parent theme provider is Elements Provider", () => {
    // @ts-ignore
    const ElementsProviderWrapper = ({children}) => (
      <ElementsProvider theme={{ space: [0, 3, 6, 9, 12, 15, 18, 21] }}>{children}</ElementsProvider>
    )

    it("can override theme space value", () => {
        const { result: { current }} = renderHook(() => useRemToPx(1), { wrapper: ElementsProviderWrapper })
        expect(current).toEqual(3)
    })
  })
})