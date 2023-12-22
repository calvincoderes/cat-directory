// GlobalContext.tsx
import React, { createContext, useReducer} from 'react';
import { GlobalStateInterface, GlobalContextPropsInterface, GlobalProviderPropsInterface } from '../types/interfaces';
import { GlobalActionType } from '../types/types';

// Create the context with an initial state
export const GlobalContext = createContext<GlobalContextPropsInterface | undefined>(undefined);

// Define the initial state
const initialState: GlobalStateInterface = {
  breedId: null,
  catImages: []
  // ... add more properties as needed
};

// Define the reducer function
const globalReducer = (state: GlobalStateInterface, action: GlobalActionType): GlobalStateInterface => {
  switch (action.type) {
    case 'SET_BREED_ID':
      return { ...state, breedId: action.payload.breedId };
    case 'SET_CAT_IMAGES':
    // add more cases to handle different action
      return { ...state, catImages: action.payload.catImages };
    default:
      return state;
  }
};

export const GlobalProvider: React.FC<GlobalProviderPropsInterface> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Explicitly define the type for the value prop
  const contextValue: GlobalContextPropsInterface = { state, dispatch };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

// // Define the custom hook for using the context
// export const useGlobalContext = (): GlobalContextPropsInterface => {
//   const context = useContext(GlobalContext);
//   if (!context) {
//     throw new Error('useGlobalContext must be used within a GlobalProvider');
//   }
//   return context;
// };

// export { GlobalProvider, useGlobalContext };
