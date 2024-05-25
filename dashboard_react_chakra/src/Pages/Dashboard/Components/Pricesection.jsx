import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../Chakra/Customcard";

import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { PiArrowUpRightBold } from "react-icons/pi";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
const Pricesection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];

  return (
    <CustomCard>
      <Flex alignItems="start" justifyContent={"space-between"}>
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
              <HStack fontWeight="medium" color="green.500" spacing="0">
                <Icon as={PiArrowUpRightBold} fontSize="sm" />
                <Text fontSize="sm">22%</Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<FaCirclePlus />} bg="purple.500">
            Buy
          </Button>
          <Button leftIcon={<FaCircleMinus />}>Sell</Button>
        </HStack>
      </Flex>

      <Tabs variant="">
        <Flex justify={"end"}>
          <TabList
            bg={"black.5"}
            p="3px"
            borderRadius={"6px"}
            fontSize="sm"
            gap="8px"
            h="9"
          >
            <Tab
              fontSize={"sm"}
              p="2"
              _selected={{ bg: "white", fontWeight: "bold" }}
              borderRadius={"6px"}
            >
              1H
            </Tab>
            <Tab
              fontSize={"sm"}
              p="2"
              _selected={{ bg: "white", fontWeight: "bold" }}
              borderRadius={"6px"}
            >
              1D
            </Tab>
            <Tab
              fontSize={"sm"}
              p="2"
              _selected={{ bg: "white", fontWeight: "bold" }}
              borderRadius={"6px"}
            >
              1W
            </Tab>
            <Tab
              fontSize={"sm"}
              p="2"
              _selected={{ bg: "white", fontWeight: "bold" }}
              borderRadius={"6px"}
            >
              1M
            </Tab>
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="/graph.svg" w="100%" mt="3rem" />
            <HStack justifyContent={"space-between"}>
              {timestamps.map((time) => (
                <Text key={time} color={"black.80"} fontSize={"sm"}>
                  {time}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>hh</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default Pricesection;
