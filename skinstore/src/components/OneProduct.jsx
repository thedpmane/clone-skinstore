import {
  Box,
  Container,
  Stack,
  Text,
  Circle,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  useNumberInput,
  HStack,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { UseProductContext } from "../Context/AppContext";
const datas = [
  {
    src: "https://static.thcdn.com/images/xsmall/webp//productimg/original/12434020-1414866380762394.jpg",
    name: "PCA SKIN Weightless Protection Broad Spectrum SPF 45 1.7 oz",
    id: 18,
    price: 44.0,

    isNew: true,
    rating: 4.2,
    numReviews: 34,
  },
  {
    src: "https://static.thcdn.com/images/xsmall/webp//productimg/original/12434149-1904890154627722.jpg",
    name: "La Roche-Posay Anthelios Melt-in Milk Body &amp; Face Sunscreen Lotion Broad Spectrum SPF 100",
    id: 19,
    price: 24.99,

    isNew: true,
    rating: 4.2,
    numReviews: 34,
  },
  {
    src: "https://static.thcdn.com/images/xsmall/webp//productimg/original/11814869-9924866362390772.jpg",
    name: "Colorescience Sunforgettable Total Protection Face Shield SPF50 (PA+++) 55ml",
    id: 20,
    price: 39.0,

    isNew: true,
    rating: 4.2,
    numReviews: 34,
  },
];
function SelectQuantiy() {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 6,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="150px">
      <Button {...dec}>-</Button>
      <Input {...input} />

      <Button {...inc}>+</Button>
    </HStack>
  );
}
function Rating({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center">
      <Flex>
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: "1" }}
                  color={i < rating ? "gold" : "grey.300"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
            }
            return <BsStar key={i} style={{ marginLeft: "1" }} />;
          })}
      </Flex>
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}
function OneProduct() {
  const { singeldata, setCartitem, cartitem } = UseProductContext();
  const toast = useToast();
  function setCartitems(data) {
    const found = cartitem.find((element) => element.id == singeldata.id);
    console.log(data, found);
    if (cartitem.length === 0) {
      setCartitem([...cartitem, ...data]);

      toast({
        title: `Item added to Cart`,
        status: "success",
        isClosable: true,
        position: "top-right",
      });
    } else {
      if (found !== undefined) {
        toast({
          title: `This item is already in your cart`,
          status: "info",
          isClosable: true,
          position: "top-right",
        });
      } else {
        toast({
          title: `Item added to Cart`,
          status: "success",
          isClosable: true,
          position: "top-right",
        });
        setCartitem([...cartitem, ...data]);
      }
    }
  }

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Box border={"solid"} h="500px" mt="8" ml="12">
            <Image
              rounded={"md"}
              alt={"product image"}
              src={singeldata[0].src}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "100%", lg: "100%" }}
            />
          </Box>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {singeldata[0].name}
            </Heading>
            <br />
            <Rating rating={4} numReviews={25} />
            <br />
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              $ {datas[0].price}.00 USD
            </Text>
            <hr />
            <br />
            <SelectQuantiy />
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text>
              <Text fontSize={"lg"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{" "}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Between lugs:
                  </Text>{" "}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Bracelet:
                  </Text>{" "}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case:
                  </Text>{" "}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case diameter:
                  </Text>{" "}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Dial color:
                  </Text>{" "}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Crystal:
                  </Text>{" "}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Water resistance:
                  </Text>{" "}
                  5 bar (50 metres / 167 feet){" "}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
              bg: "cyan",
            }}
            onClick={() => setCartitems(singeldata)}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>

      <br />
      <br />
      <Text fontSize="3xl" w="30%" m="auto">
        Other customers bought:
      </Text>
      <br />
      <SimpleGrid columns={[2, 2, 3]} spacing="20px">
        {datas.map((data, i) => (
          <Box key={i}>
            <Flex
              p={50}
              w="full"
              alignItems="center"
              justifyContent="center"
              key={i}
            >
              <Box
                // bg={useColorModeValue("white", "gray.800")}
                maxW="sm"
                position="relative"
              >
                {data.isNew && (
                  <Circle
                    size="10px"
                    position="absolute"
                    top={2}
                    right={2}
                    bg="red.200"
                  />
                )}

                <Image
                  src={data.src}
                  alt={`Picture of ${data.name}`}
                  roundedTop="lg"
                />

                <Box p="6">
                  <Button
                    borderRadius="none"
                    border="1px"
                    borderColor="red"
                    fontSize="13px"
                    bg="white"
                  >
                    Select Your Gift
                  </Button>
                  <Box>
                    <Box
                      h="150"
                      mt="2"
                      fontSize="xl"
                      fontWeight="semibold"
                      display="flex"
                      alignItems="center"
                    >
                      {data.name}
                    </Box>
                  </Box>

                  <Flex justifyContent="space-between" alignContent="center">
                    <Rating rating={data.rating} numReviews={data.numReviews} />

                    <Box
                      fontSize="xl"
                      // color={useColorModeValue("gray.800", "white")}
                    ></Box>
                  </Flex>
                  <Box fontSize="30px" as="span" color={"gray.600"} mr="2">
                    $ {data.price.toFixed(2)}
                  </Box>
                </Box>

                <Button
                  _hover={{ bg: "cyan" }}
                  marginLeft="20px"
                  w="100%"
                  bg="black"
                  color="white"
                  borderRadius="none"
                >
                  Quick Buy
                </Button>
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default OneProduct;
