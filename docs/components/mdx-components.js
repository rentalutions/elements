import * as react from "react"
import { Heading, Text } from "@rent_avail/typography"
import {
  Box,
  Card,
  Container,
  Stack,
  Grid,
  Col,
  Flex,
} from "@rent_avail/layout"
import * as Icon from "react-feather"
import { Avatar } from "@rent_avail/avatar"
import { Button, Checkbox, Radio, Switch } from "@rent_avail/controls"
import {
  Dialog,
  DialogTarget,
  DialogHeader,
  ConfirmationDialog,
  FullscreenDialog,
} from "@rent_avail/dialog"
import Input from "@rent_avail/input"
import { Menu, MenuTarget, MenuList, MenuItem } from "@rent_avail/menu"
import { FixedProgress, FluidProgress } from "@rent_avail/progress"
import { Select, SelectInput, SelectList, SelectItem } from "@rent_avail/select"
import { FullscreenFeedback, InlineFeedback } from "@rent_avail/feedback"
import { Tooltip, TooltipContent, TooltipTarget } from "@rent_avail/tooltip"
import {
  Autocomplete,
  useAutocomplete,
  AutocompleteProvider,
} from "@rent_avail/autocomplete"
import Tag from "@rent_avail/tag"
import CodeBlock from "components/code-block"
import * as motion from "framer-motion"

function Figure({ src, children }) {
  return (
    <Box as="figure" sx={{ my: "4rem" }}>
      <Box as="img" src={src} sx={{ maxWidth: "100%", display: "block" }} />
      <Box
        as="figcaption"
        sx={{
          bg: "ui_300",
          mt: 0,
          p: "1rem",
          fontSize: "small",
          color: "ui_700",
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default {
  h1: (props) => <Heading {...props} as="h1" mt="4rem" mb="2rem" />,
  h2: (props) => <Heading {...props} as="h2" my="2rem" />,
  h3: (props) => <Heading {...props} as="h3" mt="2rem" mb="1rem" />,
  h4: (props) => <Heading {...props} as="h4" mt="2rem" mb="0.5rem" />,
  h5: (props) => <Heading {...props} as="h5" mt="1rem" />,
  p: (props) => <Text {...props} mt="1rem" />,
  inlineCode: (props) => (
    <Box
      {...props}
      as="code"
      p="0.25rem"
      bg="blue_100"
      color="blue_700"
      borderRadius="0.25rem"
      style={{ fontSize: "1.334rem" }}
    />
  ),
  table: (props) => <Box {...props} as="table" width="100%" />,
  th: (props) => (
    <Box {...props} as="th" sx={{ pr: "1rem", textAlign: "left" }} />
  ),
  td: (props) => (
    <Box
      {...props}
      as="td"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderBottomColor="ui_300"
      py="1rem"
      pr="1rem"
    />
  ),
  a: (props) => (
    <Box {...props} as="a" className="link" sx={{ color: "inherit" }} />
  ),
  img: (props) => (
    <Box {...props} as="img" sx={{ maxWidth: "100%", my: "4rem" }} />
  ),
  code: (props) => <Box {...props} as="code" />,
  pre: (props) => (
    <CodeBlock
      {...props}
      scope={{
        ...react,
        ...motion,
        Icon,
        Text,
        Heading,
        Box,
        Card,
        Container,
        Stack,
        Grid,
        Col,
        Flex,
        Button,
        Checkbox,
        Radio,
        Switch,
        Avatar,
        Dialog,
        DialogTarget,
        DialogHeader,
        ConfirmationDialog,
        FullscreenDialog,
        Input,
        Menu,
        MenuTarget,
        MenuList,
        MenuItem,
        FixedProgress,
        FluidProgress,
        Select,
        SelectInput,
        SelectList,
        SelectItem,
        FullscreenFeedback,
        InlineFeedback,
        Tooltip,
        TooltipContent,
        TooltipTarget,
        Tag,
        Autocomplete,
        useAutocomplete,
        AutocompleteProvider,
      }}
    />
  ),
  ul: (props) => <Box {...props} as="ul" sx={{ ml: "1.75rem" }} />,
  ol: (props) => <Box {...props} as="ol" sx={{ ml: "1.75rem" }} />,
  li: (props) => <Box {...props} as="li" sx={{ mt: "1rem" }} />,
  hr: (props) => (
    <Box
      {...props}
      as="hr"
      sx={{ borderColor: "ui_500", borderStyle: "solid", my: "2rem" }}
    />
  ),
  Figure,
}
