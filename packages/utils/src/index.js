export function throttle(fn, ms) {
  let timeout
  function exec() {
    fn.apply()
  }
  function clear() {
    return timeout === "undefined" ? null : clearTimeout(timeout)
  }
  if (fn !== undefined && ms !== undefined) {
    timeout = setTimeout(exec, ms)
  } else {
    console.error("callback function and the timeout must be supplied")
  }
  // API to clear the timeout
  throttle.clearTimeout = clear()
}

export function wrapEvent(original, additional) {
  return (event) => {
    if (original) original(event)
    if (!event.defaultPrevented) return additional(event)
  }
}

export function noop() {}
