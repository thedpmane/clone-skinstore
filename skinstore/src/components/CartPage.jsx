import React, { useRef, useEffect } from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  HStack,
  Button,
  Input,
  useNumberInput,
  Spacer,
  Stack,
  CloseButton,
  useToast,
} from "@chakra-ui/react";
// import datas from "../Data.json";

import { AiFillLock } from "react-icons/ai";
import { UseProductContext } from "../Context/AppContext";
function SelectQuantiy({ qty }) {
  const ref2 = useRef(qty);
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: qty,
      min: 1,
      max: 6,
      precision: 0,
    });
  //console.log(ref2.current);
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="150px">
      <Button {...dec}>-</Button>
      <Input value={qty} {...input} />

      <Button {...inc}>+</Button>
    </HStack>
  );
}
function CartPage() {
  const toast = useToast();
  const ref = useRef(1);
  const { cartitem, setCartitem } = UseProductContext();

  let total = 0;
  if (cartitem.length !== 0) {
    for (let i = 0; i < cartitem.length; i++) {
      total += Math.floor(cartitem[i].price * cartitem[i].quantity);
    }
  }

  function RemoveCartItem(id) {
    const result = cartitem.filter((eachitem) => eachitem.id !== id);
    setCartitem(result);
    toast({
      title: `Item Removed from Cart`,
      status: "warning",
      isClosable: true,
      position: "top-right",
    });
  }

  return (
    <Box ml="200" mt="120px">
      <Box w="80%">
        <Flex>
          <Box>
            <Text fontSize="3xl">Your Cart</Text>
          </Box>
          <Spacer />

          <Box>
            <Button
              bg="black"
              color="white"
              _hover={{ bg: "cyan" }}
              leftIcon={<AiFillLock />}
            >
              {" "}
              CHECKOUT SECURELY NOW
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box width="70%">
        <hr />
        <Flex gap="48%">
          <Box>Items</Box>
          <Box>
            <Flex w="350px">
              <Text> Price </Text>
              <Spacer />
              <Text> Quantity </Text>
              <Spacer />
              <Text> Subtotal</Text>
            </Flex>
          </Box>
        </Flex>
        <hr />
      </Box>

      <br />
      {cartitem.map((data, i) => (
        <Box key={data.id + i} w="70%">
          <Flex gap="58px" align="center">
            <Box w="80px">
              <Image src={data.src} alt="cart image not found" />
            </Box>
            <Text> First Aid Beauty Ultra Repair Cream (6 oz.) </Text>
            <Text> ${data.price} </Text>
            <SelectQuantiy qty={data.quantity} />
            <Text ref={ref}> ${data.price} </Text>
            <Stack direction="row">
              <CloseButton
                size="lg"
                onClick={() => {
                  RemoveCartItem(data.id);
                }}
              />
            </Stack>
          </Flex>
          <br />
        </Box>
      ))}
      <hr width="70%" />

      <Flex w="61%">
        <Spacer />
        <Text fontSize="xl" colorScheme="teal">
          Cart Subtotal: ${Math.trunc(total)}
        </Text>
      </Flex>
      <hr width="70%" />
    </Box>
  );
}
export default CartPage;
