import { Box, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList, Button} from "@chakra-ui/react";

import { FaUserCircle } from "react-icons/fa";

export default function TopNav() {
  return (
    <Box  px="4" bg="white" boxShadow={"xl"}>
      <HStack maxW="60rem" h={"16"} justify="space-between" mx="auto" >
        <Heading  fontWeight="medium" fontSize="28px">Dashboard</Heading>
        <Menu>
         <MenuButton as={Button} bg={"white"}>
           <Icon as={FaUserCircle}   fontSize="24px" />
          </MenuButton>   
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Login</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}
