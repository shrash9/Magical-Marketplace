import { Container, Flex, Text, Button, HStack, useColorMode, Tooltip } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const{colorMode, toggleColorMode} = useColorMode();

  return <Container maxW={"1140 px"} px={4}> 
    <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base:"column",
        sm:"row"
      }}
    >
      <Text
        fontSize={{base:"22", sm:"28"}}
        fontWeight= {"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient={"linear(to-r, red.500, orange.400, green.500)"}
        bgClip={"text"}
        fontFamily="'Cinzel', serif"
        _hover={{
            bgGradient: "linear(to-r, gold, gold)", // NEW: Golden shine on hover
            bgClip: "text",
            textShadow: "0px 0px 15px gold", // NEW: Glowing effect
            transition: "0.3s ease-in-out", // Smooth transition
          }}
        >
        <Link to={"/"} > Magical Marketplace 🪄</Link>
      </Text>
       

      <HStack spacing={2} alignItems={"center"} >
        <Link to = {"/create"}>
          <Tooltip label="Add a Magical Item" hasArrow>
            {/* <Button colorScheme="yellow">
                <PlusSquareIcon fontSize={20}/>
              </Button> */}
            <Button bg="red.700" color="white" _hover={{ bg: "red.800" }}>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Tooltip>
        </Link>
        <Button colorScheme="orange" onClick={toggleColorMode}>
          {colorMode === "light" ? <IoMoon/> :<LuSun size="20"/> }
        </Button>
      </HStack>
    </Flex>
   </Container>
  
}

export default Navbar