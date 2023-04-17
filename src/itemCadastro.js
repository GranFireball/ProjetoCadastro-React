export default function ItemCadastro(props){
    return(
        <div className="itemCadastro">
            <h3>Usuário: {props.cadastrado.usuario}</h3>
            <h3>Senha: {props.cadastrado.senha}</h3>
            <h3>Nick: {props.cadastrado.nick}</h3>
        </div>
    );
}