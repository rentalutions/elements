import { ChangeEvent, KeyboardEvent, useState } from "react"
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

export function useCheckbox({
  ref,
  checked,
  defaultChecked,
  label,
  onChange = noop,
  ...props
}: any) {
  const [isChecked, setChecked] = useState(!!checked || !!defaultChecked)
  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setChecked(target.checked)
  }
  function handleKeyDown({ key }: KeyboardEvent<HTMLLabelElement>) {
    if (key === "Enter") setChecked((c: boolean) => !c)
  }
  return {
    checked: isChecked,
    wrapperProps: { ref, tabIndex: 0, onKeyDown: handleKeyDown },
    inputProps: {
      ...props,
      checked: isChecked,
      onChange: wrapEvent(onChange, handleChange),
    },
    ariaProps: {
      role: "checkbox",
      "aria-checked": isChecked,
    },
    label,
  }
}

export function useRadio({
  label,
  checked,
  defaultChecked,
  ref,
  onChange = noop,
  ...props
}: any) {
  const [isChecked, setChecked] = useState(!!checked || !!defaultChecked)
  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    console.log(target)
    setChecked(target.checked)
  }
  return {
    checked: isChecked,
    wrapperProps: { ref, tabIndex: 0 },
    inputProps: {
      ...props,
      checked: isChecked,
      onChange: wrapEvent(onChange, handleChange),
    },
    ariaProps: { role: "radio", "aria-checked": isChecked },
    label,
  }
}
