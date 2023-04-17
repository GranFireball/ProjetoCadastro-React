
import './App.css';
import Cadastro from './cadastro';
import ListCadastro from './listCadastro';
import CadastradosProvider from './CadastradosProvider';

function App() {
  return (
    <div>
      <CadastradosProvider>
        <Cadastro/>
        <ListCadastro/>
      </CadastradosProvider>
    </div>
  );
}

export default App;
