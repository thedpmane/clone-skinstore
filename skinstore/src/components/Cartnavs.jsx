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
  Spacer,
} from "@chakra-ui/react";
import { BsBasket3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UseProductContext } from "../Context/AppContext";
export default function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartitem, setCartitem } = UseProductContext();
  var total = 0;
  for (let i = 0; i < cartitem.length; i++) {
    total = total + cartitem[i].price;
  }
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
        <Flex w={"130px"}>
          <Box marginRight="3px">
            <BsBasket3 size="25px" />
          </Box>
          <Box fontWeight="normal" fontSize="23px">
            Cart
          </Box>
          <Box
            ml={"5px"}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            fontWeight="bold"
            borderRadius="50%"
            w={"30px"}
            bg="black"
            color="white"
          >
            {cartitem.length}
          </Box>
        </Flex>
      </MenuButton>

      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        w={[200, 200, 300]}
      >
        <Box>
          <Flex>
            <Box p="4">
              <label htmlFor="">{cartitem.length} items in your cart</label>
            </Box>
            <Spacer />
            <Box p="4">${total}</Box>
          </Flex>
          <Link to={"/cart"}>
            <Button
              color="white"
              borderRadius="none"
              width="100px"
              ml={"20px"}
              bg="black"
              _hover={{ backgroundColor: "cyan" }}
            >
              VIEW CART
            </Button>
          </Link>
        </Box>

        <MenuItem>Your Orders</MenuItem>
        <MenuItem>Your Referrals</MenuItem>
      </MenuList>
    </Menu>
  );
}
