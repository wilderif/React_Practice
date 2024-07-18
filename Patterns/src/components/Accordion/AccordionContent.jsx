import { useAccordionContext } from "./Accordion.jsx";

const AccordionContent = ({ id, className, children }) => {
  const { openItemId } = useAccordionContext();

  const isOpen = openItemId === id;
  console.log("content");
  console.log(openItemId, id, isOpen);

  return (
    <div
      className={
        isOpen ? `${className ?? ""} open` : `${className ?? ""} close`
      }
    >
      {children}
    </div>
  );
};

export default AccordionContent;
