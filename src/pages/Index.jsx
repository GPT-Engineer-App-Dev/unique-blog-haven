import { Container, Text, VStack, Heading, Box, Image, Link, Button, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Text fontSize="lg">Sharing my thoughts and experiences with the world.</Text>
        <Button as={Link} href="/add-post" colorScheme="teal" size="lg">Add New Post</Button>
        {posts.map((post, index) => (
          <Box key={index} w="100%" p={4} borderWidth="1px" borderRadius="md" position="relative">
            <Heading as="h3" size="lg">{post.title}</Heading>
            <Text mt={2}>{post.content}</Text>
            {post.image && <Image src={post.image} alt={post.title} mt={4} />}
          <IconButton
              icon={<DeleteIcon />}
              colorScheme="red"
              position="absolute"
              top="1rem"
              right="1rem"
              onClick={() => handleDelete(index)}
            />
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;