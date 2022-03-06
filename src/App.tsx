import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route } from "react-router-dom";

import { thema } from "./thema/thema";
import { Router } from "./route/Router";

export default function App() {
  return (
    <>
      <ChakraProvider theme={thema}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}
