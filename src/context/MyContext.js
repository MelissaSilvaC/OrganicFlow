import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [id, setID] = useState(null);
  const [role, setRole] = useState(null);
  const [photo, setPhoto] = useState(null);

  return (
    <MyContext.Provider value={{ id, setID ,role,setRole, photo, setPhoto}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
