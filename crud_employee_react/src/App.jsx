import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEmp from "./components/AddEmp";
import Home from "./components/Home";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/add"
          element={
            <ChakraProvider>
              <AddEmp />
            </ChakraProvider>
          }
          exact
        />
      </Routes>
    </BrowserRouter>
  );
}
