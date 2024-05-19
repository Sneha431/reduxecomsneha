import { Form, Formik } from "formik";
import { InputControl, SubmitButton, TextareaControl } from "formik-chakra-ui";
import { Stack, Heading, useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Addpostevent, Updatepostevent } from "../../Api";
import { useEffect } from "react";
const AddPost = ({ postdata, isUpdate, id }) => {
  const toast = useToast();
  const cache = useQueryClient();

  const { data, mutateAsync, isError, isSuccess, error } = useMutation({
    queryKey: isUpdate ? ["updatepost"] : ["addnewpost"],
    mutationFn: isUpdate ? Updatepostevent : Addpostevent,
    onSuccess: () => {
      isUpdate
        ? cache.invalidateQueries(["post", id])
        : cache.invalidateQueries("posts");
    },
    onMutate: async (newPost) => {
      if (isUpdate) {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await cache.cancelQueries({ queryKey: ["post"] });

        // Snapshot the previous value
        const previousPost = cache.getQueryData(["post", id]);
        console.log("previousPost", previousPost);
        // Optimistically update to the new value
        cache.setQueryData(["post", id], (old) => {
          console.log("old", old);
          return { data: newPost };
        });
        console.log(newPost);
        // Return a context object with the snapshotted value
        return { previousPost };
      }
    },
    onError: (error, newPost, context) => {
      cache.setQueryData(["post", id], context.previousPost);
      toast({ status: "error", title: error.message });
    },
    onSettled: () => {
      // cache.invalidateQueries(["post", id]);
    },
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
  console.log(data);
  return (
    <div>
      <Formik
        initialValues={{
          title: isUpdate ? postdata.title : "",
          body: isUpdate ? postdata.body : "",
        }}
        onSubmit={async (values) =>
          isUpdate
            ? await mutateAsync({ title: values.title, body: values.body, id })
            : await mutateAsync({ title: values.title, body: values.body })
        }
      >
        <Form>
          <Stack my="4">
            <Heading fontSize="2xl">{isUpdate ? "Update" : "Add"} Post</Heading>

            <InputControl name="title" label="Title" />
            <TextareaControl name="body" label="Content" />
            <SubmitButton>Submit</SubmitButton>
          </Stack>
        </Form>
      </Formik>
    </div>
  );
};

export default AddPost;
