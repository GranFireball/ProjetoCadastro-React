import { useContext} from "react";
import ItemCadastro from "./itemCadastro";
import {CadastradosContext} from "./CadastradosContext"

export default function ListCadastro(){
    const {cadastro} = useContext(CadastradosContext);
    return(
        <div className="listCadastro">
            {cadastro.map((cadastrado) => {
                return<ItemCadastro cadastrado={cadastrado}/>
            })}
        </div>
    );
}