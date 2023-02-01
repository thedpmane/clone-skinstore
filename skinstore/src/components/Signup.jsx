import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { GrFacebook } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { useReducer, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordsec, setShowPasswordsec] = useState(false);
  const initalState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    moibleNumber: "",
    referralCode: "",
  };
  const MyReducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "name":
        return { ...state, ...{ name: payload } };
      case "email":
        return { ...state, ...{ email: payload } };
      case "password":
        return { ...state, ...{ password: payload } };
      case "confirmPassword":
        return { ...state, ...{ confirmPassword: payload } };
      case "moibleNumber":
        return { ...state, ...{ moibleNumber: payload } };
      case "referralCode":
        return { ...state, ...{ referralCode: payload } };
      default:
        return initalState;
    }
  };

  const [signupDetails, dispatch] = useReducer(MyReducer, initalState);
  const handleSubmit = () => {
    if (
      signupDetails.password !== "" &&
      signupDetails.confirmPassword !== "" &&
      signupDetails.password === signupDetails.confirmPassword
    ) {
      console.log(signupDetails);
    } else {
      alert("both password dont match check before sumiting");
    }
  };
  //console.log(signupDetails);
  return (
    <Box pt={["auto", "170px"]} maxW="600px" m="auto">
      <Flex>
        <Stack
          boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
          spacing={8}
          py={12}
          px={10}
        >
          <Stack>
            <Heading ml="5" fontSize={"4xl"}>
              About You
            </Heading>
            <br />
            <Text pl="5" fontSize="m">
              Sign Up With
            </Text>
            <Flex
              gap="5"
              m="auto"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box>
                <Button
                  ml={[0, 0, "40px"]}
                  w={["100%", "100%", "220px"]}
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
                  w={["100%", "100%", "220px"]}
                  borderRadius="none"
                  bg="white"
                  border="1px solid"
                  leftIcon={<FcGoogle />}
                >
                  Google
                </Button>
              </Box>
            </Flex>
          </Stack>

          <Stack p={8} spacing={4}>
            <FormControl id="fullName" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                onChange={(e) =>
                  dispatch({ type: "name", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl isRequired id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) =>
                  dispatch({ type: "email", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) =>
                    dispatch({ type: "password", payload: e.target.value })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl id="password2" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPasswordsec ? "text" : "password"}
                  onChange={(e) =>
                    dispatch({
                      type: "confirmPassword",
                      payload: e.target.value,
                    })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPasswordsec((showPasswordsec) => !showPasswordsec)
                    }
                  >
                    {showPasswordsec ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="number">
              <FormLabel>Cell Phone Number</FormLabel>
              <Input
                type="number"
                maxLength={10}
                onChange={(e) =>
                  dispatch({ type: "moibleNumber", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="code">
              <FormLabel>Referral Code (Optional)</FormLabel>
              <Input
                type="text"
                onChange={(e) =>
                  dispatch({ type: "referralCode", payload: e.target.value })
                }
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"black"}
                color={"white"}
                _hover={{
                  bg: "cyan.500",
                }}
                disabled={
                  initalState.name !== "" &&
                  initalState.email !== "" &&
                  initalState.password !== "" &&
                  initalState.confirmPassword !== "" &&
                  initalState.moibleNumber !== ""
                }
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"} fontSize="xs">
                By proceeding, you are confirming that you agree to our{" "}
                <Link fontWeight="semibold">Terms and Conditions</Link> and{" "}
                <Link fontWeight="semibold">Privacy Policy</Link>
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Flex>{" "}
    </Box>
  );
}
export default Signup;
