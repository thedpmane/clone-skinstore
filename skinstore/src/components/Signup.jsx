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
  Link
} from "@chakra-ui/react";
import { GrFacebook } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

 function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordsec, setShowPasswordsec] = useState(false);

  return (
    <Box
      mt='120px'
      w="600px"
      ml='30%'
     
      
    >
      <Flex>
        <Stack boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;" spacing={8} mx={"auto"} maxW={"xlg"} py={12} px={10}>
          <Stack>
            <Heading ml="5" fontSize={"4xl"}>
              About You
            </Heading>
            <br />
            <Text pl="5" fontSize="m">
              Sign Up With
            </Text>
            <Flex gap="5">
              <Box ml="5">
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
          </Stack>
          <Box p={8}>
            <Stack spacing={4}>
              <Box>
                <FormControl id="fullName" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl isRequired id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
              </Box>

              <FormControl id="confemail" isRequired>
                <FormLabel>Confirm Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
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
                  <Input type={showPasswordsec ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPasswordsec(
                          (showPasswordsec) => !showPasswordsec
                        )
                      }
                    >
                      {showPasswordsec ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="number">
                <FormLabel>Cell Phone Number (Optional)</FormLabel>
                <Input type="number" />
              </FormControl>

              <FormControl id="code">
                <FormLabel>Referral Code (Optional)</FormLabel>
                <Input type="text" />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"black"}
                  color={"white"}
                  _hover={{
                    bg: "cyan.500"
                  }}
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
          </Box>
        </Stack>
      </Flex>{" "}
    </Box>
  );
}
export default Signup