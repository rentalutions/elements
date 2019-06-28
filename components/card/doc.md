# Cards

Cards contain information and actions about a single subject. Cards should be scannable for relevant information. Elements like text and images should be placed on them in a way that clearly indicates hierarchy.

## Usage
```javascript
import Card, {CardActions} from "@rentalutions/elements/card"

<Card>
  <header>Card Header<header>
  <section>Card Body</section>
  <CardActions>
    <Button>Primary Action</Button>
    <Button>Secondary Action</Button>
  </CardActions>
</Card>
```

## Props

| property | propType | required | default | description |
| -------- | -------- | -------- | ------- | ----------- |
