import  { useState } from 'react';
import { StyleInput } from '../../pages/Cadastro/Styles';
function SenhaInput() {
    const [senha, setSenha] = useState('');
    const [mostrarSenha] = useState(false);
  return (
  <StyleInput
          type={mostrarSenha ? 'text' : 'password'}
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}/>
    
  );
}
export default SenhaInput;