import { ChangeEvent, useState } from "react"
import { wrapEvent, noop } from "@rent_avail/utils"

export function useInput({
  type = "text",
  label,
  onChange = noop,
  error = null,
  value,
  help,
  defaultValue,
  ...props
}: any) {
  const isDate = type === "date"
  const [raised, setRaised] = useState(!!value || !!defaultValue || isDate)
  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setRaised(!!target.value.length || isDate)
  }
  return {
    raised,
    label,
    inputProps: {
      ...props,
      type,
      value,
      onChange: wrapEvent(onChange, handleChange),
    },
    error,
    errorProps: {
      hidden: !error,
      role: "alert",
    },
    help,
    helpProps: {
      hidden: error,
    },
  }
}

export function useCheckbox() {}
