import React, { useState } from 'react';
import { StyleInput } from '../Styles';
function SenhaInput() {
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const toggleMostrarSenha = () => {
      setMostrarSenha(!mostrarSenha);
  };

  return (
  <StyleInput>
   <input
          type={mostrarSenha ? 'text' : 'password'}
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}/>
      <span
          onClick={toggleMostrarSenha}/>
    </StyleInput>
    
  );
}
export default SenhaInput;