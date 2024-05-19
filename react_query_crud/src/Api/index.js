import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  headers: {
    Authorization:
      "Bearer a3c44247ad05896934310887bfc41a37a19040267c987a1360bbde2afb65de70",
  },
});
console.log(api.baseURL);
const Addpostevent = async ({ title, body }) => {

    console.log(title, body);
    try {
      const { data } = await api.post(
        `users/6914924/posts`,
        { title, body },  {headers: {
    Authorization:
      "Bearer a3c44247ad05896934310887bfc41a37a19040267c987a1360bbde2afb65de70",
  }}
      );

      return data;
    } catch (err) {
    
      throw Error("Unable to fetch posts");
    }
  };
    const fetchPostsbypagenum = async (num) => {
      
    try {
      const data = await api.get(
        `users/6914924/posts/?page=${num}`,{headers: {
    Authorization:
      "Bearer a3c44247ad05896934310887bfc41a37a19040267c987a1360bbde2afb65de70",
  }}
       
      );
      console.log(data);
      return data;
    } catch (err) {
      throw Error("Unable to fetch posts");
    }
  };
   const fetchPostsbyid = async (id) => {
    try {
      const { data } = await api.get(
        `/posts/${id}`,{headers: {
    Authorization:
      "Bearer a3c44247ad05896934310887bfc41a37a19040267c987a1360bbde2afb65de70",
  }}
        
      );

      return data;
    } catch (err) {
      throw Error("Unable to fetch post");
    }
  };
const Updatepostevent = async ({ title, body,id }) => {

    console.log(title, body);
    try {
      const { data } = await api.patch(
        `/posts/${id}`,
        { title, body },  {headers: {
    Authorization:
      "Bearer a3c44247ad05896934310887bfc41a37a19040267c987a1360bbde2afb65de70",
  }}
      );

      return data;
    } catch (err) {
    
      throw Error("Unable to fetch posts");
    }
  };
  const delpostevent = async ({id }) => {


    try {
      const { data } = await api.delete(
        `/posts/${id}`,
      {headers: {
    Authorization:
      "Bearer a3c44247ad05896934310887bfc41a37a19040267c987a1360bbde2afb65de70",
  }}
      );

      return data;
    } catch (err) {
    
      throw Error("Unable to fetch posts");
    }
  };
  export {Addpostevent,fetchPostsbyid,fetchPostsbypagenum,Updatepostevent,delpostevent}