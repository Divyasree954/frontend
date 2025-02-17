import { Box, Flex, Text } from "@chakra-ui/react";
  import { BsMinecartLoaded } from "react-icons/bs";
import { UserContext } from "../../Contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";



function Cart({num}){

  useEffect(() => {
    console.log(num)
  })
   
  

    return (

      <Flex alignItems="center"  >
        <Box display="flex" alignItems="center" h="30px">
          <BsMinecartLoaded size="20px" />
          <Box h="100%">
            <Text
              top="0px"
              right="0px"
              px="3.5px"
              h="13px"
              color="white"
              fontSize="8px"
              bg="black"
              borderRadius="50%"
            >
              {num}
            </Text>
          </Box>
        </Box>
        <Text display={{ lg: "initial", md: "none", sm: "none", base: "none" }}>
          Cart
        </Text>
      </Flex>
    );
}

export default Cart