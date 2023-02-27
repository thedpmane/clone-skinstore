import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";

import { GrFacebook } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { UseProductContext } from "../Context/AppContext";

export default function SimpleCard() {
  const Navigate = useNavigate();
  const { state, setState } = UseProductContext();
  const [token, setToken] = useState(
    localStorage.getItem("skinstoreToken") || null
  );
  const initalState = {
    email: "",
    password: "",
  };
  const MyReducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "email":
        return { ...state, ...{ email: payload } };
      case "password":
        return { ...state, ...{ password: payload } };
      default:
        return initalState;
    }
  };

  const [loginDetails, dispatch] = useReducer(MyReducer, initalState);

  const handleSubmit = () => {
    try {
      axios
        .post("https://splendid-fedora-cow.cyclic.app/login", loginDetails)
        .then((res) => {
          alert("Login Success");

          setState({
            ...state,
            isAuth: true,
            userData: res.data.user,
            token: res.data.token,
          });
          localStorage.setItem("skinstoreToken", res.data.token);
          Navigate("/");
        });
    } catch (error) {
      console.log(error);
      alert("something went wrong try again with correct details");
      localStorage.setItem("skinstoreToken", null);
    }
  };
  console.log(state);
  return (
    <Flex gap="124px" mt="120" ml="150">
      <Box>
        <Stack
          boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
          w={"xl"}
          px={6}
        >
          <Text as="samp" fontSize="3xl" m="auto">
            Existing Customers
          </Text>
          <Box rounded={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) =>
                    dispatch({ type: "email", payload: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) =>
                    dispatch({ type: "password", payload: e.target.value })
                  }
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Text as="u">FORGOTTEN YOUR PASSWORD?</Text>
                </Stack>
                <Button
                  borderRadius="none"
                  bg={"black"}
                  color={"white"}
                  _hover={{
                    bg: "cyan.500",
                  }}
                  onClick={handleSubmit}
                >
                  LOG IN
                </Button>
              </Stack>
            </Stack>
            <br />
            <Text fontSize="sm">Or, Continue with</Text>
            <Flex gap="5">
              <Box>
                {" "}
                <Button
                  w="220px"
                  borderRadius="none"
                  bg="white"
                  border="1px solid"
                  leftIcon={<GrFacebook />}
                >
                  Facebook
                </Button>
              </Box>

              <Box>
                <Button
                  w="220px"
                  borderRadius="none"
                  bg="white"
                  border="1px solid"
                  leftIcon={<FcGoogle />}
                >
                  Facebook
                </Button>
              </Box>
            </Flex>
          </Box>
        </Stack>
      </Box>

      <Box
        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
        w={"xl"}
        px={6}
      >
        <Text as="samp" ml="27%" fontSize="3xl">
          New Customers
        </Text>
        <br />

        <br />
        <Link to="/signup">
          <Button
            w="100%"
            align="center"
            borderRadius="none"
            bg={"black"}
            color={"white"}
            _hover={{
              bg: "cyan.500",
            }}
          >
            REGISTER
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}
