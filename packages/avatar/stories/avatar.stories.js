import React, { Fragment } from "react"
import { ChevronRight } from "react-feather"
import { Avatar, AvatarGroup } from "../src"

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

export function NoPhotoOrInitials() {
  return (
    <Avatar
      name="Chicago Properties & Financials of Streeterville Coast"
      email="janet.wooderhousen@email.com"
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
      <Avatar name="Patrick K" photo="https://i.pravatar.cc/72" initials="JJ" />
      <Avatar photo="https://i.pravatar.cc/72" initials="JS" />
      <Avatar
        photo="https://i.pravatar.cc/72"
        initials="JS"
        name="Patrick Krawczykowski"
      />
    </Fragment>
  )
}

export function SmallGroup() {
  return (
    <AvatarGroup>
      <Avatar size="small" initials="PK" />
      <Avatar size="small" initials="JW" />
      <Avatar size="small" photo="https://i.pravatar.cc/60" initials="KK" />
      <Avatar size="small" initials="SR" />
    </AvatarGroup>
  )
}
