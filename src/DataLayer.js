import React, {createContext,useContext, useReducer} from 'react'


//StateContext
//preparing the datalayer
export const DataLayerContext=createContext()

//actual datalayer
export const DataLayer=({initialState,reducer,children})=>(
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>

)

//in ordder to get or add any data to the datalayer ie; do an action   we need a way to get access to it
export const useDataLayerValue=()=>useContext(DataLayerContext);