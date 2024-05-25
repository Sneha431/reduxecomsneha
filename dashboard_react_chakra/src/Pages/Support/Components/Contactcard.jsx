import {
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const Contactcard = () => {
  return (
    <Card p="6" maxW={"550px"} flexGrow={"1"}>
      <Text fontWeight={"medium"} fontSize={"sm"} color={"p.black"}>
        You will receive response within 24 hours of time of submit.
      </Text>
      <Stack mt="6">
        <HStack>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="name" />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input type="text" placeholder="surname" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="message" />
        </FormControl>

        <HStack mt={6}>
          <Checkbox defaultChecked></Checkbox>{" "}
          <Flex fontSize={"sm"} color={"p.black"}>
            I agree with{" "}
            <Text color="p.purple" mx="1" fontWeight={"sm"}>
              {" "}
              Terms & Conditions.
            </Text>
          </Flex>
        </HStack>

        <FormControl mt="6">
          <Button isDisabled w="full" p="4" fontWeight={"medium"}>
            Send Message
          </Button>
          <Button
            colorScheme="gray"
            w="full"
            mt="2"
            p="4"
            fontWeight={"medium"}
          >
            Book a meeting
          </Button>
        </FormControl>
      </Stack>
    </Card>
  );
};

export default Contactcard;
