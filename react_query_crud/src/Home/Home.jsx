import {
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import AddPost from "./Components/AddPost";
import { delpostevent, fetchPostsbyid, fetchPostsbypagenum } from "../Api";
import { useEffect } from "react";

const Home = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const num = parseInt(id ? id : 1);
  const toast = useToast();
  const cache = useQueryClient();

  const { data, isLoading, isError, isSuccess, error } = useQuery({
    queryKey: ["posts", num],
    queryFn: () => fetchPostsbypagenum(num),
    onSuccess: () => {
      cache.invalidateQueries("posts");
    },
  });
  //dependent query enabled
  // const { data: singlepost } = useQuery({
  //   queryKey: ["post", 125024],
  //   enabled: isError,
  //   queryFn: () => fetchPostsbyid(125024),
  // });
  // console.log("post", singlepost);
  // console.log("posts", data);
  const {
    isLoading: isMutating,
    mutateAsync,
    isSuccess1,
    isError1,
  } = useMutation({
    queryKey: ["deletepost"],
    mutationFn: delpostevent,
    onSuccess: () => {
      cache.invalidateQueries(["post", id]);
    },
  });
  useEffect(() => {
    if (isError || isError1) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [isError, isError1, toast]);

  useEffect(() => {
    if (isSuccess || isSuccess1) {
      toast({
        title: "Success",
        description: "Data loaded successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [isSuccess, isSuccess1, toast]);

  return (
    <Container maxW="1300px">
      {isLoading ? (
        <Grid placeItems="center" height="100vh">
          <Spinner />
        </Grid>
      ) : (
        <>
          <AddPost />
          <Flex justify="space-between" mb="6">
            <Button
              colorScheme="red"
              isDisabled={!data?.headers["x-links-previous"]}
              onClick={() => {
                if (data.headers["x-links-previous"]) {
                  navigate(`/${num - 1}`);
                }
              }}
            >
              Prev
            </Button>
            <Text>Current Page: {num}</Text>
            <Button colorScheme="green" onClick={() => navigate(`/${num + 1}`)}>
              Next
            </Button>
          </Flex>
          {data?.data.length > 0 &&
            data.data.map((post) => (
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
                <Heading fontSize="2xl">{post.title}</Heading>
                <Text>{post.body}</Text>
                <Flex justify="space-between">
                  <Button
                    onClick={() => navigate(`/post/${post.id}`)}
                    bgColor="blue"
                    color="white"
                  >
                    View Full Post
                  </Button>
                  <Button
                    isLoading={isMutating}
                    onClick={async () => {
                      await mutateAsync({ id: post.id });
                    }}
                    bgColor="red"
                    color="white"
                  >
                    Delete
                  </Button>
                </Flex>
              </Stack>
            ))}
        </>
      )}
    </Container>
  );
};

export default Home;
