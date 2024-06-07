import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBBtn,
} from "mdb-react-ui-kit";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBBtnGroup,
  MDBBadge,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { BiSearch } from "react-icons/bi";
import { HStack, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";

const Home = () => {
  const [user, setUser] = useState([]);
  const [usertotal, setUsertotal] = useState();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5); // Ensure end matches the pageLimit
  const [value, setValue] = useState("");
  const [operation, setOperation] = useState("");
  const [selectVal, setSelectVal] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit] = useState(5);
  const [filterOrSortValue, setFilterOrSortValue] = useState("");
  const sortOptions = ["name", "status", "email", "address", "phone"];
  const serverEndpoint = import.meta.env.VITE_APP_SERVER_ENDPOINT;

  useEffect(() => {
    const getuser = async () => {
      const response = await axios.get(`${serverEndpoint}users`);
      console.log(response.data.length);
      setUsertotal(response.data.length);
    };
    getuser();
  }, []);

  const loadUserData = async (
    start,
    end,
    page,
    optype = null,
    filterOrSortValue = null
  ) => {
    let url = `${serverEndpoint}users?_start=${start}&_end=${end}`;
    if (optype === "search") {
      url = `${serverEndpoint}users?name=${value}&_start=${start}&_end=${end}`;
      setOperation("search");
    } else if (optype === "sortbyrowname") {
      url = `${serverEndpoint}users?_sort=${filterOrSortValue}&_start=${start}&_end=${end}&_order=asc`;
      setOperation("sortbyrowname");
      setFilterOrSortValue(filterOrSortValue);
    } else if (optype === "filterbyactiveinactive") {
      url = `${serverEndpoint}users?status=${filterOrSortValue}&_start=${start}&_end=${end}&_order=asc`;
      setOperation("filterbyactiveinactive");
      setFilterOrSortValue(filterOrSortValue);
    }
    try {
      const response = await axios.get(url);
      setUser(response.data);

      setCurrentPage(page);
      setValue("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    const totalItems = usertotal;
    console.log(totalItems);
    if (currentPage >= Math.ceil(totalItems / pageLimit)) return;
    const newPage = currentPage + 1;
    const start = (newPage - 1) * pageLimit;
    const end = start + pageLimit;
    loadUserData(start, end, newPage, operation, filterOrSortValue);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      const start = (newPage - 1) * pageLimit;
      const end = start + pageLimit;
      loadUserData(start, end, newPage, operation, filterOrSortValue);
    }
  };

  useEffect(() => {
    loadUserData(0, pageLimit, 1);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    loadUserData(0, pageLimit, 1, "search", value);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSelectVal(value);
    loadUserData(0, pageLimit, 1, "sortbyrowname", value);
  };

  const handleFilterStatus = (statusVal) => {
    loadUserData(0, pageLimit, 1, "filterbyactiveinactive", statusVal);
  };

  const handleReset = (e) => {
    e.preventDefault();
    loadUserData(0, pageLimit, 1);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Breadcrumbs
        aria-label="breadcrumb"
        className="w-full p-4 shadow-lg rounded-b-lg hover:cursor-pointer"
      >
        <Link
          color="inherit"
          to="/"
          style={{ textDecoration: "none" }}
          className="hover:text-lg hover:tracking-wider hover:translate-x-7 hover:scale-50 duration-200"
        >
          Employee
        </Link>
        <Typography className="text-blue-600">Lists</Typography>
      </Breadcrumbs>
      <HStack className="w-full md:ml-auto mx-auto py-2 md:py-0 max-w-md md:max-w-xl gap-0">
        <input
          type="search"
          placeholder="Search here.."
          className="flex-grow p-[5px] outline-none border border-slate-400 rounded-l-lg rounded-tr-none rounded-br-none"
          onChange={(e) => setValue(e.target.value)}
        />
        <MDBBtnGroup className="flex-1">
          <MDBBtn
            type="submit"
            color="dark"
            className="py-2 px-4 text-sm"
            onClick={handleSearch}
          >
            Search{" "}
            <BiSearch className="absolute top-[12px] left-[77px]" size={12} />
          </MDBBtn>
          <MDBBtn onClick={handleReset} color="info">
            Reset
          </MDBBtn>
        </MDBBtnGroup>
      </HStack>
      <MDBContainer className="my-2">
        <MDBTable striped responsive>
          <MDBTableHead dark>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Full Address</th>
              <th scope="col">Status</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {user && user.length > 0 ? (
              user.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    {item.address?.street}, {item.address?.suite},{" "}
                    {item.address?.city}, {item.address?.zipcode}
                  </td>
                  <td>
                    <MDBBadge color="success" light className="p-2">
                      {item.status}
                    </MDBBadge>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} align="center">
                  No data found
                </td>
              </tr>
            )}
          </MDBTableBody>
        </MDBTable>
        <MDBRow>
          <MDBPagination className="mb-0">
            <MDBPaginationItem>
              <MDBBtn onClick={handlePrevious} disabled={currentPage === 1}>
                Previous
              </MDBBtn>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink>{currentPage}</MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBBtn onClick={handleNext}>Next</MDBBtn>
            </MDBPaginationItem>
          </MDBPagination>
        </MDBRow>
        <MDBRow>
          <MDBCol size={8} className="flex w-[70px] gap-2">
            Sort by:{" "}
            <select
              placeholder="Select option"
              onChange={handleSort}
              value={selectVal}
              data-selected={selectVal}
              className="h-[25px]"
            >
              {sortOptions.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </MDBCol>
          <MDBCol size={4} className="flex flex-col">
            Filter By Status{" "}
            <MDBBtnGroup className="w-[200px] gap-2">
              <MDBBtn
                type="button"
                color="success"
                className="py-2 px-4 text-sm"
                onClick={() => handleFilterStatus("active")}
              >
                Active
              </MDBBtn>
              <MDBBtn
                type="button"
                color="danger"
                className="py-2 px-4 text-sm"
                onClick={() => handleFilterStatus("inactive")}
              >
                Inactive
              </MDBBtn>
            </MDBBtnGroup>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Home;
