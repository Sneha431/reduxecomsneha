import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CustomCard } from "../../../Chakra/Customcard";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa6";
import { Fragment } from "react";

const Transaction = () => {
  const transactions = [
    {
      id: "1",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC  Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h="full">

      <Text fontSize={"medium"} color={"black.80"} mb="6">
        Recent Transactions
      </Text>

      <Stack spacing={"4"}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider bgColor={"black.8"} />}
            <Flex gap="4">
              <Grid boxSize={"10"} borderRadius="full" bg="black.5" placeItems={"center"}>
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justifyContent={"space-between"} w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6" color={"black.80"}>{transaction.text}</Text>
                  <Text fontSize={"sm"} color={"black.40"}>{transaction.timestamp}</Text>
                </Stack>
                <Text>{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>

      <Button w="full" colorScheme="gray" mt="8" >View All</Button>






    </CustomCard>
  );
};

export default Transaction;
