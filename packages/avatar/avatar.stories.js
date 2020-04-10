import React from "react"
import Avatar from "./index"

export default { title: "Avatar" }

export function Basic() {
  return (
    <Avatar
      name="Janet Wood"
      photoUrl="https://source.unsplash.com/collection/802865/48x48"
    />
  )
}

export function Small() {
  return <Avatar small initials="JW" />
}

export function WithIcon() {
  return (
    <Avatar
      name="Janet Wood"
      photoUrl="https://source.unsplash.com/collection/802865/48x48"
    />
  )
}
