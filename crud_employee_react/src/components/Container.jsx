import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
  Stack,
} from "@chakra-ui/react";
const Container = ({ children, path, msg }) => {
  return (
    <div className="max-w-8xl mx-auto">
      <div
        aria-label="breadcrumb"
        className="p-4 shadow-lg rounded-b-lg hover:cursor-pointer flex justify-between w-full mx-auto"
      >
        <div className="flex">
          <NavLink
            color="inherit"
            to="/"
            style={{ textDecoration: "none" }}
            className="hover:text-lg hover:tracking-wider duration-200"
          >
            Employee /
          </NavLink>
          <p className="text-blue-600 ml-3 capitalize"> {path}</p>
        </div>
        <NavLink color="inherit" to="/add" style={{ textDecoration: "none" }}>
          Add Employee
        </NavLink>
      </div>
      {msg && (
        <Stack className="">
          <Alert status="info">
            <AlertIcon style={{ height: "20px", width: "20px" }} />
            {msg}
          </Alert>
        </Stack>
      )}
      {children}
    </div>
  );
};

export default Container;
