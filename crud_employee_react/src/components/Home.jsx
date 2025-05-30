import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
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
import { HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Switch } from "@mui/material";
import Container from "./Container";

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
  const [searchtoggle, setsearchtoggle] = useState(false);
  const badgeref = useRef(null);
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
      setmsg(`Sorted by ${filterOrSortValue} Sucessfully`);
    } else if (optype === "filterbyactiveinactive") {
      url = `${serverEndpoint}users?status=${filterOrSortValue}&_start=${start}&_end=${end}&_order=asc`;
      setOperation("filterbyactiveinactive");
      setmsg(`Sorted by ${filterOrSortValue} Sucessfully`);
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
    setStart(start);
    setEnd(end);
    setCurrentPage(newPage);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      const start = (newPage - 1) * pageLimit;
      const end = start + pageLimit;
      loadUserData(start, end, newPage, operation, filterOrSortValue);
      setStart(start);
      setEnd(end);
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    loadUserData(0, pageLimit, 1);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setsearchtoggle(true);
    loadUserData(0, pageLimit, 1, "search", value);
    //  loadUserData(start, end, currentPage, "search", value)
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSelectVal(value);
    //  loadUserData(0, pageLimit, 1, "sortbyrowname", value);
    loadUserData(start, end, currentPage, "sortbyrowname", value);
  };

  const handleFilterStatus = (statusVal) => {
    loadUserData(0, pageLimit, 1, "filterbyactiveinactive", statusVal);
    // loadUserData(start, end, currentPage, "filterbyactiveinactive", statusVal)
  };

  const handleReset = (e) => {
    e.preventDefault();
    loadUserData(0, pageLimit, 1);
    setmsg("Reset Sucessfully");
    setValue("");
  };

  const handeldelete = async (id) => {
    const responsedata = await axios
      .delete(`${serverEndpoint}users/${id}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setmsg("Deleted Sucessfully");
        loadUserData(start, end, currentPage);
      })
      .catch((error) => console.log(error));
  };
  const [msg, setmsg] = useState("");
  const handleStatusmode = async (mode, editid) => {
    const response = await axios.get(`${serverEndpoint}users/${editid}`);

    let formdata = {
      name: response.data.name,
      email: response.data.email,
      address: response.data.address,
      phone: response.data.phone,

      status: mode.toString(),
    };
    await axios
      .put(`${serverEndpoint}users/${editid}`, formdata, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        setmsg(`Status changed to ${mode} for id ${editid}`);
        if (!searchtoggle) {
          loadUserData(start, end, currentPage);
        } else {
          let statemode = document.getElementById("badge").innerHTML;
          statemode === "active"
            ? (document.getElementById("badge").innerHTML = "inactive")
            : (document.getElementById("badge").innerHTML = "active");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container path="List" msg={msg}>
      <HStack className="w-full md:ml-auto mx-auto py-2 md:py-0 max-w-md md:max-w-xl gap-0">
        <input
          type="search"
          placeholder="Search here.."
          className="flex-grow p-[5px] outline-none border border-slate-400 rounded-l-lg rounded-tr-none rounded-br-none"
          onChange={(e) => setValue(e.target.value)}
          value={value}
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
            <tr className="">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Full Address</th>
              <th scope="col" colSpan={2}>
                Status
              </th>
              <th scope="col" colSpan={3}>
                Action
              </th>
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
                    {`${
                      typeof item.address === "object"
                        ? `${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`
                        : item.address
                    }`}
                  </td>
                  <td colSpan={3}>
                    <MDBBadge color="success" light className="p-2">
                      <span ref={badgeref} id="badge">
                        {item.status}
                      </span>
                    </MDBBadge>
                    <Switch
                      defaultChecked={item.status === "active"}
                      className="flex-1"
                      onChange={() =>
                        handleStatusmode(
                          item.status == "active" ? "inactive" : "active",
                          item.id
                        )
                      }
                    />
                  </td>
                  <td className="" colSpan={3}>
                    <span className="flex gap-2">
                      <NavLink
                        to={`/edit?id=${item.id}`}
                        className="btn btn-success p-2"
                        data-mdb-ripple-init
                      >
                        Edit
                      </NavLink>
                      <button
                        type="button"
                        className="btn btn-danger p-2"
                        data-mdb-ripple-init
                        onClick={() => handeldelete(item.id)}
                      >
                        Delete
                      </button>
                    </span>
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
    </Container>
  );
};

export default Home;
