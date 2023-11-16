import { getId } from "@rent_avail/utils"
import { useMemo } from "react"

export function useId(seed = "doors") {
  return useMemo(() => getId(), [seed])
}
