import React from "react"
import { storiesOf } from "@storybook/react"
import { Avatar } from "../src"

export default storiesOf("Avatar", module)
  .add("Basic", () => (
    <Avatar
      initials="JK"
      photo="https://randomuser.me/api/portraits/med/men/83.jpg"
    />
  ))
  .add("With name", () => (
    <div>
      <Avatar
        initials="JK"
        indicator="#404040"
        name="Villupuram Chinnaih Pillai Ganesan"
        photo="https://randomuser.me/api/portraits/med/men/83.jpg"
      />
      <Avatar initials="JK" indicator="#404040" name="Kasia Manolas" />
      <Avatar initials="JK" indicator="#404040" name="Venkatanarasimha Rajuvaripet" />
      <Avatar initials="JK" indicator="#404040" name="Kyle Thomas Ramirez III" />
    </div>
  ))
  .add("With contact information", () => (
    <Avatar
      initials="JK"
      name="Venkatanarasimha Rajuvaripet"
      email="josh.keller@yahoo.com"
      phone="555 555 5555"
      indicator="#137BB5"
    />
  ))
