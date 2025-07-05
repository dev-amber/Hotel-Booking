import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "react-hot-toast";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [loadingToken, setLoadingToken] = useState(true); // Optional: handle loading state

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const t = await getToken();
      setToken(t);
        setLoadingToken(false);
        console.log("Clerk Token:", t);
      } catch (error) {
        toast.error("Failed to get token");
        setLoadingToken(false);
      }
    };

    fetchToken();
  }, [getToken]);
   


  




 


  const value = {
    token,
    loadingToken,
    navigate,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
