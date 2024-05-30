import { Container, Text, VStack, Heading, Box, Image, Link, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg">Sharing my thoughts and experiences with the world.</Text>
        <Button as={Link} href="/add-post" colorScheme="teal" size="lg">Add New Post</Button>
        {posts.map((post, index) => (
          <Box key={index} w="100%" p={4} borderWidth="1px" borderRadius="md">
            <Heading as="h3" size="lg">{post.title}</Heading>
            <Text mt={2}>{post.content}</Text>
            {post.image && <Image src={post.image} alt={post.title} mt={4} />}
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;