import {
  Flex,
  Circle,
  Box,
  Image,
  SimpleGrid,
  Button,
  Select,
  Stack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { UseProductContext } from "../Context/AppContext";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
//console.log(datas)
import img from './FilterSection.png'
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
                  color={i < rating ? "teal.500" : "gray.300"}
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



function Products() {

  const { dbdata, OneProductdata, cartitem,setCartitem } = UseProductContext();
  
  const [datas, setDatas] = useState(dbdata);
  const ref = useRef("");
  const [option, setOption] = useState("");
  function handleChangeoption(e) {
    setOption(ref.current.value);
  }

  // console.log(cartitem)
  useEffect(() => {
    if (option === "discount") {
      setDatas(dbdata);
    } else if (option === "atoz") {
      const sorted = [...datas].sort((a, b) => a.name - b.name);
      setDatas(sorted);
    } else if (option === "Lowtohigh") {
      const sorted = [...datas].sort((a, b) => a.price - b.price);
      setDatas(sorted);
    } else if (option === "hightolow") {
      const sorted = [...datas].sort((a, b) => b.price - a.price);
      setDatas(sorted);
    } else {
      setDatas(dbdata);
    }
    localStorage.setItem("cartItems",JSON.stringify(cartitem))
  },[option, dbdata, datas,cartitem]);
function setCartitems(data){
 
 setCartitem([...cartitem,data])
}
  return (
    <Box marginTop={"80px"}>
      <Flex w="90%" margin={"auto"}>
        <Box w="21%" mt="14" ml="2">
          <Image src={img} alt='img not found' />

        </Box>
        <Box w="70%">
          <Box ml="12" pt="10">
            <Text fontSize="5xl" fontWeight="bold">
              Skin Care
            </Text>

            <Text fontSize="sm">
              Radiant skin starts with effective skincare, and here at SkinStore
              we've curated the very best skincare brands. Shop with the peace
              of mind of our 20 years experience as an authorized retailer for
              brands such as Arcona, Caudalie, Dermalogica, Elizabeth Arden,
              First Aid Beauty, Murad, Obagi, SkinCeuticals, SkinMedica,
              StriVectin & many more. Take your pick from cleansers,
              moisturizers, masks, serums and more to treat all your skincare
              concerns from anti-aging to acne.
            </Text>
          </Box>
          <Box>
            <Flex m="10">
              <Box>
                <Flex>
                  <Box m="2">
                    <label>Sort By</label>{" "}
                  </Box>
                  <Box>
                    <Select
                      ref={ref}
                      onChange={handleChangeoption}
                      placeholder="Select option"
                      borderColor="black"
                      w={["100px", "200px", "300px"]}
                    >
                      <option value="Lowtohigh">Price:Low to High</option>
                      <option value="hightolow">Price:High to Low</option>
                      <option value="atoz">A to Z</option>
                      <option value="discount">Discount</option>
                    </Select>
                  </Box>
                </Flex>
              </Box>
              <Spacer />
              <Box>
                <Stack direction="row" spacing={4}>
                  <Button
                    rightIcon={<FiChevronLeft />}
                    colorScheme="grey"
                    variant="outline"
                  ></Button>
                  <Button colorScheme="grey" variant="outline">
                    1
                  </Button>
                  <Button
                    rightIcon={<FiChevronRight />}
                    colorScheme="grey"
                    variant="outline"
                  ></Button>
                </Stack>
              </Box>
            </Flex>
          </Box>
          <SimpleGrid columns={[2, 2, 3]} spacing="20px">
            {datas.map((data, i) => (
              <Box key={i} _hover={{ cursor: "pointer" }}>
                <Flex
                  p={50}
                  w="full"
                  alignItems="center"
                  justifyContent="center"
                  key={i}
                >
                 
                  <Box maxW="sm" position="relative" onClick={() => { OneProductdata(data.id) }} >
                    {data.isNew && (
                      <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="red.200"
                      />
                    )}
                    <NavLink to={`/products/${data.id}`}>
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

                      <Flex
                        justifyContent="space-between"
                        alignContent="center"
                      >
                        <Rating
                          rating={data.rating}
                          numReviews={data.numReviews}
                        />
  
                        <Box
                          fontSize="xl"
                        //   color={useColorModeValue("gray.800", "white")}
                        ></Box>
                      </Flex>
                      <Box fontSize="30px" as="span" color={"gray.600"} mr="2">
                        $ {data.price.toFixed(2)}
                      </Box>
                    </Box>
                    </NavLink>
                  <Button
                  onClick={() => {setCartitems(data)}}
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
    </Box>
      </Flex >
    </Box >
  );
}

export default Products;
