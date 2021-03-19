import React, { useEffect } from "react"
import { render, screen } from "#testing"
import { useToast, ToastProvider } from "./src"

function ToastExample() {
  const toast = useToast()
  useEffect(() => {
    toast.blank("I'm a toast")
  }, [])
  return "Hello World"
}

describe("toast()", () => {
  it("Should render without crashing", () => {
    render(
      <ToastProvider>
        <ToastExample />
      </ToastProvider>
    )
    const toast = screen.queryByText(/I'm a toast/)
    expect(toast).toBeInTheDocument()
  })
})
