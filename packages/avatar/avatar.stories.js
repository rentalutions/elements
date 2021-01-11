import React from "react"
import { Avatar, AvatarGroup } from "./src"

export default { title: "Avatar" }

export function Default() {
  return (
    <Avatar
      name="Chicago Properties & Financials of Streeterville Coast"
      email="janet.wooderhousen@email.com"
      photo="https://i.pravatar.cc/72"
    />
  )
}

export function NoEmail() {
  return (
    <Avatar
      name="Chicago Properties & Financials of Streeterville Coast"
      photo="https://i.pravatar.cc/72"
    />
  )
}

export function SmallGroup() {
  return (
    <AvatarGroup>
      <Avatar size="small" initials="PK" />
      <Avatar size="small" initials="JW" />
      <Avatar size="small" initials="CS" />
      <Avatar size="small" initials="SR" />
    </AvatarGroup>
  )
}
