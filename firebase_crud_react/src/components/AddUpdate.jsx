import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Modal from "./Modal";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { db } from "../config/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddUpdate = ({ contact, isOpen, OnClose, isUpdate }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      toast.success("Contact added successfully");
      OnClose();
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      toast.success("Contact updated successfully");
      OnClose();
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} OnClose={OnClose} className="text-black">
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? { name: contact.name, email: contact.email }
              : { name: "", email: "" }
          }
          onSubmit={(values) =>
            isUpdate ? updateContact(values, contact.id) : addContact(values)
          }
        >
          <Form className="m-3 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className=" border rounded-lg p-1" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className=" border rounded-lg p-1" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className=" bg-dark-yellow rounded-md p-2 font-medium m-3"
              >
                {isUpdate ? "Update" : "Add"} Contact
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddUpdate;
