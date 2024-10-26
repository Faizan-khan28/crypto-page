import { Box, Flex } from "@chakra-ui/react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";


export default function Dashboard () {
    return (
        <div>
          <Flex>
          <SideNav/>
          <Box flexGrow={1}>
          <TopNav/>
          </Box>
          </Flex>
        </div>
    )
}