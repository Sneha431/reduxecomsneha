
import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
const Sidenav = () => {


  const navlinks = [
    {
      text: "Dashboard",
      link: "/",
      icon: RxDashboard
    },
    {
      text: "Transaction",
      link: "/transaction",
      icon: GrTransaction
    }
  ]
  return (
    <Stack boxShadow={{ base: "none", lg: "lg" }} maxW={{ base: "full", lg: "16rem" }} w={{ base: "full", lg: "16rem" }} h="100vh" bg="#F3F3F7" justify="space-between">
      <Box>
        <Heading as="h1" textTransform="uppercase" textAlign="center" fontSize="20px" color="#5F00D9" pt="54px" h="18px" w="182px">@snehagos</Heading>

        <Box mt="6" mx="4" gap="3">
          {navlinks.map((nav) =>
            <Link to={`${nav.link}`} key={nav.text}>
              <HStack px="4" py="4" color="#5A5959" _hover={{ bgColor: "#EEEEF4", cursor: "pointer", color: "#171717" }} borderRadius="10px">
                <Icon as={nav.icon} fontSize="16px" />
                <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
              </HStack>
            </Link>


          )}
        </Box>
      </Box>

      <Box mb="6" mx="4" gap="3">
        <Link to={"/support"}>
          <HStack px="4" py="4" color="#5A5959" _hover={{ bgColor: "#EEEEF4", cursor: "pointer", color: "#171717" }} borderRadius="10px" flex="flex-end">
            <Icon as={BiSupport} fontSize="16px" />
            <Text fontSize="14px" fontWeight="medium">Support</Text>

          </HStack>
        </Link>
      </Box>
    </Stack >
  )
}

export default Sidenav
