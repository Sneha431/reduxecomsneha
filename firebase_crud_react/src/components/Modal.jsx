import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, OnClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="grid absolute backdrop-blur top-0 w-screen h-screen z-40">
          <div className="relative z-50 m-auto text-black min-h-[220px] min-w-[80%]  bg-white rounded-lg p-4 ">
            <div className="flex justify-end p-2">
              <AiOutlineClose
                className="text-2xl cursor-pointer"
                onClick={OnClose}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
