import React, { Fragment } from "react"
import { ChevronRight } from "react-feather"
import { Avatar, AvatarGroup } from "./src"

export default { title: "Packages/Avatar" }

export function Default() {
  return (
    // Any prop not defined here will be forwarded as expected
    <Avatar
      // The size of an avatar is large by default
      size="large"
      // This can either be the LL name or their company name.
      name="Chicago Properties & Financials of Streeterville Coast"
      // This is optional.
      email="janet.wooderhousen@email.com"
      // This defaults to a "blank avatar" hosted on s3. So if you don't have a
      // user photo, don't worry about it.
      photo="https://i.pravatar.cc/72"
      // This won't be rendered unless the size is "small".
      initials="PK"
    />
  )
}

export function NoEmail() {
  return (
    <Fragment>
      <Avatar
        name="Chicago Properties & Financials of Streeterville Coast"
        photo="https://i.pravatar.cc/72"
        icon={ChevronRight}
      />
      <Avatar name="Patrick K" photo="https://i.pravatar.cc/72" />
    </Fragment>
  )
}

export function SmallGroup() {
  return (
    <AvatarGroup>
      <Avatar size="small" initials="PK" />
      <Avatar size="small" initials="JW" />
      <Avatar size="small" initials="CS" photo="https://i.pravatar.cc/60" />
      <Avatar size="small" initials="SR" />
    </AvatarGroup>
  )
}
