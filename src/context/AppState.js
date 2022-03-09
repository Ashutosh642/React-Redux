import React from 'react'
import AppContext from './AppContext'

const AppState = (props) => {
    const state ={
        name : "Ashutosh",
        age: 25
    }
  return (
     
    <>
        <AppContext.Provider value={state}>
            {props.children}
        </AppContext.Provider>
    </>
  )
}

export default AppState