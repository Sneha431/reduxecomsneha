import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Stack,
  VStack,
  HStack,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import Container from "./Container";
import { useParams, useSearchParams } from "react-router-dom";

const AddEmp = () => {
  const endpoint = import.meta.env.VITE_APP_SERVER_ENDPOINT;
  const [id, setid] = useState(null);
  const { param } = useParams();
  const [searchparams] = useSearchParams();
  const editid = searchparams.get("id");
  const [msg, setmsg] = useState("");
  const [formvalue, setformvalue] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    status: "",
  });

  const serverEndpoint = import.meta.env.VITE_APP_SERVER_ENDPOINT;
  const fetcheditdataid = async () => {
    try {
      const response = await axios.get(`${serverEndpoint}users`);

      setid(parseInt(response.data[response.data.length - 1].id) + 1);
    } catch (error) {
      console.log(error);
    }
  };
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    // defaultValues: {
    //   name: param === "edit" ? formvalue.name : "demo",
    //   email: param === "edit" ? formvalue.email : "demo@demo.com",
    //   address: param === "edit" ? `${(typeof formvalue.address === 'object') ? `${formvalue.address.street}, ${formvalue.address.suite}, ${formvalue.address.city}, ${formvalue.address.zipcode}` : formvalue.address}` : "demo",
    //   phone: param === "edit" ? formvalue.phone : "000000",
    // }
  });

  const fetchdatajson = async () => {
    try {
      const response = await axios.get(`${endpoint}users/${editid}`);

      setValue("status", response.data.status);
      setValue("name", response.data.name);
      setValue("phone", response.data.phone);
      setValue(
        "address",
        `${
          typeof response.data.address === "object"
            ? `${response.data.address.street}, ${response.data.address.suite}, ${response.data.address.city}, ${response.data.address.zipcode}`
            : response.data.address
        }`
      );
      setValue("email", response.data.email);
      //  setValue("status", response.data.status)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (param == "edit") {
      fetchdatajson();
    }
    fetcheditdataid();
  }, []);
  // const fetcheditdata = async () => {
  //   try {
  //     const response = await axios.get(`${serverEndpoint}users?id=${editid}`);

  //     setformvalue(response.data[0]);
  //     console.log(editid)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const onSubmit = async (values) => {
    let formdata = JSON.stringify(values, null, 2);

    const formdatamew = {
      id: id.toString(),
      status: "active",
      ...JSON.parse(formdata),
    };

    // console.log(formdata)
    // console.log({ ...JSON.parse(formdata) })

    if (param == "add") {
      const responsedata = await axios
        .post(`${endpoint}users`, formdatamew, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          console.log(response), setmsg("Inserted Sucessfully");
        })
        .catch((error) => console.log(error));
    } else {
      console.log(formdata);
      const responsedata = await axios
        .put(`${endpoint}users/${editid}`, formdata, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          console.log(response), setmsg("Updated Sucessfully");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Container path={param} msg={msg}>
      <Stack className="max-w-2xl  mx-auto my-5">
        <VStack>
          {" "}
          <Box p="6" className="w-full">
            {" "}
            {formvalue.status}
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  placeholder="name"
                  {...register("name", {
                    required: "Name field is required",

                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  placeholder="email"
                  {...register("email", {
                    required: "Please enter an email",

                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="address">Address</FormLabel>
                <Input
                  id="address"
                  placeholder="address"
                  {...register("address", {
                    required: "Address field is required",

                    maxLength: {
                      value: 100,
                      message: "Maximum length should be 100",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.address && errors.address.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="phone">Phone</FormLabel>
                <Input
                  id="phone"
                  placeholder="phone"
                  {...register("phone", {
                    required: "Phone number field is required",

                    minLength: 6,
                    maxLength: 12,
                    message: "Minimum length should be 4",
                  })}
                />
                <FormErrorMessage>
                  {errors.phone && errors.phone.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <Stack spacing={3}>
                  <Select
                    variant="filled"
                    name="status"
                    {...register("status")}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </Select>
                  {/* <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select> */}
                </Stack>
              </FormControl>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Box>
        </VStack>
      </Stack>
    </Container>
  );
};

export default AddEmp;
