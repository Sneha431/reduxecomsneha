import { useState } from "react";

const useModalfunc = () => {
  const [isOpen, setOpen] = useState(false);
  const OnOpen = () => {
    setOpen(true);
  };
  const OnClose = () => {
    setOpen(false);
  };
  return { isOpen, OnOpen, OnClose };
};

export default useModalfunc;
