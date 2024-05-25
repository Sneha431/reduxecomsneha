import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
} from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import { LuArrowDownToLine } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import Transactiontable from "./Components/Transactiontable";
import { TiArrowSortedDown } from "react-icons/ti";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <DashboardLayout w={{ xl: "100%", base: "67rem" }} maxW="100%">
      <Flex justifyContent={"end"}>
        <Button leftIcon={<LuArrowDownToLine />}>Export csv</Button>
      </Flex>
      <Card mt="3" p="4" borderRadius={"1rem"}>
        <HStack
          display={{ base: "flex", lg: "none" }}
          w="full"
          justifyContent={"space-between"}
        >
          <Menu justifyContent="flex-start" ml="12px">
            <MenuButton>
              {" "}
              <Button rightIcon={<TiArrowSortedDown />} colorScheme="gray">
                Menu
              </Button>
            </MenuButton>

            <MenuList>
              {tabs.map((tab) => (
                <MenuItem key={tab.name}>
                  <Text>{tab.name}</Text>
                  <Tag
                    borderRadius={"full"}
                    colorScheme="gray"
                    color="black.80"
                    mx="2"
                  >
                    {tab.count}
                  </Tag>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu justifyContent="flex-start" ml="12px">
            <MenuButton>
              <Button rightIcon={<TiArrowSortedDown />} colorScheme="gray">
                Sort
              </Button>
            </MenuButton>
            <MenuList>
              <MenuItem>Date & Time</MenuItem>
              <MenuItem>Amount</MenuItem>
              <MenuItem>Type</MenuItem>

              <MenuItem>Status</MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        <Tabs>
          <TabList display={{ base: "none", lg: "flex" }}>
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name}>
                  <Text>{tab.name}</Text>
                  <Tag
                    borderRadius={"full"}
                    colorScheme="gray"
                    color="black.80"
                    mx="2"
                  >
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <Flex justify={"flex-end"} w="full">
              <InputGroup maxW="300px" justifySelf={"end"}>
                <InputLeftElement pointerEvents="none" fontSize={"xl"}>
                  <CiSearch color="gray.300" />
                </InputLeftElement>
                <Input type="tel" placeholder="Search By ID" border={"none"} />
              </InputGroup>
            </Flex>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Transactiontable />
            </TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
            <TabPanel>4</TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
