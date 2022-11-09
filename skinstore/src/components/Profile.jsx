import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Button,
  Flex,
  Box
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
          <Box w="auto" marginRight="3px">
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
        <MenuItem>
          <Button w={[180, 180, 270]}>Login</Button>
        </MenuItem>
        <MenuItem>
          <Button w={[180, 180, 270]}>Register</Button>
        </MenuItem>
        <MenuItem>Wishlist</MenuItem>
        <MenuItem>Your Orders</MenuItem>
        <MenuItem>Your Referrals</MenuItem>
      </MenuList>
    </Menu>
  );
}
