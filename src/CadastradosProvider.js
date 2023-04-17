
import { useState } from "react";
import { CadastradosContext } from "./CadastradosContext";

export default function CadastradosProvider({children}){
    const [cadastro, setCadastro] = useState([]);

    return(
        <CadastradosContext.Provider value={{cadastro, setCadastro}}>
            {children}
        </CadastradosContext.Provider>
    );
}