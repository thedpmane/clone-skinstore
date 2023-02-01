import React, { createContext, useState,useContext, useEffect } from "react";
import dbdata from "../Data.json"
const AppContext = createContext();

function AppContextProvider({ children }) {

  // const [state, setState] = useState({
  //   isAuth: false,
  //   token: null,
  // });
  // const loginUser = (token) => {
  //   setState({
  //     ...state,
  //     isAuth: true,
  //     token,
  //   });
  // };
  // const logoutUser = () => {
  //   setState({
  //     ...state,
  //     isAuth: false,
  //     token: null,
  //   });
  // };

  const [cartitem,setCartitem]=useState([])
  const [singeldata,setSingledata]=useState(null)
  useEffect(() => {
   
  }, [singeldata])
  function OneProductdata(id){
    const sigleproductdata = dbdata.filter(element => element.id === id);
    setSingledata(sigleproductdata)
    
  }
  
  return (
    <AppContext.Provider value={{dbdata,OneProductdata,singeldata,cartitem,setCartitem}}>
      {children}
    </AppContext.Provider>
  );
}
const UseProductContext=()=>{
  return useContext(AppContext);
}
export  {AppContextProvider,UseProductContext,AppContext};
