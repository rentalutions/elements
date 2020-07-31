
```js
import {
  Dialog,
  DialogTarget,
  DialogHeader,
  FullscreenDialog,
  ConfirmationDialog,
} from "@rent_avail/dialog"
```

This package contains the different types of dialogs used at Avail. All variants need to be wrapped in the `<Dialog />` for accessability and performance. Components that open and close the dialog need to be wrapped by the `<DialogTarget />` element.

## Dialog

#### Dialog Props

| name   | type       | description                                                                                        |
| ------ | ---------- | -------------------------------------------------------------------------------------------------- |
| open   | `boolean`  | Controls whether the dialog is visible.                                                            |
| toggle | `function` | Handler that is called when the user clicks the close button on the dialog.                        |
| id     | `string`   | Identifier for the target node. This will set the proper aria controls and handle keyboard events. |

---

## DialogHeader

This element can be placed in all dialogs to give a consistent header text and close button. You can also implement this functionality yourself.

#### Props

| name  | type   | description                                                                    |
| ----- | ------ | ------------------------------------------------------------------------------ |
| title | string | If present, adds a title to the fullscreen dialog inline with the close button |

## FullscreenDialog

Fullscreen dialogs should be used for complex forms, and whenever we ask the user to create an object that we'll save for them. Common use cases would be requesting an application, adding an addendum to a lease, and editing a rent payment.

#### Style Props

`space, color`

#### Usage

```jsx live
function OpenDialog() {
  const [open, set] = useState(false)
  function handleClick() {
    set((o) => !o)
  }
  return (
    <Dialog open={open} toggle={handleClick} id="confirmation-id">
      <DialogTarget>
        <Button onClick={handleClick}>Open Modal</Button>
      </DialogTarget>
      <FullscreenDialog>
        <Container>
          <DialogHeader title="Application Settings" />
          <Heading as="h4" mb="2rem">
            Updating these settings will not effect in progress applications.
          </Heading>
          <Input label="Hello World" />
        </Container>
      </FullscreenDialog>
    </Dialog>
  )
}
```

---

## ConfirmationDialog

Confirmation dialogs should be used to confirm the action that the user or the system has just taken.

#### Style Props

`space, color`

### Usage

```jsx live
function OpenDialog() {
  const [open, set] = useState(false)
  function handleClick() {
    set((o) => !o)
  }
  return (
    <Dialog open={open} toggle={handleClick} id="confirmation-id">
      <DialogTarget>
        <Button onClick={handleClick}>Open Modal</Button>
      </DialogTarget>
      <ConfirmationDialog>
        <DialogHeader title="Are you sure?" />
        <Text>
          This action will delete 43 files. Are you sure you want to continue?
        </Text>
      </ConfirmationDialog>
    </Dialog>
  )
}
```