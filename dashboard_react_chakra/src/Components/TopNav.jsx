import {
  Container,
  Flex,
  Box,
  Text,
  Heading,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { PiUserCircleLight } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
const TopNav = ({ onOpen, title }) => {
  return (
    <Box px="4" bg="white" ml="2">
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
        <Button display={{ base: "flex", lg: "none" }}>
          <Icon as={FaBars} onClick={onOpen} />
        </Button>
        <Text fontSize="28px" px="6" font="heading">
          {title}
        </Text>
        {/* <Heading>hhh</Heading> */}
        <Menu justifyContent="flex-end" ml="12px">
          <MenuButton>
            <Icon as={PiUserCircleLight} fontSize="44px" />
          </MenuButton>
          <MenuList>
            <Link to="/">
              <MenuItem>Logout</MenuItem>
            </Link>
            <Link to="/support">
              <MenuItem>Support</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
