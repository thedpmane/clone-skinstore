import { Link } from "react-router-dom";

import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import { BiUser } from "react-icons/bi";
export default function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        variant="ghost"
        mx={1}
        py={[1, 2, 2]}
        px={4}
        w={"130px"}
        borderRadius={5}
        _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        <Flex>
          <Box w="auto" mr="3px">
            <BiUser size="25px" />
          </Box>
          <Box w="auto" fontSize="20px">
            Account{" "}
          </Box>{" "}
        </Flex>
      </MenuButton>

      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        w={[200, 200, 300]}
        display="grid"
        alignItems="center"
        justifyContent="center"
      >
        <Link to="/login">
          <Button
            w={[180, 180, 270]}
            _hover={{ backgroundColor: "cyan" }}
            backgroundColor="black"
            ml={"11px"}
            color="white"
          >
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button
            w={[180, 180, 270]}
            _hover={{ backgroundColor: "cyan" }}
            ml={"11px"}
            mt={"10px"}
          >
            Register
          </Button>
        </Link>
        <MenuItem mt={"10px"}>Wishlist</MenuItem>
        <MenuItem>Your Orders </MenuItem>
        <MenuItem>Your Referrals</MenuItem>
      </MenuList>
    </Menu>
  );
}
