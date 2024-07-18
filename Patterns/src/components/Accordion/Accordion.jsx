import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

export const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "Accordion-related components must be wrapped by <Accordion>"
    );
  }

  return ctx;
};

const Accordion = ({ children, className }) => {
  const [openItemId, setOpenItemId] = useState();
  const openItem = (id) => {
    setOpenItemId(id);
  };

  const closeItem = () => {
    setOpenItemId(null);
  };

  const contextValue = {
    openItemId,
    openItem,
    closeItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

export default Accordion;
