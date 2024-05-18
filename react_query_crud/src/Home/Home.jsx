import {
  Container,
  Flex,
  Grid,
  Heading,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const fetchPosts = async () => {
    try {
      const { data } = await axios.get("https://gorest.co.in/public/v1/posts");

      return data;
    } catch (err) {
      throw Error("Unable to fetch posts");
    }
  };
  const toast = useToast();

  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchPosts,
  });

  if (isError) {
    toast({
      title: "Error",
      description: error.message,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  } else if (isSuccess) {
    toast({
      title: "Success",
      description: "Data loaded successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }

  return (
    <>
      {isLoading ? (
        <Grid placeItems="center" height="100vh">
          <Spinner />
        </Grid>
      ) : (
        <Container maxW="1300px">
          {data &&
            data.data.length > 0 &&
            data.data.map((post) => {
              return (
                <Stack
                  p="4"
                  boxShadow="md"
                  borderRadius="xl"
                  border="1px solid #cccccc"
                  key={post.id}
                >
                  <Flex justifyContent="space-between">
                    <Text>User Id: {post.user_id}</Text>
                    <Text>Post Id: {post.id}</Text>
                  </Flex>
                  <Heading fontSize="2xl" justifyContent="start">
                    {post.title}
                  </Heading>
                  <Text>{post.body}</Text>
                </Stack>
              );
            })}
        </Container>
      )}
    </>
  );
};

export default Home;
