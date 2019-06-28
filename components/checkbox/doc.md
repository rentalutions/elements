# Checkboxes

<img src="./example.png" style="margin:0 auto;display:block;">

## Usage
```javascript
import Checkbox from "@rentalutions/elements/checkbox"

<Checkbox />
<Checkbox>This is a label</Checkbox>

// Controlled Checkbox
function Element() {

  const [isChecked, setChecked] = useState(false)

  function handleClick(e) {
    setChecked(!e.target.checked)
  }
  return <Checkbox onClick={handleClick} checked={isChecked} />
}
```

## Props
| property  | propTypes | required | default | description                                                                                                                                                            |
| --------- | --------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| checked   | boolean   | false    | false   | This is the control for a checkbox. You're required to set this manually.                                                                                              |
| className | string    | false    | null    | This will wrap the styled component itself, which is a label. If you need to target the input directly you should be using `.your-class-name > input[type="checkbox"]` |