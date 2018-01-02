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
      &nbsp;
      <Avatar
        initials="JK"
        indicator="#404040"
        name="Kasia Manolas"
        photo="https://randomuser.me/api/portraits/med/women/50.jpg"
      />
      &nbsp;
      <Avatar
        initials="JK"
        indicator="#404040"
        name="Venkatanarasimha Rajuvaripet"
        photo="https://randomuser.me/api/portraits/med/women/51.jpg"
      />
      &nbsp;
      <Avatar
        initials="JK"
        indicator="#404040"
        name="abcdefghijklmnopqrstuvwxyz"
        photo="https://randomuser.me/api/portraits/med/women/52.jpg"
      />
      &nbsp;
      <Avatar
        initials="JK"
        indicator="#404040"
        name="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        photo="https://randomuser.me/api/portraits/med/women/52.jpg"
      />
      &nbsp;
      <Avatar
        initials="JK"
        indicator="chartreuse"
        name={
          <span>
            <strong style={{color: "red",fontSize:"0.7em"}}>
              <span style={{fontFamily:"serif"}}>&ldquo;</span>
                MACHO MAN
              <span style={{fontFamily:"serif"}}>&rdquo;</span>
            </strong>
            &nbsp;Randy Savage
          </span>
        }
        photo="https://m.popkey.co/dead3e/MY96K_s-200x150.gif"
      />
    </div>
  ))
  .add("With contact information", () => (
    <div>
      <Avatar
        initials="JK"
        name="Venkatanarasimha Rajuvaripet"
        email="josh.keller@yahoo.com"
        phone="555 555 5555"
        indicator="#137BB5"
      />
      <Avatar
        initials="JJ"
        name="JJ Abrams"
        email="josh.keller@yahoo.com"
        phone="555 555 5555"
        indicator="#137BB5"
      />
      <Avatar
        initials="JK"
        name="abcdefghijklmnopqrstuvwxyz"
        email="abcdefghijklmnopqrstuvwxyz"
        phone="0123456789"
        indicator="#137BB5"
      />
      <Avatar
        initials="JK"
        name="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        email="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        phone="0123456789"
        indicator="#137BB5"
      />
    </div>
  ))
