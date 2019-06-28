# Buttons

Buttons allow users to take action or make choices with a quick click. They're placed throughout the UI in places like `cards`, `modals`, `forms`, and `toolbars`.

## Usage
```javascript
import Button from "@rentalutions/elements/button"

<Button>button</Button>
<Button primary>button</Button>
<Button subtle>button</Button>
```

## Props

| property | propType | required | default | description                                                                                                            |
| -------- | -------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| primary  | boolean  | false    | false   | Set whether this button is a primary button, which gives visual importance.                                            |
| subtle   | boolean  | false    | false   | Set whether this button is a subtle button, which removes visual importance. Removing borders and muting a hover state |