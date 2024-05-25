import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from "@chakra-ui/react"

import Sidenav from "./Sidenav"


const SideDrawer = ({ onClose, isOpen }) => {


  return (
    <Box>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}

      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />


          <DrawerBody bg="#F3F3F7">

            <Sidenav />
          </DrawerBody>


        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default SideDrawer
