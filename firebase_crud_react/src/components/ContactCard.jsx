import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import useModalfunc from "../hooks/useModalfunc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddUpdate from "./AddUpdate";
const ContactCard = ({ contact }) => {
  const deleteDocevent = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact deleted successfully");
    } catch (err) {
      toast.error("Something went wrong");
      console.log(err);
    }
  };
  const { isOpen, OnOpen, OnClose } = useModalfunc([]);
  return (
    <>
      <div className="flex justify-between items-center  bg-yellow p-2  rounded-lg">
        <div className="flex gap-1 mt-2">
          <HiOutlineUserCircle className="text-orange text-4xl " />
          <div className="flex-column flex-grow">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
            {contact.id}
          </div>
        </div>
        <div className="flex">
          <RiEditCircleLine
            className="text-3xl cursor-pointer"
            onClick={OnOpen}
          />
          <IoMdTrash
            className="text-3xl  text-orange cursor-pointer"
            onClick={() => deleteDocevent(contact.id)}
          />
        </div>
      </div>
      <AddUpdate OnClose={OnClose} contact={contact} isOpen={isOpen} isUpdate />
    </>
  );
};

export default ContactCard;
