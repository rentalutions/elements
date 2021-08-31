import React, { useState, useEffect, useContext } from "react"
import { Container, Stack, Box } from "@rent_avail/core"
import { X } from "@rent_avail/icons"
import {
  Checkbox,
  Radio,
  Switch,
  Button,
  Select,
  SelectInput,
  SelectList,
  SelectItem,
  SelectContext,
} from "./src"

export default {
  title: "Packages/Controls",
  decorators: [
    (Story) => (
      <Container sx={{ mt: "4rem" }}>
        <Story />
      </Container>
    ),
  ],
}

export function CheckboxUsage() {
  return <Checkbox />
}

export function ButtonUsage() {
  const [loading, set] = useState(false)
  function fakeFetch() {
    set(true)
    setTimeout(() => {
      set(false)
    }, (Math.random() + 0.5) * 5000)
  }
  return (
    <Stack alignItems="start">
      <Button variant="primary" loading={loading} onClick={fakeFetch}>
        submit
      </Button>
      <Button>go back</Button>
      <Button disabled onClick={(e) => console.log("uh oh")}>
        not allowed
      </Button>
      <Button variant="danger" borderColor="red_500">
        Don't do this
      </Button>
      <Button color="purple_500" borderColor="purple_500">
        premium content
      </Button>
    </Stack>
  )
}

export function RadioUsage() {
  return <Radio />
}

export function SwitchUsage() {
  return <Switch />
}

const statesUrl =
  "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json"

export function SelectUsage() {
  const [state, setStatesHash] = useState({ loaded: false, statesArray: [] })
  useEffect(() => {
    async function getStates() {
      const response = await fetch(statesUrl)
      const statesJson = await response.json()
      const statesArray = Object.entries(statesJson)
      setStatesHash({ loaded: true, statesArray })
    }
    getStates()
  }, [])
  if (!state.loaded) return "loading..."
  return (
    <Container>
      <Select id="home-address">
        <SelectInput label="Home State" />
        <SelectList>
          {state.statesArray.map(([key, value]) => (
            <SelectItem
              key={key}
              id={key}
              tokens={[{ name: key, value, id: key }]}
            >
              {value}
            </SelectItem>
          ))}
        </SelectList>
      </Select>
      <Select multi id="another-address" sx={{ mt: "2rem" }}>
        <SelectInput label="Office State" />
        <SelectList>
          {state.statesArray.map(([key, value]) => (
            <SelectItem
              key={key}
              id={key}
              tokens={[{ name: key, value, id: key }]}
            >
              {value}
            </SelectItem>
          ))}
        </SelectList>
      </Select>
      <Select
        multi
        id="third-address"
        sx={{ mt: "2rem" }}
        defaultValue={[
          { name: state.statesArray[24][0], value: state.statesArray[24][1] },
        ]}
      >
        <SelectInput label="Vacation State" />
        <SelectList>
          {state.statesArray.map(([key, value]) => (
            <SelectItem
              key={key}
              id={key}
              tokens={[{ name: key, value, id: key }]}
            >
              {value}
            </SelectItem>
          ))}
        </SelectList>
      </Select>
    </Container>
  )
}

function CustomToken({ name, photo, id }) {
  const { dispatch } = useContext(SelectContext)
  function removeToken() {
    dispatch({
      type: SelectActions.removeToken,
      payload: (token) => token.id !== id,
    })
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bg: "blue_100",
        color: "blue_900",
        text: "small",
        borderRadius: 4,
        overflow: "hidden",
        height: "2rem",
      }}
    >
      <Box
        as="img"
        src={photo}
        sx={{ width: "2rem", height: "2rem", bg: "blue_300" }}
      />
      <Box as="span" sx={{ px: "0.5rem" }}>
        {name}
      </Box>
      <Box
        as={X}
        sx={{ width: "1.5rem", height: "1.5rem", mr: "0.5rem" }}
        onClick={removeToken}
      />
    </Box>
  )
}

const initialState = [
  {
    id: "1",
    title: "Jeff",
    tokens: [
      { id: "12", name: "Jeff Daniels", photo: "https://i.pravatar.cc/72" },
    ],
  },
  {
    id: "2",
    title: "Hugh",
    tokens: [
      { id: "13", name: "Hugh Jackman", photo: "https://i.pravatar.cc/72" },
    ],
  },
  {
    id: "3",
    title: "Rachel",
    tokens: [
      { id: "14", name: "Rachel Evan Wood", photo: "https://i.pravatar.cc/72" },
    ],
  },
]

export function SelectCustomTokenUsage() {
  const [applicants, setApplicants] = useState(initialState)
  function handleChange(e) {
    if (!e.target.value.length) return setApplicants(initialState)
    setApplicants((prevState) =>
      prevState.filter((applicant) =>
        applicant.tokens.some((token) => token.name.includes(e.target.value))
      )
    )
  }
  return (
    <Container>
      <Select
        multi
        id="custom-token-example"
        onSelect={(e) => setApplicants(initialState)}
      >
        <SelectInput
          label="Multi Select"
          token={CustomToken}
          onChange={handleChange}
        />
        <SelectList>
          <Box
            sx={{
              px: "2rem",
              py: "1rem",
              text: "small",
              borderBottom: (theme) => `1px solid ${theme.colors.ui_500}`,
              color: "ui_700",
            }}
          >
            Applicants
          </Box>
          {applicants.map((applicant) => (
            <SelectItem
              key={applicant.id}
              id={applicant.id}
              tokens={applicant.tokens}
            >
              {applicant.title}
            </SelectItem>
          ))}
          <Box
            sx={{
              px: "2rem",
              py: "1rem",
              text: "small",
              color: "ui_700",
            }}
          >
            Can't find anything
          </Box>
        </SelectList>
      </Select>
    </Container>
  )
}
