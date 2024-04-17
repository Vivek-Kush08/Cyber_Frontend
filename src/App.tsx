import { ChakraProvider } from "@chakra-ui/react";
import Simulation from "./component/Simulation";
import { useState } from "react";
import Login from "./component/Login";

export const App = () => {
  const [showPage, setShowPage] = useState<any>(true);

  const [value, setValue] = useState<any>();

  console.log("response in login", value);

  return (
    <ChakraProvider>
      {showPage === true && (
        <Login setShowPage={setShowPage} setResponse={setValue} />
      )}
      {showPage === false && <Simulation value={value} />}
    </ChakraProvider>
  );
};
