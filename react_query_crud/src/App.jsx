import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  // Create a client
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dd",
      element: <div>hh</div>,
    },
  ]);
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <Heading>gg</Heading>
        </RouterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
