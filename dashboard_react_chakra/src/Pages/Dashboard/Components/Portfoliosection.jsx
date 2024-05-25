import { Box, Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { MdError } from "react-icons/md";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { LuArrowDownToLine } from "react-icons/lu";
import { LuArrowUpToLine } from "react-icons/lu";
const Portfoliosection = () => {
  return (
    <HStack
      bg="white"
      borderRadius="xl"
      p="6"
      flexDir={{ base: "column", xl: "row" }}
      align="flex-start"
      spacing={{
        base: 4,
        xl: 0,
      }}
      justifyContent={{ base: "center", xl: "space-between" }}

    >
      <HStack
        flexDir={{ base: "column", xl: "row" }}
        align="flex-start"
        spacing={{
          base: 0,
          xl: 16,
        }}
      >
        <Stack align="flex-start">
          <HStack pos="relative">
            <Text fontSize="sm" color="p.black" mr="4">
              Total Portfolio Value
            </Text>
            <Box pos="absolute" ml="7.5rem">
              <Popover>
                <PopoverTrigger>
                  <Button
                    bg="transparent"
                    _hover={{ bg: "transparent", border: "none" }}
                  >
                    <Icon as={MdError} color="black.80" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader fontSize="xl">Confirmation!</PopoverHeader>
                  <PopoverBody>
                    Are you sure you want to have that milkshake?
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          </HStack>

          <Text color="p.black" textStyle="h2" fontWeight="medium">
            ₹ 112,312.24
          </Text>
        </Stack>
        <Stack>
          <HStack>
            <Text fontSize="sm" color="p.black">
              Wallet Balances
            </Text>
          </HStack>
          <HStack justify="space-between">
            <HStack>
              <Text color="p.black" textStyle="h2" fontWeight="medium">
                ₹222,312.24
              </Text>
              <Tag bg="black.5" fontWeight="medium">
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text color="p.black" textStyle="h2">
                12,000
              </Text>
              <Tag bg="black.5" fontWeight="medium">
                INR
              </Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button leftIcon={<LuArrowDownToLine />} bg="purple.500">
          Deposit
        </Button>
        <Button leftIcon={<LuArrowUpToLine />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default Portfoliosection;
