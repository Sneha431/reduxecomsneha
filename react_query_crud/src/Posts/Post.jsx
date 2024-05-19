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

import { useParams } from "react-router-dom";
import { fetchPostsbyid } from "../Api";
import { useEffect } from "react";
import AddPost from "../Home/Components/AddPost";
const Post = () => {
  const { id } = useParams();

  //   try {
  //     const { data } = await axios.get("https://gorest.co.in/public/v1/posts");

  //     return data;
  //   } catch (err) {
  //     throw Error("Unable to fetch posts");
  //   }
  // };

  const toast = useToast();

  // const { data, isLoading, isSuccess, isError, error } = useQuery({
  //   queryKey: ["todos"],
  //   queryFn: fetchPosts,
  // });

  const { data, isLoading, isError, isSuccess, error } = useQuery({
    queryKey: ["post", parseInt(id)],
    queryFn: () => fetchPostsbyid(id),
  });
  useEffect(() => {
    if (isError) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [isError, toast]);

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Success",
        description: "Data loaded successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [isSuccess, toast]);
  return (
    <>
      {isLoading ? (
        <Grid placeItems="center" height="100vh">
          <Spinner />
        </Grid>
      ) : (
        <Container maxW="1300px">
          <AddPost isUpdate={true} id={data.id} postdata={data} />
          <Stack
            p="4"
            boxShadow="md"
            borderRadius="xl"
            border="1px solid #cccccc"
            key={data.id}
          >
            <Flex justifyContent="space-between">
              <Text>User Id: {data.user_id}</Text>
              <Text>Post Id: {data.id}</Text>
            </Flex>
            <Heading fontSize="2xl" justifyContent="start">
              {data.title}
            </Heading>
            <Text>{data.body}</Text>
          </Stack>
        </Container>
      )}
    </>
  );
};

export default Post;
