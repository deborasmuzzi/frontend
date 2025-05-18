import { useState } from 'react';
import { StyleInput} from '../../pages/Cadastro/Styles';
function Senha2Input() {
  const [senha, setSenha] = useState('')
    const [mostrarSenha] = useState(false);


  return (
    <StyleInput
         type={mostrarSenha ? 'text' : 'password'}
          placeholder="Confirme sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}/>
    );
}
export default Senha2Input;

