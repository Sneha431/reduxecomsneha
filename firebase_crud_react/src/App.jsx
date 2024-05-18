import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiPlus, FiSearch } from "react-icons/fi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

import ContactCard from "./components/ContactCard";
import AddUpdate from "./components/AddUpdate";
import useModalfunc from "./hooks/useModalfunc";
import { db } from "./config/firebase";
import NoContact from "./components/NoContact";
const App = () => {
  const [contacts, setcontact] = useState([]);
  const { isOpen, OnOpen, OnClose } = useModalfunc([]);
  useEffect(() => {
    const getcontacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactSnapshot = await getDocs(contactsRef);
        onSnapshot(contactsRef, (snapshots) => {
          const contactList = snapshots.docs.map((item) => ({
            ...item.data(),
            id: item.id,
          }));
          console.log(contactList);

          setcontact(contactList);
        });
        toast.success("Contact fetched successfully");
      } catch (error) {
        console.log(error);
      }
    };
    getcontacts();
  }, []);

  const onfiltercontacts = (value) => {
    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshots) => {
      const contactList = snapshots.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));
      console.log(contactList);

      const filteredcontacts = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setcontact(filteredcontacts);
    });
  };
  return (
    <>
      <ToastContainer />
      <div className="max-w-[400px] mx-auto px-4">
        <div>
          <Navbar />
          <div className="flex relative items-center mx-4">
            <FiSearch className="text-white text-3xl absolute ml-1" />
            <input
              type="text"
              className="bg-transparent border border-white rounded-md h-10 flex-grow text-white pl-9 text-lg"
              onChange={(e) => onfiltercontacts(e.target.value)}
            />
            <button
              className="bg-white rounded-3xl ml-2  text-5xl"
              onClick={OnOpen}
            >
              <FiPlus className="  text-black" />
            </button>
          </div>
        </div>
        <div className="justify-between text-black flex flex-col gap-4 mt-4 ">
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <ContactCard contact={contact} key={contact.id} OnOpen={OnOpen} />
            ))
          ) : (
            <NoContact />
          )}
        </div>
      </div>
      <AddUpdate OnClose={OnClose} isOpen={isOpen} />
    </>
  );
};

export default App;
