# Avatars

An avatar component is used to display user information to another user. It can be used in a variety of sizes and spaces and is often clickable and opens more in-depth information about the user such as account or payment status.

## Usage
```javascript
import Avatar from "@rentalutions/elements/avatar"

<Avatar
  photo_url="https://image.com/image.png"
  name="Patrick Krawczykowski"
/>
<Avatar
  small
  intials="PK"
/>
```

## Props
| property  | propType | required | default | description                                               |
| --------- | -------- | -------- | ------- | --------------------------------------------------------- |
| initals   | string   | false    | null    | The initials are used only in the small size of component |
| name      | string   | false    | null    | The name is used in both the medium and large sizes.      |
| photo_url | url      | false    | null    | The user's photo to aid in recognition                    |