import {Heading, HStack, Icon, Stack, Text, Box} from "@chakra-ui/react"
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

export default function SideNav () {

  const navLinks  = [ 
    {
    icon: RxDashboard,
    text: "Dashboard",
    link: "/",
   },

   {
    icon: BsArrowDownUp,
    text: "Transactions",
    link: "/"
   }
 ] 


    return (
       <Stack justifyContent={"space-between"} boxShadow="lg" w={"232px"} h="100vh">
          <Box >
          <Heading fontSize="25px"pl="4" pt="50px" as="h1">FaizanXCrypto</Heading>
        <Box>
        {
          navLinks.map((nav) => (
            <HStack mt="3" pl="4" key={nav.text} _hover={{ bg: "#F3F3F7", color: "#171717"}} borderRadius={"10px"} color={"#797E82"}>
                <Icon fontSize="18px" as={nav.icon} ></Icon>
                <Text fontSize="18px" cursor="pointer"  pt={"2"}  pb={"2"} >{nav.text}</Text>
            </HStack>
          ))
        }
       </Box>
          </Box>
       
         <HStack mt="3" mb={"8"} pl="4" _hover={{ bg: "#F3F3F7", color: "#171717"}}  borderRadius={"10px"} color={"#797E82"}>
            <Icon fontSize="18px" as={BiSupport} ></Icon>
            <Text fontSize="18px" cursor="pointer"  pt={"2"}  pb={"2"} >Support</Text>
          </HStack>
       </Stack>
    )
}