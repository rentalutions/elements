import React, { useState } from "react"
import { Box, Container, Card, Flex } from "@rent_avail/core"
import { Button } from "@rent_avail/controls"
import { Dialog, DialogTarget, ConfirmationDialog } from "@rent_avail/dialog"
import { motion } from "framer-motion"
import { InlineFeedback } from "../src"

export function InlineTransunion() {
  const [loaded, setLoaded] = useState(false)
  return (
    <Container mt="4rem">
      <Card>
        <Box
          as="header"
          sx={{
            borderBottom: "1px solid",
            borderBottomColor: "ui_500",
            mb: "2rem",
            pb: "2rem",
          }}
        >
          <Box>Application Details</Box>
        </Box>
        <InlineFeedback
          steps={[
            "Checking Data",
            "Compiling Reports",
            "Verifying Identity",
            "Fetching Score",
          ]}
          onAnimationEnd={() => setLoaded(true)}
        />
        <Box sx={{ mt: 2 }}>Screening Reports</Box>
        {loaded && (
          <Box
            as={motion.section}
            initial={{ opacity: 0, y: "1rem" }}
            animate={{ opacity: 1, y: 0 }}
            sx={{
              display: "grid",
              gridTemplateColumns: ["1fr", "1fr", "repeat(3, 1fr)"],
              mt: "2rem",
              gap: "2rem",
            }}
          >
            <Box>
              <Box as="h3">720</Box>
              <Box as="h5">Credit Score</Box>
            </Box>
            <Box>
              <Box as="h3">0</Box>
              <Box as="h5">Criminal Records</Box>
            </Box>
            <Box>
              <Box as="h3">0</Box>
              <Box as="h5">Eviction Records</Box>
            </Box>
            <Box sx={{ gridColumn: "span 3", justifySelf: "end" }}>
              <Button variant="primary">submit reports</Button>
            </Box>
          </Box>
        )}
      </Card>
    </Container>
  )
}

// export function InlinePublishListing() {
//   const [open, setOpen] = useState(false)
//   const [loaded, setLoaded] = useState(false)
//   function handleToggle() {
//     setOpen(false)
//     setLoaded(false)
//   }
//   return (
//     <Box
//       sx={{
//         display: "grid",
//         gridTemplateColumns: "25rem auto",
//         gridTemplateRows: "15rem auto",
//         minHeight: "calc(100vh - 4rem)",
//       }}
//     >
//       <Box sx={{ gridRow: "span 2", bg: "brand.primary" }} />
//       <Box sx={{ bg: "brand.primary" }} />
//       <Box sx={{ bg: "background.secondary" }}>
//         <Container sx={{ mt: 4 }}>
//           <Flex sx={{ justifyContent: "end" }}>
//             <Dialog open={open} toggle={handleToggle} id="success-listing">
//               <DialogTarget>
//                 <Button onClick={(e) => setOpen(true)}>Publish Listing</Button>
//               </DialogTarget>
//               <ConfirmationDialog>
//                 <InlineFeedback
//                   steps={[
//                     "Optimizing Photos",
//                     "Connecting to Syndicates",
//                     "Updating Feed",
//                   ]}
//                   onAnimationEnd={() => setLoaded(true)}
//                 />
//                 {loaded && (
//                   <Box
//                     as={motion.div}
//                     initial={{ opacity: 0, y: "1rem" }}
//                     animate={{ opacity: 1, y: 0 }}
//                     sx={{ mt: 2 }}
//                   >
//                     <Box as="h3">Listing Published</Box>
//                     <Box sx={{ mt: 2 }}>
//                       Successfully published to 12 sites, it can take up to 4
//                       hours for your listing to appear on our partner sites.
//                     </Box>
//                   </Box>
//                 )}
//               </ConfirmationDialog>
//             </Dialog>
//           </Flex>
//         </Container>
//       </Box>
//     </Box>
//   )
// }
