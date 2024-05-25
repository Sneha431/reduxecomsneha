import { useEffect, useMemo, useState } from "react";

import axios from "axios";
import {
  Button,
  Center,
  Heading,
  Image,
  Spinner,
  Table,
  Text,
} from "@chakra-ui/react";
import { useTable } from "react-table";
import {
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

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
    Header: "Product List",
    columns: [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "TITLE",
        accessor: "title",
      },
      {
        Header: "PRICE",
        accessor: "price",
        Cell: ({ row }) => `$ ${row.values.price}`,
      },
      {
        Header: "DESCRIPTION",
        accessor: "description",
      },
      {
        Header: "CATEGORY",
        accessor: "category",
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
    useTable({
      columns: columns,
      data: data,
    });

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
    <Heading>
      React Table
      <TableContainer>
        <Table {...getTableProps()} variant="striped" colorScheme="teal">
          <Thead>
            {headerGroups.map((headerGroup, n) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={n}>
                {headerGroup.headers.map((column, i) => (
                  <Th {...column.getHeaderProps()} key={i}>
                    <Text>{column.render("Header")}</Text>
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
                  {row.cells.map((cell, i) => (
                    <Td {...cell.getCellProps()} key={i}>
                      <Text>{cell.render("Cell")}</Text>
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Heading>
  );
}

export default App;
