const Commonsidebar = ({ toggle, settoggle, children, mdhidden }) => {
  return (
    <div className={`relative z-[99999999] ${mdhidden ? "lg:hidden" : ""}`}>
      {" "}
      <div
        className={`bg-black/[0.7] top-0 ${
          toggle ? "opacity-1 visible" : "opacity-0 invisible"
        } h-full w-full fixed duration-500`}
        onClick={() => settoggle(false)}
      >
        <div
          className={`h-full fixed w-[300px] top-0 xl:w-[500px] bg-white  ${
            toggle ? "left-0" : "left-[-100%]"
          } duration-[600ms]`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Commonsidebar;
