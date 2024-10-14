import { createContext } from "react";
import { programs } from "../assets/assets";

export const ProgramContext = createContext();

const ProgramContextProvider = (props) =>{

    const value = {
        programs
    }

    return (
        <ProgramContext.Provider value={value}>
            {props.children}
        </ProgramContext.Provider>
    )
}

export default ProgramContextProvider;

