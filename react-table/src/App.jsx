import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Spinner,
  Table,
  Text,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
} from "@chakra-ui/react";
import { useTable, useSortBy } from "react-table";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

const url = import.meta.env.VITE_APP_API_URL;

const fetchdata = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

const tableColumn = [
  {
    Header: "Not yet changed",
    columns: [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "TITLE",
        accessor: "title",
        Cell: ({ row }) => (
          <Box style={{ whiteSpace: "normal" }}>{row.values.title}</Box>
        ),
      },
      {
        Header: "DESCRIPTION",
        accessor: "description",
        Cell: ({ row }) => (
          <Box style={{ whiteSpace: "normal", wordBreak: "normal" }}>
            {row.values.description}
          </Box>
        ),
      },
      {
        Header: "CATEGORY",
        accessor: "category",
      },
    ],
  },
  {
    Header: "Changed",
    columns: [
      {
        Header: "PRICE",
        accessor: "price",
        Cell: ({ row }) => `$${row.values.price}`,
      },

      {
        Header: "IMAGE",
        accessor: "image",
        Cell: ({ row }) => <Image src={row.values.image} h={100} />,
      },
      {
        Header: "ACTION",
        accessor: "action",
        Cell: ({ row }) => <Button onClick={() => alert()}>Show</Button>,
      },
    ],
  },
];

function App() {
  const [products, setProducts] = useState(fetchdata);
  const columns = useMemo(() => tableColumn, []);
  const data = useMemo(() => products, [products]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: columns,
        data: data,
      },
      useSortBy
    );

  useEffect(() => {
    const getdata = async () => {
      try {
        const { data } = await axios.get(url);
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);

  if (products.length === 0) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  return (
    <Box>
      <Heading>React Table</Heading>
      <TableContainer>
        <Table
          {...getTableProps()}
          variant="striped"
          colorScheme="teal"
          // __css={{
          //   tableLayout: "fixed",
          //   width: "full",
          // }}
        >
          <Thead>
            {headerGroups.map((headerGroup, n) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={n}>
                {headerGroup.headers.map((column, i) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={i}
                  >
                    <Flex gap={2}>
                      <Text>{column.render("Header")}</Text>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <BiDownArrow ml={2} />
                        ) : (
                          <BiUpArrow ml={2} />
                        )
                      ) : (
                        ""
                      )}
                    </Flex>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()} key={i}>
                  {row.cells.map((cell, j) => (
                    <Td {...cell.getCellProps()} key={j}>
                      <Text>{cell.render("Cell")}</Text>
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default App;
