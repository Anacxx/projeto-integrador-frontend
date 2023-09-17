import React from "react";
import { Button } from "@chakra-ui/react";
const HeaderButton = ({ children,onClick }) => {

  return (
    <Button colorScheme="blue" variant="link" textDecoration="none" onClick={onClick}>
      {children}
    </Button>
  );
};
export default HeaderButton;