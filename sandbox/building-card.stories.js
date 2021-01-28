import { Grid, Col, Box, Card, Container } from "@rent_avail/layout"
import { Avatar, AvatarGroup } from "@rent_avail/avatar"
import {
  Edit,
  Key,
  UserCheck,
  FileText,
  DollarSign,
  Tool,
  Plus,
} from "react-feather"
import redfinLogo from "./assets/redfin.svg"

export default { title: "Sandbox/Building Card" }

const props = {
  building: {
    propertyType: "Multi-Family",
    streetAddress: "2024 N California Ave",
    locality: "Chicago",
    state: "IL",
    zip: "60647",
    priceEstimate: 125_100_00,
  },
  units: [
    {
      id: "129310923",
      title: "Unit 1",
      lease: null,
      onMarket: false,
    },
    {
      id: "123123123",
      title: "Unit 2",
      lease: {
        rentAmount: 200000,
        startDate: new Date("01-01-1991"),
        endDate: new Date("01-31-1992"),
        tenants: [{ initials: "PK" }, { initials: "PS" }, { initials: "ND" }],
      },
      onMarket: false,
    },
  ],
}

function parseMoney(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })
}

export function BuildingCard() {
  const { building, units } = props
  return (
    <Box
      sx={{
        bg: "ui_300",
        minHeight: "100vh",
        overflow: "auto",
      }}
    >
      <Container my="4rem">
        <Card sx={{ p: 0 }}>
          <Grid as="header" sx={{ display: "grid", p: "2rem" }}>
            <Col span={5} as="p" sx={{ text: ["small"], color: "blue_500" }}>
              {building.propertyType}
            </Col>
            <Col span={7} sx={{ justifySelf: "right" }}>
              <Action icon={Edit}>Edit</Action>
            </Col>
            <Col span={8}>
              <Box as="h3">{building.streetAddress}</Box>
              <Box as="p">
                {building.locality}, {building.state} {building.zip}
              </Box>
            </Col>
            <Col
              span={4}
              sx={{
                textAlign: "right",
                justifySelf: ["end"],
                alignSelf: ["end"],
              }}
            >
              <Box>{parseMoney(building.priceEstimate)}</Box>
              <Box as="img" src={redfinLogo} sx={{ height: "2rem" }} />
            </Col>
          </Grid>
          <Grid sx={{ gap: 0 }}>
            {units.map((unit) => (
              <BuildingUnit key={unit.id} unit={unit} />
            ))}
          </Grid>
        </Card>
      </Container>
    </Box>
  )
}

function Action({ icon, children, sx = {} }) {
  if (!icon) throw Error("Must pass an icon to an action component.")
  return (
    <Box
      tabIndex="0"
      role="button"
      sx={{
        fontWeight: "black",
        display: "flex",
        gap: "0.5rem",
        alignItems: "center",
        cursor: "pointer",
        transition: "300ms",
        outline: "none",
        color: "blue_500",
        "&:hover, &:focus": {
          opacity: 0.5,
        },
        ...sx,
      }}
    >
      <Box as={icon} className="action__icon" sx={{ opacity: 0.75 }} />
      <Box>{children}</Box>
    </Box>
  )
}

function BuildingUnit({ unit: { title, lease, onMarket } }) {
  const buildLeaseCopy = (lease) => {
    if (lease) {
      const rentAmount = parseMoney(lease.rentAmount)
      const endDate = lease.endDate.toLocaleDateString("en-us", {
        dateStyle: "medium",
      })
      return (
        <span>
          <b>{rentAmount}/mo</b> until <b>{endDate}</b>
        </span>
      )
    }
  }
  return (
    <Col
      as={Grid}
      sx={{
        p: "2rem",
        borderTop: "1px solid transparent",
        borderColor: "ui_500",
      }}
    >
      <Col span={[4]} sx={{ display: "grid", alignItems: "stretch" }}>
        <Box as="h4">{title}</Box>
        <Box>{lease ? buildLeaseCopy(lease) : "No Lease"}</Box>
      </Col>
      <Col as={AvatarGroup} span={[8]} sx={{ justifySelf: "end" }}>
        {lease?.tenants.length ? (
          lease.tenants.map(({ initials }) => (
            <Avatar size="small" initials={initials} />
          ))
        ) : (
          <Avatar size="small" initials={<Plus />} />
        )}
      </Col>
      <Col
        span={[12]}
        sx={{
          justifySelf: "end",
          alignItems: "center",
          display: "flex",
          gap: "3rem",
        }}
      >
        <Action icon={Key}>Listing</Action>
        <Action icon={UserCheck}>Screening</Action>
        <Action icon={FileText}>Leases</Action>
        <Action icon={DollarSign}>Payments</Action>
        <Action icon={Tool}>Maintenance</Action>
      </Col>
    </Col>
  )
}
