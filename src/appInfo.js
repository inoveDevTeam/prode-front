import { createContext } from "react";

export const AppContext = createContext();

export const initialState = {
  partidos: [],
  ranking: [],
  user: {}
}

export const appReducer = (state, action)=>{
  switch(action.type){
    case "getPartidos":{
      return {
        ...state,
        partidos: action.payload,
      }
    }
    case "getRanking":{
      return {
        ...state,
        ranking: action.payload,
      }
    }
    case "getUser":{
      return {
        ...state,
        user: action.payload,
      }
    }
    default:
      return state;
  }
}