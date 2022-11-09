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
  Spacer
} from "@chakra-ui/react";
import { BsBasket3 } from "react-icons/bs";
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
          <Box w="auto" marginRight="3px">
            <BsBasket3 size="25px" />
          </Box>
          <Box w="auto" fontWeight="normal" fontSize="23px">
            Cart
          </Box>
        </Flex>
      </MenuButton>

      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        w={[200, 200, 300]}
      >
        <MenuItem>
          <Box>
            <Flex>
              <Box p="4">
                <label htmlFor="">6 items in your cart</label>
              </Box>
              <Spacer />
              <Box p="4">$122</Box>
            </Flex>
            <Button color="white" borderRadius="none" width="100px" bg="black">
              VIEW CART
            </Button>
          </Box>
        </MenuItem>
        <MenuItem>Your Orders</MenuItem>
        <MenuItem>Your Referrals</MenuItem>
      </MenuList>
    </Menu>
  );
}
