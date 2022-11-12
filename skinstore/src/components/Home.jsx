import React from 'react'


import { Link } from "react-router-dom";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
//function for Carousel start here

function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState( null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Single Day sale',
      text:
        "Celebrate single day with something special. use code SPECIAL10 to get 10% discount on selected items",
      image:
        'https://static.thcdn.com/images/xlarge/webp/widgets/121-us/58/SS-Batching-Christmas-Homepage_Banner-EG1180x450_copy_2-060058.jpg',
    },
    {
      title: 'The Holiday Edit',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-New_Project_%283%29-085610.jpg',
    },
    {
      title: 'Holiday Special',
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://static.thcdn.com/images/xlarge/webp/widgets/121-us/55/Shot6-1180x450-095455.jpeg',
    }, 
    {
        title: 'Black Friday3',
        text:
          "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
          'https://static.thcdn.com/images/xlarge/webp/widgets/121-us/17/original-1024-STDCRE-42756-SS-WC-Cyber-Waitlist-Site-Assets-1180x450-040317.jpg',
      },
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      py={['2', '4', '8']}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
// 3. categories start here
function Categories() {
  const data = [
    "https://static.thcdn.com/images/small/webp/widgets/121-us/01/Page-001-025201.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-002-025209.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-003-025217.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/21/Page-004-025221.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/40/Page-005-025240.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-006-025258.png"
  ];
  return (
    <Box m={"30"}>
    <Text align="center" fontSize="4xl">
    Shop by Category
  </Text>

    <SimpleGrid columns={[2, 3, 6]} >
    {data.map((user) => (
        <Box  _hover={{ cursor: "pointer" }}  key={user}>
          <Image src={user} borderRadius="" alt={user} />
        </Box>
      ))}
</SimpleGrid>
    </Box>
  );
}






///////////////////////////top tranding start here



function Toptrending() {
  const data = [
    {
      img:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/39/17_1009_CucumberExtract_US17_1009_CucumberExtract_US-014239.jpg",
      title: "SkinCeuticals Skincare",
      desc:
        "Elemis skincare products are carefully formulated to maximize the potential of your skin and restore its best qualities to enhance your natural beauty."
    },
    {
      img:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/39/0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot8-600x600-063639.png",
      title: "Elemis",
      desc:
        "Elemis skincare products are carefully formulated to maximize the potential of your skin and restore its best qualities to enhance your natural beauty."
    },
    {
      img:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/42/best_selling-064442.jpg",
      title: "Neocutis",
      desc:
        "Elemis skincare products are carefully formulated to maximize the potential of your skin and restore its best qualities to enhance your natural beauty."
    },
    {
      img:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/10/0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_14-600x600-091010.jpg",
      title: "All TriPollar",
      desc:
        "Elemis skincare products are carefully formulated to maximize the potential of your skin and restore its best qualities to enhance your natural beauty."
    },
    {
      img:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/54/original-original-original-500x500-085431-083903-064454.jpg",
      title: "All Christophe Robin",
      desc:
        "Elemis skincare products are carefully formulated to maximize the potential of your skin and restore its best qualities to enhance your natural beauty."
    },
    {
      img:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/28/original-Screenshot_2022-03-07_141739-065628.png",
      title: "Estée Lauder",
      desc:
        "Elemis skincare products are carefully formulated to maximize the potential of your skin and restore its best qualities to enhance your natural beauty."
    },
    {
      img:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/43/Untitled_design_%2813%29-051843.jpg",
      title: "ESPA",
      desc:
        "Elemis skincare products are carefully formulated to maximize the potential of your skin and restore its best qualities to enhance your natural beauty."
    },
    {
      img:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/23/original-perricone.ss-013423.jpg",
      title: "Perricone MD Skin Products",
      desc:
        "Elemis skincare products are carefully formulated to maximize the potential of your skin and restore its best qualities to enhance your natural beauty."
    },
    {
      img:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/51/original-0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_13-500x500-023351.jpg",
      title: "TriPollar Device",
      desc:
        "Elemis skincare products are carefully formulated to maximize the potential of your skin and restore its best qualities to enhance your natural beauty."
    }
  ];
  return (
    <Box _hover={{ cursor: "pointer" }} >
      <Text align="center" fontSize="4xl" p="5">
        Trending Offers
      </Text>
      <SimpleGrid columns={[1, 2, 3]} spacing='40px'>
        {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
        {data.map((user) => (
          <Box>
            <Image borderRadius="100%" src={user.img} alt={user} />
            <Text fontSize="3xl" align="center" mt="4">
              {user.title}
            </Text>
            <Text fontSize="xs" align="center">
              {user.desc}
            </Text>
            <Box align="center" mt="4">
              <Button
                colorScheme="black"
                fontWeight="normal"
                variant="outline"
                borderRadius="none"
                _hover={{ backgroundColor: "cyan.100" }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
        ))}
 
</SimpleGrid>
  

    </Box>
  );
}

//////////////////////////brand imgage and blog box read more

function BrandandBlog() {
  const data = [
    {
      img:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/06/original-SkinC_Ferulic-034413-012406.jpg",
      title: "SkinCeuticals: Vitamin C ",
      desc:
        "SkinCeuticals believes in celebrating the skin-protective and rejuvenating powers of vitamin C every day, but this year they’re making sure your eyes and lips ."
    },
    {
      img:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/51/original-0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_13-500x500-023351.jpg",
      title: "SkinCeuticals: Vitamin C ",
      desc:
        "In 2008, TriPollar launched themselves into the home beauty sphere with an aim to innovate the technology behind at-home treatments and devices."
    },
    {
      img:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/16/original-NB-IMAGE-5---2022-SKINSTORE-LANDING-PAGE-025016.jpg",
      title: "Discover Natura Bissé   ",
      desc:
        "With an aim to help their clients’ skin as they age and to turn their daily skin care routines into a moment of real self-care, Natura Bissé works to discover the latest scientific ."
    }
  ];
  const databrandimg = [
    "https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png"
  ];
  return (
    <Box _hover={{ cursor: "pointer" }} marginTop={"70px"}>
      <Box>
        <SimpleGrid columns={[2, 3, 6]} spacing="20px">
          {databrandimg.map((brandimg) => (
            <Box>
              <Image src={brandimg} alt={brandimg} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Text align="center" fontSize="4xl" p="5">
        Over On the Blog
      </Text>
      <SimpleGrid columns={[1, 3, 3]} spacing="40px">
        {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
        {data.map((user) => (
          <Box>
            <Image borderRadius="100%" src={user.img} alt={user} />
            <Text fontSize="3xl" align="center" mt="4">
              {user.title}
            </Text>
            <Text fontSize="xs" align="center">
              {user.desc}
            </Text>
            <Box align="center" mt="4">
              <Button
                colorScheme="black"
                fontWeight="normal"
                variant="outline"
                borderRadius="none"
                _hover={{ backgroundColor: "cyan.100" }}
              >
                READ MORE
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}


const Home = () => {
  return (<>

     
<Container pos="relative" maxW='90%' as="main" paddingTop={"80px"}>
  
  <Link  to={`/products`}>
  <CaptionCarousel/>
        </Link>
  
   <Link  to={`/products`}>
   <Categories/>
        </Link>
   <Toptrending/>
   <BrandandBlog />
   </Container>

  
    </>
  )
}

export default Home