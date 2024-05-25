import {
  Flex,
  HStack,
  Stack,
  Grid,
  GridItem,
  Text,
  Icon,
  Card,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Checkbox,
  Button,
  Box,
} from "@chakra-ui/react";
import { IoMail } from "react-icons/io5";

const Supportcard = ({ leftcomponent, icon, title, text }) => {
  return (
    <Flex
      m="auto"
      justify={{ base: "space-between", lg: "space-evenly" }}
      gap={{ base: "3", lg: "6" }}
      flexDir={{ base: "column", lg: "row" }}
      alignItems="flex-start"
    >
      <Stack maxW={"386px"}>
        <Icon as={IoMail} color={"purple.500"} boxSize={"24px"} />
        <Text textStyle={"h1"} fontWeight={"medium"}>
          {title}
        </Text>
        <Text fontSize={"sm"} color="black.60">
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
        {leftcomponent}
      </Box>
    </Flex>
  );
};

export default Supportcard;
