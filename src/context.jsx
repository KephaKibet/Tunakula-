import React, {useContext,useEffect} from "react";

const AppContext = React.createContext()

const fetchData = async()=>{
  try {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    console.log(data)

  } catch (error) {
            console.log(error)

  }
}


const AppProvider = ({ children }) => {
  useEffect(() => {
    fetchData()
  },[])
  
  return (
  < AppContext.Provider value={{name:'John', role:'student'}}>
    {children}
    </AppContext.Provider >
      )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}


export {AppContext, AppProvider}