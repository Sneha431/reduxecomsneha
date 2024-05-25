import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Icon,
  Flex,
  Grid,
  Box,
  HStack,
  Text,
  VStack,
  Tag,
  Card,
  Stack,
  Heading,
  StackDivider,
  GridItem,
} from "@chakra-ui/react";
import { CardHeader, CardBody } from "@chakra-ui/react";
import { TiArrowSortedDown } from "react-icons/ti";
const Transactiontable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };
  return (
    <>
      <TableContainer display={{ base: "none", lg: "flex" }}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color={"black.60"} fontWeight={"500"}>
                ID
              </Th>
              <Th ccolor={"black.60"} fontWeight={"500"}>
                {" "}
                <Flex>
                  Date & Time{" "}
                  <Grid alignItems={"center"}>
                    <Icon as={TiArrowSortedDown} />
                  </Grid>
                </Flex>
              </Th>
              <Th color={"black.60"} fontWeight={"500"}>
                Type
              </Th>
              <Th color={"black.60"} fontWeight={"500"}>
                Amount
              </Th>
              <Th color={"black.60"} fontWeight={"500"}>
                Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((data) => (
              <Tr key={data.id}>
                <Td>
                  <Text fontSize={"sm"} fontWeight={"medium"}>
                    {" "}
                    {data.id}
                  </Text>
                </Td>
                <Td>
                  <VStack align={"flex-start"} spacing={"0"}>
                    <Text fontSize={"sm"} fontWeight={"medium"}>
                      {" "}
                      {data.date}{" "}
                    </Text>

                    <Text color="black.60" fontSize={"xs"}>
                      {" "}
                      {data.time}
                    </Text>
                  </VStack>
                </Td>
                <Td>
                  <VStack align={"flex-start"} spacing={"0"}>
                    <Text fontSize={"sm"} fontWeight={"medium"}>
                      {" "}
                      {data.type.name}
                    </Text>

                    <Text color="black.60" fontSize={"xs"}>
                      {data.type?.tag}
                    </Text>
                  </VStack>
                </Td>
                <Td>
                  <Text fontSize={"sm"} fontWeight={"medium"}>
                    {" "}
                    {data.amount}
                  </Text>
                </Td>
                <Td>
                  <Tag
                    bgColor={statusColor[data.status]}
                    color={"white"}
                    borderRadius={"full"}
                  >
                    {data.status}
                  </Tag>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Card display={{ base: "flex", lg: "none" }} align={"center"}>
        <CardHeader>
          <Heading size="md">Client Report</Heading>
        </CardHeader>

        <CardBody w="full">
          <HStack divider={<StackDivider />} spacing="4">
            <Grid
              gridTemplateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
              }}
              w="full"
              justifyContent={"space-between"}
              alignItems={"center"}
              gap="7"
            >
              {tableData.map((data) => (
                <Card key={data.id} w="full">
                  <CardBody
                    display={{ md: "block", xs: "flex", base: "flex" }}
                    justifyContent={"space-between"}
                  >
                    <GridItem>
                      <Stack
                        flexDirection={{ base: "row", md: "column" }}
                        justifyContent={"space-between"}
                        gap={{ base: "0", md: "2" }}
                      >
                        <Heading size="xs" textTransform="uppercase">
                          Date & Time
                        </Heading>
                        <Flex
                          justifyContent={"space-between"}
                          flexDirection={{ base: "row", md: "column" }}
                          gap={{ base: "3", md: "0" }}
                        >
                          <Text fontSize={"sm"} fontWeight={"medium"}>
                            {" "}
                            {data.date}{" "}
                          </Text>

                          <Text color="black.60" fontSize={"xs"}>
                            {" "}
                            {data.time}
                          </Text>
                        </Flex>
                      </Stack>
                    </GridItem>
                    <GridItem>
                      <Stack
                        flexDirection={{ base: "row", md: "column" }}
                        justifyContent={"space-between"}
                        gap={{ base: "0", md: "2" }}
                        mt="4"
                      >
                        <Heading size="xs" textTransform="uppercase">
                          Type
                        </Heading>
                        <Flex
                          justifyContent={"space-between"}
                          flexDirection={{ base: "row", md: "column" }}
                          gap={{ base: "3", md: "0" }}
                        >
                          <Text fontSize={"sm"} fontWeight={"medium"}>
                            {data.type.name}
                          </Text>
                          <Text color="black.60" fontSize={"xs"}>
                            {data.type?.tag}
                          </Text>
                        </Flex>
                      </Stack>
                    </GridItem>
                    <GridItem>
                      <Stack
                        flexDirection={{ base: "row", md: "column" }}
                        justifyContent={"space-between"}
                        mt="4"
                      >
                        <Heading size="xs" textTransform="uppercase">
                          Amount
                        </Heading>
                        <Text fontSize={"sm"} fontWeight={"medium"}>
                          {" "}
                          {data.amount}
                        </Text>
                      </Stack>
                    </GridItem>

                    <GridItem>
                      {" "}
                      <Stack
                        flexDirection={{ base: "row", md: "column" }}
                        justifyContent={"space-between"}
                        mt="4"
                      >
                        {" "}
                        <Heading size="xs" textTransform="uppercase">
                          Status
                        </Heading>
                        <Tag
                          bgColor={statusColor[data.status]}
                          color={"white"}
                          borderRadius={"full"}
                          w="fit-content"
                        >
                          {data.status}
                        </Tag>
                      </Stack>
                    </GridItem>
                  </CardBody>
                </Card>
              ))}
            </Grid>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default Transactiontable;
