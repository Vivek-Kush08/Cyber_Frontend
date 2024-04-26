import { ChakraProvider } from "@chakra-ui/react";
import Simulation from "./component/Simulation";
import { useState } from "react";
import Login from "./component/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./component/Admin";

export const App = () => {
  const [showPage, setShowPage] = useState(true);
  const [value, setValue] = useState();


  console.log("response in login", value);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              showPage ? (
                <Login setShowPage={setShowPage} setResponse={setValue} />
              ) : (
                <Simulation value={value} />
              )
            }
          />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
