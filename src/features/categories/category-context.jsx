/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState();

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategoryContext = () => {
  return useContext(CategoryContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { useCategoryContext, CategoryProvider };
