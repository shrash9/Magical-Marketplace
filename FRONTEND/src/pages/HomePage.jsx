 import {Container,Text,VStack,SimpleGrid} from '@chakra-ui/react'
import { useEffect } from 'react';
 import { Link } from "react-router-dom";
import { useProductStore } from '../store/product';
import ProductCard from "../components/ProductCard";

 
const HomePage = () => {
  const {fetchProducts,products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  },[fetchProducts]);
  console.log("products",products);

  return (
    <Container maxW='container.xl' py={12}> 
      <VStack spacing={8}>
      <Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, #CFC7B8, gray.600)"}
					bgClip={"text"}
					textAlign={"center"}
				>
					Treasures from Diagon Alley
				</Text>

        <SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>

				{products.length === 0 && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No magical treasures here 🧙🏻‍♂️ !{" "}<br />
						<Link to={"/create"}>
							<Text as='span' color='blue.200' _hover={{ textDecoration: "underline" }}>
								Craft an enchanted item
							</Text>
						</Link>
					</Text>
				)}
 
      </VStack>
  </Container>)
};

export default HomePage
