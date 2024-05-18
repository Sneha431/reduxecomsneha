function customRender(el,cont)
{
  const domEL = document.createElement(el.type);
  //domEL.innerHTML=el.children;
  // domEL.setAttribute("href",el.props.href);
  //   domEL.setAttribute("target",el.props.target);
  // cont.appendchild(domEL);
  
  for (const prop in el.props) {
if(prop === "children") continue

    domEL.innerHTML=el.children;
  domEL.setAttribute(prop,el.props[prop]);
  }
   cont.appendChild(domEL);
}

const react_el={
  type:"a",
  props:{
    href:"https://github.com/Sneha431/react_practice",
    
    target:"_blank"

  },
  children:"Click me",
}
const main_container= document.querySelector("#root");

customRender(react_el,main_container);