import React, {createContext, useState} from 'react'

export const Authcontext=createContext();
export default function AuthContextProvider({children}) {
  const [data,setdata]=useState({})

  
  return (
    <Authcontext.Provider value={{data,setdata}}>
      {children}
    </Authcontext.Provider>
  )
}