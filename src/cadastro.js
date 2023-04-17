import { useContext, useEffect, useState } from "react";
import { CadastradosContext } from "./CadastradosContext";

export default function Cadastro(){
    const {cadastro, setCadastro} = useContext(CadastradosContext);
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [nick, setNick] = useState('');
    const [invalidoUsuario, setInvalidoUsuario] = useState(false);
    const [invalidoNick, setInvalidoNick] = useState(false);

    useEffect(()=>{
        setInvalidoUsuario(false);
        setInvalidoNick(false);
        if(usuario !== '' && nick !== ''){
            cadastro.forEach((cadastrado) =>{                
                cadastrado.usuario === usuario &&
                setInvalidoUsuario(true);             
                cadastrado.nick === nick &&
                setInvalidoNick(true);
        })
        }
    }, [usuario, cadastro, nick])

    function verificaCadastro(){
        if(usuario === '' || senha === '' || nick === ''){
            return alert("Preencha todos os dados");
        }
        
        if(invalidoUsuario === false && invalidoNick === false){
            if(usuario.length > 12 || senha.length > 12 || nick.length > 12){
                alert("Dados com máximo de 12 caracteres"); 
            }
            else{
                setCadastro([...cadastro,{usuario: usuario, senha: senha, nick: nick}]);
                setUsuario('');
                setSenha('');
                setNick('');
            }

        }
        else if(invalidoUsuario === true && invalidoNick === true){
            alert("Usuário e Nick já existentes");
        }
        else if(invalidoUsuario === true){
            alert("Usuário já existente");
        }
        else if(invalidoNick === true){
            alert("Nick já existente");
        }
    }
    return(
        <div className="cadastro">
            <h2>Cadastrar-se</h2>
            <div className="preencher">
            <input type="text" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
            <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <input type="text" placeholder="Nick" value={nick} onChange={(e) => setNick(e.target.value)}/>
            </div>  
            <button onClick={verificaCadastro}>Enviar</button>
        </div>
    );
}