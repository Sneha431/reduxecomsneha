import { useEffect, useRef, useState } from "react";
import { RiArrowDownDoubleFill, RiArrowUpDoubleFill } from "react-icons/ri";
const WrapperContainer = ({ children }) => {
  // const [topbtn, settopbtn] = useState(false);

  return <div className="mx-auto max-w-6xl">{children}</div>;
};

export default WrapperContainer;
